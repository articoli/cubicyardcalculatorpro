"use client";
import {useMemo,useState} from "react";
type Props={slug:string};
const initial:Record<string,{amount:string;length:string;width:string;depth:string;density:string;bag:string;price:string;delivery:string;tax:string;extra:string;bed:string;payload:string}>={};
function field(label:string,value:string,set:(value:string)=>void,unit:string,step="any"){
 return <label className="field"><span>{label}</span><div className="input-wrap">
 <input type="number" min="0" step={step} inputMode="decimal" aria-label={label} value={value} onChange={e=>set(e.target.value)}/>
 <span className="unit">{unit}</span></div></label>;
}
const number=(value:string)=>value.trim()!==""&&Number.isFinite(Number(value))&&Number(value)>=0?Number(value):NaN;
const format=(n:number,digits=3)=>Number.isFinite(n)?n.toLocaleString("en-US",{maximumFractionDigits:digits}):"—";
export function ExtendedCalculator({slug}:Props){
 const [amount,setAmount]=useState(slug==="cubic-inches-to-cubic-yards"?"46656":slug==="cubic-yard-cost-calculator"?"5":slug==="dump-truck-load-calculator"?"12":"2");
 const [length,setLength]=useState("20");
 const [width,setWidth]=useState("10");
 const [depth,setDepth]=useState(slug==="excavation-cubic-yard-calculator"?"3":"3");
 const [density,setDensity]=useState(slug==="landscape-rock-cubic-yard-calculator"?"1.3":"1.4");
 const [bag,setBag]=useState("2");
 const [price,setPrice]=useState("60");
 const [delivery,setDelivery]=useState("75");
 const [tax,setTax]=useState("0");
 const [extra,setExtra]=useState("0");
 const [bed,setBed]=useState("10");
 const [payload,setPayload]=useState("12");
 const [direction,setDirection]=useState("inches-to-yards");
 const vals=useMemo(()=>{
  const a=number(amount),l=number(length),w=number(width),d=number(depth),den=number(density),b=number(bag),p=number(price),del=number(delivery),t=number(tax),adj=number(extra),bd=number(bed),pl=number(payload);
  const geometric=slug==="excavation-cubic-yard-calculator"?l*w*d/27:l*w*d/324;
  const yards=geometric*(1+adj/100);
  const cyBags=b>0?Math.ceil(a*27/b):NaN;
  const packageSurplus=b>0?cyBags*b/27-a:NaN;
  const materialPrice=a*p;
  const finalPrice=materialPrice+del+(materialPrice*t/100);
  const converted=direction==="inches-to-yards"?a/46656:a*46656;
  const tonnes=yards*den;
  const volumeForTruck=bd>0&&den>0&&pl>0?Math.min(bd,pl/den):NaN;
  const loadCount=volumeForTruck>0?Math.ceil(a/volumeForTruck):NaN;
  const bank=geometric,loose=bank*(1+adj/100);
  return {geometric,yards,cyBags,packageSurplus,materialPrice,finalPrice,converted,tonnes,volumeForTruck,loadCount,bank,loose,a,p,del,t,den};
 },[slug,amount,length,width,depth,density,bag,price,delivery,tax,extra,bed,payload,direction]);
 const isMaterial=["sand-cubic-yard-calculator","landscape-rock-cubic-yard-calculator","compost-cubic-yard-calculator"].includes(slug);
 const isExcavation=slug==="excavation-cubic-yard-calculator";
 const isTruck=slug==="dump-truck-load-calculator";
 const isBags=slug==="cubic-yards-to-bags";
 const isCost=slug==="cubic-yard-cost-calculator";
 const isInches=slug==="cubic-inches-to-cubic-yards";
 return <section className="extended-calc" aria-label="Interactive specialist calculator">
 <div className="extended-calc-heading"><div><span className="eyebrow">INTERACTIVE CALCULATOR</span><h2>Calculate your estimate</h2><p>Use measured inputs or actual supplier values. Results update instantly.</p></div><span className="calc-status"><span className="status-dot"/>Browser-based</span></div>
 <div className="extended-calc-columns">
 <div className="extended-calc-inputs">
 {isBags&&<>{field("Volume to convert",amount,setAmount,"yd³")}{field("Labeled volume per bag",bag,setBag,"ft³")}</>}
 {isCost&&<>{field("Cubic yards to purchase",amount,setAmount,"yd³")}{field("Price per cubic yard",price,setPrice,"$/yd³")}{field("Delivery and fees",delivery,setDelivery,"$")}{field("Tax on materials only (illustrative)",tax,setTax,"%")}</>}
 {isInches&&<><label className="field"><span>Conversion direction</span><select value={direction} onChange={e=>setDirection(e.target.value)}><option value="inches-to-yards">Cubic inches → cubic yards</option><option value="yards-to-inches">Cubic yards → cubic inches</option></select></label>{field("Volume",amount,setAmount,direction==="inches-to-yards"?"in³":"yd³")}</>}
 {isMaterial&&<>{field("Length",length,setLength,"ft")}{field("Width",width,setWidth,"ft")}{field("Material depth",depth,setDepth,"in")}{slug!=="compost-cubic-yard-calculator"&&field("Bulk density (editable estimate)",density,setDensity,"US tons/yd³")}{slug==="compost-cubic-yard-calculator"&&field("Bag size",bag,setBag,"ft³")}{field("Extra allowance (optional)",extra,setExtra,"%")}</>}
 {isExcavation&&<>{field("Cut length",length,setLength,"ft")}{field("Cut width",width,setWidth,"ft")}{field("Cut depth",depth,setDepth,"ft")}{field("User-specified swell scenario",extra,setExtra,"%")}</>}
 {isTruck&&<>{field("Material to haul",amount,setAmount,"loose yd³")}{field("Usable truck bed volume",bed,setBed,"yd³")}{field("Allowed payload",payload,setPayload,"US tons")}{field("Material loose bulk density",density,setDensity,"US tons/yd³")}</>}
 <div className="extended-calc-reset"><button type="button" onClick={()=>{
 setAmount(slug==="cubic-inches-to-cubic-yards"?"46656":slug==="cubic-yard-cost-calculator"?"5":slug==="dump-truck-load-calculator"?"12":"2");
 setLength("20");setWidth("10");setDepth(slug==="excavation-cubic-yard-calculator"?"3":"3");setDensity(slug==="landscape-rock-cubic-yard-calculator"?"1.3":"1.4");setBag("2");setPrice("60");setDelivery("75");setTax("0");setExtra("0");setBed("10");setPayload("12");setDirection("inches-to-yards");
 }}>Reset inputs</button></div>
 </div>
 <div className="extended-calc-output" aria-live="polite">
 <span className="result-kicker">CALCULATED RESULT</span>
 {isBags&&<><strong className="extended-result-main">{format(vals.cyBags,0)} <small>whole bags</small></strong><p>{format(vals.a*27)} ft³ of material required</p><div className="extended-result-row"><span>Purchased equivalent</span><b>{format(vals.cyBags*number(bag)/27)} yd³</b></div><div className="extended-result-row"><span>Volume above target</span><b>{format(vals.packageSurplus)} yd³</b></div></>}
 {isCost&&<><strong className="extended-result-main">${format(vals.finalPrice,2)}</strong><p>Estimated total with the entered delivery and illustrative tax</p><div className="extended-result-row"><span>Material</span><b>${format(vals.materialPrice,2)}</b></div><div className="extended-result-row"><span>Delivery</span><b>${format(vals.del,2)}</b></div><div className="extended-result-row"><span>Tax (material subtotal)</span><b>${format(vals.materialPrice*vals.t/100,2)}</b></div></>}
 {isInches&&<><strong className="extended-result-main">{format(vals.converted,8)} <small>{direction==="inches-to-yards"?"yd³":"in³"}</small></strong><p>Exact conversion uses 46,656 cubic inches per cubic yard</p><div className="extended-result-row"><span>Formula</span><b>{direction==="inches-to-yards"?"÷ 46,656":"× 46,656"}</b></div></>}
 {isMaterial&&<><strong className="extended-result-main">{format(vals.yards)} <small>yd³</small></strong><p>Geometric layer volume plus any entered allowance</p><div className="extended-result-row"><span>Without allowance</span><b>{format(vals.geometric)} yd³</b></div><div className="extended-result-row"><span>Cubic feet</span><b>{format(vals.yards*27)} ft³</b></div>{slug==="compost-cubic-yard-calculator"?<div className="extended-result-row"><span>Whole bags</span><b>{number(bag)>0?format(Math.ceil(vals.yards*27/number(bag)),0):"—"}</b></div>:<div className="extended-result-row"><span>Estimated weight</span><b>{format(vals.tonnes)} short tons</b></div>}</>}
 {isExcavation&&<><strong className="extended-result-main">{format(vals.bank)} <small>BCY</small></strong><p>Rectangular in-place bank excavation</p><div className="extended-result-row"><span>Gross cubic feet</span><b>{format(vals.bank*27)} ft³</b></div><div className="extended-result-row"><span>Loose volume scenario</span><b>{format(vals.loose)} LCY</b></div></>}
 {isTruck&&<><strong className="extended-result-main">{format(vals.loadCount,0)} <small>trips</small></strong><p>Minimum theoretical full-load trips, based on entered limits</p><div className="extended-result-row"><span>Usable yards per truck</span><b>{format(vals.volumeForTruck)} yd³</b></div><div className="extended-result-row"><span>Estimated total weight</span><b>{format(vals.a*vals.den)} US tons</b></div></>}
 <p className="extended-calc-footnote">{isInches?"Exact unit conversion.":isBags?"Uses labeled bag volume; not a weight or compacted-yield estimate.":isCost?"Example prices are not live quotes; tax treatment varies.":isExcavation?"Swell ratio must be supported by site-specific data; does not establish safe excavation geometry.":isTruck?"Actual loads depend on axle limits, roads and operator requirements.":"Density and any extra allowance are illustrative, not product-certified."} Verify quantities with your supplier.</p>
 </div></div></section>;
}
