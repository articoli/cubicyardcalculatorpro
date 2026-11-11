export type PageType = "conversion" | "material" | "guide" | "trust";
export type CalcMode = "feet" | "area" | "tons" | "meters" | "dimensions" | "none";
export type ContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type PageData = {
 slug:string; title:string; h1:string; description:string; type:PageType; mode:CalcMode;
 intro:string; keyFact:string; sections:ContentSection[]; faqs:{question:string;answer:string}[];
 material?: "concrete"|"gravel"|"mulch"|"topsoil"|"fill-dirt"|"sand";
};
export const pages:PageData[]=[
{
 slug:"cubic-feet-to-cubic-yards",title:"Cubic Feet to Cubic Yards Calculator | Convert ft³ to yd³",h1:"Cubic Feet to Cubic Yards Calculator",
 description:"Convert cubic feet to cubic yards accurately. Use the interactive ft³ to yd³ converter, formula, worked examples and quick reference.",
 type:"conversion",mode:"feet",intro:"Convert a volume measured in cubic feet into cubic yards using the exact relationship 1 cubic yard = 27 cubic feet. This is useful when your dimensions or supplier specifications use different units.",keyFact:"1 cubic yard = exactly 27 cubic feet.",
 sections:[
  {heading:"How to convert cubic feet to cubic yards",paragraphs:["Divide the total cubic feet by 27. For example, 81 cubic feet ÷ 27 = 3 cubic yards. To reverse the calculation, multiply cubic yards by 27. You do not need a material density because both measurements describe volume.","This conversion works for any material or empty space. Material weight is a separate question that requires density."]},
  {heading:"When you need this conversion",paragraphs:["Construction drawings may provide volumes in cubic feet, while landscape suppliers commonly sell bulk materials by the cubic yard. The conversion helps compare quotes on a consistent volume basis."]},
  {heading:"Reference examples",paragraphs:["27 ft³ = 1 yd³; 54 ft³ = 2 yd³; 135 ft³ = 5 yd³; and 270 ft³ = 10 yd³. If you start with length, width and depth instead of a known volume, use the homepage calculator."]}
 ],faqs:[{question:"Is a cubic yard larger than a cubic foot?",answer:"Yes. One cubic yard contains 27 cubic feet."},{question:"Does the conversion change for gravel or concrete?",answer:"No. Volume conversion is the same for every material; only weight-to-volume conversion depends on density."}]
},
{
 slug:"square-feet-to-cubic-yards",title:"Square Feet to Cubic Yards Calculator | Area + Depth",h1:"Square Feet to Cubic Yards Calculator",
 description:"Convert square feet and depth to cubic yards for mulch, gravel, soil and concrete. Enter your area and thickness to estimate volume.",
 type:"conversion",mode:"area",intro:"Square feet measure area, while cubic yards measure volume. To calculate cubic yards from square footage, you must also know how deep or thick the material will be.",keyFact:"Cubic yards = square feet × depth in inches ÷ 324.",
 sections:[
  {heading:"Why depth is required",paragraphs:["A 100-square-foot surface could require very different amounts of material depending on the desired thickness. At 3 inches deep, it needs about 0.93 cubic yards; at 6 inches deep, approximately 1.85 cubic yards.","The formula first converts the depth into a compatible unit and then converts cubic feet into cubic yards."]},
  {heading:"Common uses",paragraphs:["Use area and depth for garden mulch, topsoil spreading, gravel pathways and uniformly thick concrete slabs. Measure the actual footprint rather than estimating from property size."]},
  {heading:"Measuring irregular areas",paragraphs:["Divide a complex area into simpler rectangles or other measurable shapes. Calculate each area, add them together, and apply the specified depth. If depths differ across the site, calculate each section separately."]}
 ],faqs:[{question:"How many cubic yards is 1,000 square feet?",answer:"The depth determines the answer. At 3 inches deep, 1,000 square feet is approximately 9.26 cubic yards."},{question:"Can square feet be converted directly to cubic yards?",answer:"No. You need a thickness or depth because area and volume are different kinds of measurements."}]
},
{
 slug:"cubic-yards-to-tons",title:"Cubic Yards to Tons Calculator | Material Weight Estimate",h1:"Cubic Yards to Tons Calculator",
 description:"Estimate US short tons from cubic yards with an adjustable material density. Compare gravel, sand, soil and other bulk materials.",
 type:"conversion",mode:"tons",intro:"Convert a bulk material volume in cubic yards into an approximate weight in US short tons. Unlike volume-to-volume conversions, the result depends on the material's bulk density.",keyFact:"Estimated US short tons = cubic yards × US short tons per cubic yard.",
 sections:[
  {heading:"Cubic yards and tons measure different things",paragraphs:["A cubic yard is volume. A US short ton is weight, equal to 2,000 pounds. There is no single universal number of tons per cubic yard. Gravel, topsoil, sand, mulch and concrete all have different densities.","Use a supplier-provided bulk density when possible. The calculator's material presets are illustrative estimates, not guaranteed delivered weights."]},
  {heading:"Moisture and compaction matter",paragraphs:["Wet aggregates and soil often weigh more than dry material for the same measured bulk volume. Loose, compacted and bank material volumes may also differ. The density appropriate for the material's measured state is essential."]},
  {heading:"Example calculation",paragraphs:["If a gravel product is estimated at 1.4 US short tons per cubic yard, five cubic yards would weigh approximately seven US short tons. The arithmetic is straightforward; selecting a reliable density is the important part."]}
 ],faqs:[{question:"How many tons of gravel are in a cubic yard?",answer:"It varies with aggregate type, gradation, moisture and compaction. Use your supplier's weight per cubic yard when ordering."},{question:"Are these metric tons?",answer:"No. This tool uses US short tons (2,000 lb each)."}]
},
{
 slug:"cubic-meters-to-cubic-yards",title:"Cubic Meters to Cubic Yards Calculator | m³ to yd³",h1:"Cubic Meters to Cubic Yards Calculator",
 description:"Convert cubic meters to cubic yards and back using the exact unit relationship, with practical metric-to-US volume examples.",
 type:"conversion",mode:"meters",intro:"Convert cubic meters (m³) into cubic yards (yd³) when comparing metric drawings, quantities and US material orders. Both units measure volume, so no material density is needed.",keyFact:"1 cubic yard = 0.764554857984 cubic meters.",
 sections:[
  {heading:"Metric to US volume conversion",paragraphs:["Divide cubic meters by 0.764554857984 to obtain cubic yards. Conversely, multiply cubic yards by 0.764554857984 to obtain cubic meters. One cubic meter is approximately 1.308 cubic yards."]},
  {heading:"Practical conversion examples",paragraphs:["Two cubic meters are approximately 2.62 cubic yards, and five cubic meters are approximately 6.54 cubic yards. Keep extra decimal precision during calculations and round only the displayed result."]},
  {heading:"When to use the converter",paragraphs:["This conversion can help with imported material specifications, metric architectural plans and international equipment specifications. Use dimensions in one consistent unit system before estimating volume."]}
 ],faqs:[{question:"Is a cubic meter bigger than a cubic yard?",answer:"Yes. One cubic meter is approximately 1.308 cubic yards."},{question:"Can I convert m³ to yd³ without knowing the material?",answer:"Yes. This is purely a volume conversion."}]
},
{
 slug:"concrete-cubic-yard-calculator",title:"Concrete Cubic Yard Calculator | Slabs, Patios and Footings",h1:"Concrete Cubic Yard Calculator",
 description:"Calculate cubic yards of concrete for patios, slabs and other rectangular pours. See formulas, worked examples and ordering considerations.",
 type:"material",material:"concrete",mode:"dimensions",intro:"Estimate how much concrete a uniform rectangular slab, patio or pad will require from its length, width and thickness. The calculator reports geometric concrete volume in cubic yards before any job-specific ordering allowance.",keyFact:"A 15 × 12 ft slab that is 4 inches thick needs about 2.22 yd³ before extra allowance.",
 sections:[
  {heading:"How to calculate concrete yardage",paragraphs:["Multiply length in feet by width in feet by thickness in inches, then divide by 324. For non-rectangular slabs, break the footprint into measurable shapes and calculate each volume separately.","The result is the geometric quantity. Actual concrete orders can require extra volume for uneven subgrade, edge thickening, grade variation or construction waste."]},
  {heading:"Concrete slabs versus footings",paragraphs:["Slabs are often estimated from surface area and thickness, while footings require their own width, depth and total length. Circular piers and columns require a cylinder formula instead of a rectangle formula. Do not apply a slab formula to every concrete shape."]},
  {heading:"Ready-mix and bagged concrete",paragraphs:["Ready-mix concrete is typically quoted by cubic yard. Bagged concrete is estimated using the yield printed on the exact product packaging, not simply its weight. A bag's concrete yield varies by bag size and product."]},
  {heading:"Before ordering concrete",paragraphs:["Confirm dimensions, elevations, thickened edges and any separately measured footings. The calculator does not verify structural adequacy, code compliance or mix specifications. For structural work, follow the project's plans and professional guidance."]}
 ],faqs:[{question:"How many yards of concrete for a 10 × 10 slab at 4 inches?",answer:"Approximately 1.23 cubic yards of geometric concrete volume."},{question:"Should I round a concrete order up?",answer:"Concrete is ordered according to supplier increments and actual conditions. Confirm quantities and any allowance with the ready-mix supplier or contractor."}]
},
{
 slug:"gravel-cubic-yard-calculator",title:"Gravel Cubic Yard Calculator | Driveways and Paths",h1:"Gravel Cubic Yard Calculator",
 description:"Calculate gravel volume in cubic yards from driveway or pathway dimensions. Understand gravel tonnage, depth and compaction considerations.",
 type:"material",material:"gravel",mode:"dimensions",intro:"Estimate the cubic yards of gravel or crushed stone required for a driveway, pathway or base layer. Enter dimensions and finished depth, then use an appropriate bulk density if a supplier quotes by the ton.",keyFact:"A 40 × 10 ft gravel driveway at 4 inches deep has 4.94 yd³ of geometric volume.",
 sections:[
  {heading:"Gravel volume from length, width and depth",paragraphs:["For a rectangular area, multiply length by width in feet and depth in inches, then divide by 324. For irregular driveways, measure sections separately and add the results.","Coverage changes with layer thickness. A two-inch decorative gravel layer needs half the volume of a four-inch layer over the same area."]},
  {heading:"Cubic yards versus tons of gravel",paragraphs:["Cubic yards measure loose or installed volume; tons measure weight. Suppliers may provide a product-specific conversion factor. Aggregate size, grading, moisture content and compaction all affect the relation between volume and weight."]},
  {heading:"Loose gravel and compacted base",paragraphs:["If a specification requires a compacted final thickness, the loose delivery volume may need an adjustment based on the aggregate and expected compaction. Avoid assuming a universal compaction percentage for all materials."]},
  {heading:"Ordering gravel accurately",paragraphs:["Check whether the material is sold by cubic yard or ton, ask the supplier about delivery capacity and verify the gradation and intended application. Drainage stone, dense-graded base and decorative gravel are not interchangeable."]}
 ],faqs:[{question:"How many cubic yards of gravel do I need for 100 square feet?",answer:"At a 3-inch finished depth, 100 square feet equals approximately 0.93 cubic yards geometrically."},{question:"How many tons is 5 cubic yards of gravel?",answer:"At an illustrative density of 1.4 US short tons per cubic yard, roughly 7 US short tons; ask your supplier for its actual density."}]
},
{
 slug:"mulch-cubic-yard-calculator",title:"Mulch Cubic Yard Calculator | Garden Bed Coverage",h1:"Mulch Cubic Yard Calculator",
 description:"Estimate mulch cubic yards, garden bed coverage and bag equivalents by area and depth. Learn how to order bulk mulch.",
 type:"material",material:"mulch",mode:"dimensions",intro:"Estimate the amount of mulch needed to cover garden beds, landscaped borders and planting areas at a chosen depth. Measure each section and use the volume result to compare bagged and bulk mulch.",keyFact:"One cubic yard of mulch covers 108 sq ft at 3 inches deep, before settling.",
 sections:[
  {heading:"How much mulch does a cubic yard cover?",paragraphs:["A cubic yard has 27 cubic feet. One cubic yard covers 324 square feet at one inch deep, 162 square feet at two inches and 108 square feet at three inches.","Coverage depends directly on the depth applied. Measuring an existing mulch layer can help avoid calculating the full depth when only topping up."]},
  {heading:"Bulk mulch compared with bags",paragraphs:["Bagged mulch is often labeled by cubic-foot volume. To compare bags with bulk cubic yards, divide 27 by the labeled cubic feet per bag. For example, 13.5 two-cubic-foot bags equal one cubic yard by volume, so 14 whole bags are needed."]},
  {heading:"Estimating multiple garden beds",paragraphs:["Calculate length, width and depth for each rectangular bed. Divide curved or irregular beds into smaller measured sections, then sum their cubic yards. Where depths differ, calculate separately."]},
  {heading:"Practical ordering considerations",paragraphs:["Wood mulch may settle over time, and different products have different moisture, texture and particle size. Verify how a supplier measures and delivers bulk mulch rather than assuming a single overage rule."]}
 ],faqs:[{question:"How many 2-cubic-foot bags make a cubic yard?",answer:"13.5 bags equal a cubic yard by volume; purchase at least 14 whole bags to meet that volume."},{question:"How much mulch for a 12 × 10 garden bed at 3 inches?",answer:"Approximately 1.11 cubic yards before ordering allowances."}]
},
{
 slug:"topsoil-cubic-yard-calculator",title:"Topsoil Cubic Yard Calculator | Gardens and Lawns",h1:"Topsoil Cubic Yard Calculator",
 description:"Estimate topsoil cubic yards for garden beds, lawns and leveling. Convert area and depth into a practical soil volume estimate.",
 type:"material",material:"topsoil",mode:"dimensions",intro:"Calculate the volume of topsoil needed for a garden, lawn dressing or landscape project. Enter the measured footprint and planned soil thickness to estimate cubic yardage.",keyFact:"For a 20 × 10 ft area at 3 inches deep, geometric topsoil volume is about 1.85 yd³.",
 sections:[
  {heading:"Topsoil volume formula",paragraphs:["Multiply length in feet by width in feet by depth in inches and divide by 324. If you measure several areas or variable depths, calculate separate sections and combine the resulting volumes."]},
  {heading:"Lawn topdressing and garden beds",paragraphs:["A shallow lawn topdressing layer requires less soil than building up a deep planting bed. Use a realistic finished depth for the specific job. Avoid covering established turf too deeply without horticultural guidance."]},
  {heading:"Settling and soil properties",paragraphs:["Topsoil is not a uniform material. Organic content, screening, moisture and compaction influence loose delivery volume and final grade. Supplier-specific recommendations are more reliable than a universal percentage."]},
  {heading:"Choosing the right soil",paragraphs:["Topsoil, planting mix and compost serve different functions. Ask about texture, screening, contaminants and suitability for the desired plants or landscaping application."]}
 ],faqs:[{question:"How much topsoil for 100 square feet at 6 inches?",answer:"Approximately 1.85 cubic yards geometrically."},{question:"Is topsoil weight fixed per cubic yard?",answer:"No. Bulk density depends on soil composition, moisture and packing."}]
},
{
 slug:"fill-dirt-cubic-yard-calculator",title:"Fill Dirt Cubic Yard Calculator | Backfill and Grading",h1:"Fill Dirt Cubic Yard Calculator",
 description:"Estimate fill dirt cubic yards for rectangular areas, backfilling and leveling. Understand loose versus compacted soil quantities.",
 type:"material",material:"fill-dirt",mode:"dimensions",intro:"Estimate how many cubic yards of fill dirt are required to raise a level area or backfill a measured space. The calculator provides geometric volume; actual delivery quantities depend on material state and site specifications.",keyFact:"A 20 × 15 ft area raised 6 inches has 5.56 yd³ of geometric fill volume.",
 sections:[
  {heading:"How to estimate fill dirt volume",paragraphs:["Measure the area and required fill depth, then calculate cubic yards. For rectangular fill zones, use length in feet × width in feet × depth in inches ÷ 324.","If ground elevations vary across a site, a single average depth may misrepresent the job. Use surveyed sections or an appropriate earthwork calculation method when accuracy matters."]},
  {heading:"Loose, bank and compacted soil volume",paragraphs:["Excavated soil can swell when loosened and shrink when compacted. Bank cubic yards, loose cubic yards and compacted cubic yards are different states. Convert using project-specific factors rather than one universal rule."]},
  {heading:"Backfilling and compaction",paragraphs:["Fill material may need placement in controlled lifts and specified compaction to meet construction requirements. The amount delivered must take settlement and compacted density into account when the project specifies a final grade."]},
  {heading:"When professional measurement is needed",paragraphs:["Retaining walls, structural fill, major grading and drainage work can require engineered design, surveys and geotechnical specifications. A simple volume calculator is a planning tool, not a substitute for those services."]}
 ],faqs:[{question:"How many yards of fill dirt cover 300 sq ft at 6 inches?",answer:"The geometric volume is approximately 5.56 cubic yards."},{question:"Does delivered loose fill equal compacted fill?",answer:"Not necessarily. Compaction changes bulk volume, and the relationship depends on the specific soil."}]
},
{
 slug:"how-to-calculate-cubic-yards",title:"How to Calculate Cubic Yards: Formulas and Examples",h1:"How to Calculate Cubic Yards",
 description:"Learn the cubic yard formula using feet, inches, area and depth. Follow clear worked examples for common home and landscape projects.",
 type:"guide",mode:"none",intro:"Calculating cubic yards means finding three-dimensional volume and expressing it in cubic yards rather than cubic feet, cubic inches or cubic meters. The right formula depends on the units and shape of the space.",keyFact:"For feet and inches: cubic yards = length (ft) × width (ft) × depth (in) ÷ 324.",
 sections:[
  {heading:"Formula when all three dimensions are in feet",paragraphs:["For a rectangle or box, multiply length × width × height to get cubic feet. Divide by 27 to convert cubic feet to cubic yards. Example: a 9 × 6 × 1.5 ft volume is 81 cubic feet or exactly 3 cubic yards.","Always use the same linear units before multiplying. Mixing feet and inches without a conversion is a common source of errors."]},
  {heading:"Formula when depth is in inches",paragraphs:["Most landscape projects measure length and width in feet but thickness in inches. The shortcut is length × width × depth ÷ 324. For a 12 × 10 ft garden bed that is 3 inches deep, the volume is about 1.11 cubic yards."]},
  {heading:"Formula using square footage",paragraphs:["If you already know the area in square feet, multiply that area by depth in inches and divide by 324. For 200 square feet at 4 inches, the result is about 2.47 cubic yards."]},
  {heading:"Circular and irregular shapes",paragraphs:["A circular footprint has area π × radius². Multiply that area by depth in compatible units, then convert to cubic yards. For irregular projects, divide the area into smaller shapes and add their individual volumes."]},
  {heading:"From calculated volume to material order",paragraphs:["The geometric volume is only one part of purchasing. Concrete may require allowances for construction conditions; soil and aggregate can be delivered loose and compacted after placement. Verify units, material type and supplier billing method."]}
 ],faqs:[{question:"Why divide by 27?",answer:"A cubic yard is 3 feet × 3 feet × 3 feet, which equals 27 cubic feet."},{question:"Why divide by 324 for depth in inches?",answer:"There are 12 inches in a foot and 27 cubic feet in a cubic yard, so the divisor is 12 × 27 = 324."}]
},
{
 slug:"what-is-a-cubic-yard",title:"What Is a Cubic Yard? Size, Volume and Examples",h1:"What Is a Cubic Yard?",
 description:"Understand the size of a cubic yard, how many cubic feet it contains, and how cubic yards are used for landscape and construction materials.",
 type:"guide",mode:"none",intro:"A cubic yard (yd³) is a unit of volume equal to a cube that measures one yard in length, one yard in width and one yard in height. It is frequently used to quote bulk landscaping and construction materials in the United States.",keyFact:"1 yd³ = 3 ft × 3 ft × 3 ft = 27 ft³.",
 sections:[
  {heading:"How big is one cubic yard?",paragraphs:["Imagine a three-dimensional box that is three feet long, three feet wide and three feet high. Its internal volume is one cubic yard. The unit refers to the space occupied, not the size of a material pile's footprint.","It is also equal to 46,656 cubic inches or approximately 0.7646 cubic meters."]},
  {heading:"What is measured in cubic yards?",paragraphs:["Suppliers use cubic yards for bulk mulch, soil, gravel, sand and ready-mix concrete. Excavation and grading quantities are also often expressed in cubic yards, but bank, loose and compacted soil states must be distinguished."]},
  {heading:"Cubic yards versus square yards",paragraphs:["Square yards measure area, while cubic yards measure volume. To determine how many cubic yards are required for an area, you must know the depth or thickness being filled."]},
  {heading:"How much coverage does a cubic yard provide?",paragraphs:["One cubic yard covers 324 square feet at 1 inch deep, 162 square feet at 2 inches, and 108 square feet at 3 inches. These are geometric values before material-specific adjustments."]}
 ],faqs:[{question:"Is one cubic yard 27 cubic feet?",answer:"Yes, exactly."},{question:"How many wheelbarrows are in a cubic yard?",answer:"It depends on the rated capacity of the specific wheelbarrow and whether it is safely filled; divide 27 cubic feet by its usable cubic-foot capacity."}]
},
{
 slug:"cubic-yard-coverage-chart",title:"Cubic Yard Coverage Chart by Depth | Square Feet per Yard",h1:"Cubic Yard Coverage Chart",
 description:"See how many square feet one cubic yard covers at depths from 1 to 12 inches. Use the coverage formula and example project calculations.",
 type:"guide",mode:"none",intro:"A cubic yard can cover a large area when spread thinly or a smaller area when applied deeply. Use this reference to estimate area coverage from a known bulk material volume.",keyFact:"Coverage in sq ft = 324 × cubic yards ÷ depth in inches.",
 sections:[
  {heading:"Coverage of one cubic yard at different depths",paragraphs:["At 1 inch deep, one cubic yard covers 324 square feet. At 2 inches, 162 square feet; at 3 inches, 108; at 4 inches, 81; at 6 inches, 54; and at 12 inches, 27 square feet.","The values assume uniform thickness and disregard settling, waste and compaction."]},
  {heading:"How to use the coverage formula",paragraphs:["Multiply your cubic yards by 324, then divide by desired depth in inches. Example: 2 cubic yards at 3 inches deep cover approximately 216 square feet."]},
  {heading:"Where coverage charts are helpful",paragraphs:["Coverage is useful for planning mulch beds, topsoil dressing, gravel walks and other uniform layers. For a variable-depth installation, divide into sections or use an appropriate average depth supported by measurements."]},
  {heading:"Why actual material coverage may vary",paragraphs:["Surface irregularities, compaction, settling and spreading technique affect real-world application. A delivery volume should not be confused with a guaranteed finished coverage area."]}
 ],faqs:[{question:"How many square feet will one yard cover at 3 inches?",answer:"Approximately 108 square feet at a uniform 3-inch depth."},{question:"How far will 3 cubic yards go at 2 inches?",answer:"About 486 square feet geometrically."}]
},
{
 slug:"about",title:"About Cubic Yard Calculator Pro | Our Purpose",h1:"About Cubic Yard Calculator Pro",
 description:"Learn why Cubic Yard Calculator Pro provides clear volume formulas, practical material estimates and transparent assumptions.",
 type:"trust",mode:"none",intro:"Cubic Yard Calculator Pro is an independent measurement resource built to make common volume calculations easier to understand. Our goal is to help homeowners, DIY planners and construction professionals check quantities before requesting supplier quotes.",keyFact:"Clear formulas, visible assumptions and reproducible results guide the site.",
 sections:[
  {heading:"Our editorial approach",paragraphs:["Every main calculation is explained in standard measurement units and illustrated with practical examples. Material conversions are presented as estimates when densities are variable, not as universal constants."]},
  {heading:"What this site can and cannot do",paragraphs:["The calculators help with preliminary planning and quantity checking. They do not replace construction drawings, project surveys, geotechnical reports, structural design or supplier measurements."]},
  {heading:"How to use our resources",paragraphs:["Start with the homepage to calculate basic volume, then use specialized calculators for materials and conversions. Read the methodology page for formulas, assumptions and rounding conventions."]}
 ],faqs:[]
},
{
 slug:"calculation-methodology",title:"Calculation Methodology | Formulas and Assumptions",h1:"Calculation Methodology & Sources",
 description:"Review the cubic yard formulas, exact volume conversions, rounding method and density limitations behind our online calculators.",
 type:"trust",mode:"none",intro:"Our calculators separate exact unit relationships from variable material estimates. This page documents the arithmetic and explains where job-specific information is necessary.",keyFact:"Geometric volume is calculated precisely; displayed results are rounded for readability.",
 sections:[
  {heading:"Volume units and formulas",paragraphs:["One international yard equals exactly 0.9144 meters. A cubic yard contains exactly 27 cubic feet and 46,656 cubic inches. One cubic yard is exactly 0.764554857984 cubic meters. For rectangular shapes measured in feet, cubic yards = length × width × depth ÷ 27.","When depth is supplied in inches and horizontal dimensions are in feet, cubic yards = length × width × depth ÷ 324. This also works when length × width is replaced by a known area in square feet."]},
  {heading:"Mass estimates and densities",paragraphs:["US short tons are calculated by multiplying cubic yards by the selected bulk density in US short tons per cubic yard. The displayed material presets are illustrative; bulk density varies with moisture content, material composition, particle size and state of compaction.","Supplier-provided product density is preferred for order planning. If the project specifies bank, loose or compacted volumes, apply only project-appropriate conversion factors."]},
  {heading:"Rounding, extra allowance and transparency",paragraphs:["Calculations retain full JavaScript floating-point precision and round only the displayed output. The optional allowance adds a selected percentage to geometric volume and is not a substitute for a calculated swell or compaction factor.","Materials, methods and local conditions vary. Always verify critical quantities with suppliers, contractors or relevant specialists before buying materials."]},
  {heading:"Reference standards and further reading",paragraphs:["Measurement conversion definitions can be checked against the National Institute of Standards and Technology, Office of Weights and Measures: https://www.nist.gov/pml/owm . Construction material properties and performance must be sourced from the actual supplier or project specification."]}
 ],faqs:[]
},
];
export const pageMap = Object.fromEntries(pages.map(page=>[page.slug,page])) as Record<string,PageData>;
export const materialLinks = pages.filter(page=>page.type==="material");
export const conversionLinks = pages.filter(page=>page.type==="conversion");
export const guideLinks = pages.filter(page=>page.type==="guide");
