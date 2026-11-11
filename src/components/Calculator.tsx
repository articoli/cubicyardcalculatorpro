"use client";

import { useMemo, useState } from "react";
import {
  CUBIC_METERS_PER_CUBIC_YARD, cubicFeetToCubicYards, cubicMetersToCubicYards,
  cubicYardsFromArea, cubicYardsFromFeetAndInches, displayNumber, materials, safeNumber,
  type MaterialId,
} from "@/lib/calculations";
import type { CalcMode } from "@/lib/pages";

type Props = { mode?:CalcMode; initialMaterial?:MaterialId; compact?:boolean };
type InputProps = {label:string;value:string;onChange:(value:string)=>void;unit:string};
function NumberInput({label,value,onChange,unit}:InputProps) {
 return <label className="field"><span>{label}</span><div className="input-wrap"><input type="number" inputMode="decimal" min="0" step="any" value={value} onChange={event=>onChange(event.target.value)} aria-label={label}/><span className="unit">{unit}</span></div></label>;
}
export function Calculator({mode="dimensions",initialMaterial="generic",compact=false}:Props) {
 const [length,setLength]=useState("20");
 const [width,setWidth]=useState("10");
 const [depth,setDepth]=useState("4");
 const [value,setValue]=useState("27");
 const [area,setArea]=useState("200");
 const [material,setMaterial]=useState<MaterialId>(initialMaterial);
 const [density,setDensity]=useState(String(materials[initialMaterial].tonsPerYard||1.4));
 const [allowance,setAllowance]=useState("0");
 const [price,setPrice]=useState("");
 const [reverse,setReverse]=useState(false);
 const [shape,setShape]=useState<"rectangle"|"circle">("rectangle");
 const changeMaterial=(next:MaterialId)=>{setMaterial(next);setDensity(String(materials[next].tonsPerYard||1.4));};
 const result=useMemo(()=>{
    const l=safeNumber(length),w=safeNumber(width),d=safeNumber(depth),a=safeNumber(area),n=safeNumber(value),den=safeNumber(density);
    let y=NaN; let secondary:string | undefined;
    if(mode==="feet"){y=reverse?n:n/27;secondary=reverse?"Cubic feet":"Cubic yards";}
    else if(mode==="meters"){y=reverse?n:n/CUBIC_METERS_PER_CUBIC_YARD;secondary=reverse?"Cubic meters":"Cubic yards";}
    else if(mode==="tons"){y=n;secondary="US short tons";}
    else if(mode==="area"){y=cubicYardsFromArea(a,d);secondary="Cubic yards";}
    else if(shape==="circle"){y=Math.PI*(l/2)**2*d/324;secondary="Cubic yards";}
    else{y=cubicYardsFromFeetAndInches(l,w,d);secondary="Cubic yards";}
    const adj=safeNumber(allowance);
    const volume=Number.isFinite(y)&&Number.isFinite(adj)?y*(1+adj/100):NaN;
    const baseTons=Number.isFinite(den)?volume*den:NaN;
    const amount=safeNumber(price);
    const converted=mode==="feet"&&reverse? n*27 : mode==="meters"&&reverse?n*CUBIC_METERS_PER_CUBIC_YARD:NaN;
    return {volume,baseTons,amount,secondary,converted};
 },[length,width,depth,area,value,density,allowance,price,mode,reverse,shape]);
 const valid=Number.isFinite(result.volume) && Number.isFinite(result.baseTons);
 const convertedMode=mode==="feet"||mode==="meters";
 const showTons=mode==="tons"||(!convertedMode&&material!=="generic");
 return <section className={"calc-shell"+(compact?" calc-compact":"")} aria-label="Interactive cubic yard calculator">
   <div className="calc-head"><div><span className="eyebrow">LIVE MATERIAL ESTIMATOR</span><h2>{mode==="tons"?"Volume to Weight":mode==="feet"?"Cubic Feet Converter":mode==="meters"?"Cubic Meters Converter":mode==="area"?"Area + Depth Calculator":"Project Volume Calculator"}</h2><p>Enter measurements to get an instant estimate. No sign-up needed.</p></div><span className="calc-status"><span className="status-dot"/>Instant results</span></div>
   <div className="calc-grid">
     <div className="calc-fields">
       {mode==="dimensions"&&<div className="field-grid"><label className="field full"><span>Area shape</span><select value={shape} onChange={e=>setShape(e.target.value as "rectangle"|"circle")}><option value="rectangle">Rectangle / square</option><option value="circle">Circle (length = diameter)</option></select></label><NumberInput label={shape==="circle"?"Diameter":"Length"} value={length} onChange={setLength} unit="ft"/>{shape==="rectangle"&&<NumberInput label="Width" value={width} onChange={setWidth} unit="ft"/>}<NumberInput label="Depth / thickness" value={depth} onChange={setDepth} unit="in"/></div>}
       {mode==="area"&&<div className="field-grid"><NumberInput label="Area" value={area} onChange={setArea} unit="sq ft"/><NumberInput label="Depth / thickness" value={depth} onChange={setDepth} unit="in"/></div>}
       {convertedMode&&<><label className="field"><span>Conversion direction</span><select value={reverse?"reverse":"forward"} onChange={e=>setReverse(e.target.value==="reverse")}><option value="forward">{mode==="feet"?"Cubic feet → cubic yards":"Cubic meters → cubic yards"}</option><option value="reverse">{mode==="feet"?"Cubic yards → cubic feet":"Cubic yards → cubic meters"}</option></select></label><NumberInput label="Volume to convert" value={value} onChange={setValue} unit={reverse?"yd³":mode==="feet"?"ft³":"m³"}/></>}
       {mode==="tons"&&<NumberInput label="Cubic yards" value={value} onChange={setValue} unit="yd³"/>}
       {(mode==="dimensions"||mode==="area"||mode==="tons")&&<><label className="field"><span>Material</span><select value={material} onChange={e=>changeMaterial(e.target.value as MaterialId)}>{Object.entries(materials).filter(([key])=>mode!=="tons"||key!=="generic").map(([key,m])=><option key={key} value={key}>{m.label}</option>)}</select></label>
         {showTons&&<NumberInput label="Estimated bulk density (editable)" value={density} onChange={setDensity} unit="US tons/yd³"/>}
         {mode!=="tons"&&<NumberInput label="Additional allowance" value={allowance} onChange={setAllowance} unit="%"/>}
         <NumberInput label="Optional material price per yard" value={price} onChange={setPrice} unit="$/yd³"/>
       </>}
     </div>
     <div className="calc-result" aria-live="polite">
       <span className="result-kicker">YOUR ESTIMATE</span>
       <div className="result-primary">{convertedMode&&reverse?displayNumber(result.converted,3):displayNumber(result.volume,3)}<small>{convertedMode&&reverse?(mode==="feet"?"ft³":"m³"):"yd³"}</small></div>
       <p className="result-caption">{!valid?"Enter non-negative numeric values.":convertedMode?"Exact volume unit conversion":mode==="tons"?"Input volume (adjust density for weight)":"Geometric volume plus any chosen allowance"}</p>
       <div className="result-divide"/>
       <div className="result-stats">
       {convertedMode?<><span>Input volume</span><strong>{value} {reverse?"yd³":mode==="feet"?"ft³":"m³"}</strong><span>Conversion</span><strong>{mode==="feet"?"27 ft³ = 1 yd³":"1 yd³ = 0.764555 m³"}</strong></>:<>
       <span>Equivalent cubic feet</span><strong>{displayNumber(result.volume*27)} ft³</strong>
       {showTons&&<><span>Estimated weight</span><strong>{displayNumber(result.baseTons)} US tons</strong></>}
       {mode==="dimensions"&&<><span>Measured footprint</span><strong>{displayNumber(shape==="circle"?Math.PI*(safeNumber(length)/2)**2:safeNumber(length)*safeNumber(width))} sq ft</strong></>}
       {price!==""&&<><span>Estimated material cost</span><strong>${displayNumber(result.volume*result.amount)}</strong></>}
       </>}
       </div>
       {(mode==="dimensions"||mode==="area"||mode==="tons")&&<p className="result-footnote">{materials[material].note} Allowances and costs are estimates; verify supplier units and field conditions.</p>}
       {convertedMode&&<p className="result-footnote">Unit conversion uses the exact defined relationship, with results rounded for display.</p>}
     </div>
   </div>
 </section>;
}
