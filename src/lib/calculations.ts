/** All dimensions and weights are converted to canonical units before calculation. */
export const CUBIC_FEET_PER_CUBIC_YARD = 27;
export const CUBIC_INCHES_PER_CUBIC_YARD = 46656;
export const CUBIC_METERS_PER_CUBIC_YARD = 0.764554857984;
export const POUNDS_PER_US_TON = 2000;

export type MaterialId = "generic" | "concrete" | "gravel" | "mulch" | "topsoil" | "fill-dirt" | "sand";
export const materials: Record<MaterialId, { label: string; tonsPerYard: number; note: string }> = {
  generic: { label:"Volume only", tonsPerYard: 0, note:"A volume-only result. No density assumption is applied." },
  concrete: { label:"Concrete", tonsPerYard: 2.0, note:"Illustrative normal-weight cured concrete density. Ready-mix order volume is not converted from this density." },
  gravel: { label:"Gravel / crushed stone", tonsPerYard: 1.4, note:"Illustrative bulk gravel density; aggregate gradation, moisture and compaction affect actual weights." },
  mulch: { label:"Wood mulch", tonsPerYard: 0.3, note:"Illustrative bulk mulch density; species, moisture and particle size vary substantially." },
  topsoil: { label:"Topsoil", tonsPerYard: 1.1, note:"Illustrative bulk topsoil density; moisture and composition affect weight." },
  "fill-dirt": { label:"Fill dirt", tonsPerYard: 1.2, note:"Illustrative loose fill dirt density; verify with the hauling supplier." },
  sand: { label:"Sand", tonsPerYard: 1.3, note:"Illustrative dry loose sand density; wet sand may weigh significantly more." },
};
export function cubicYardsFromFeet(lengthFeet:number,widthFeet:number,depthFeet:number):number {
  return (lengthFeet * widthFeet * depthFeet) / CUBIC_FEET_PER_CUBIC_YARD;
}
export function cubicYardsFromFeetAndInches(lengthFeet:number,widthFeet:number,depthInches:number):number {
  return (lengthFeet * widthFeet * depthInches) / 324;
}
export function cubicYardsFromArea(areaSquareFeet:number,depthInches:number):number {
  return (areaSquareFeet * depthInches) / 324;
}
export function cubicYardsToTons(cubicYards:number,tonsPerYard:number):number {
  return cubicYards * tonsPerYard;
}
export function cubicFeetToCubicYards(feet:number):number { return feet / 27; }
export function cubicMetersToCubicYards(meters:number):number { return meters / CUBIC_METERS_PER_CUBIC_YARD; }
export function coverageSquareFeet(yards:number,depthInches:number):number {
 return depthInches > 0 ? yards * 324 / depthInches : 0;
}
export function safeNumber(value:string):number {
  const num=Number(value);
  return value.trim()!=="" && Number.isFinite(num) && num>=0 ? num : NaN;
}
export function displayNumber(value:number,maximumFractionDigits=2):string {
 return Number.isFinite(value) ? value.toLocaleString("en-US",{maximumFractionDigits}) : "—";
}
