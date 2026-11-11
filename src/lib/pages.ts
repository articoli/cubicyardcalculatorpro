export type PageType = "conversion" | "material" | "guide" | "trust";
export type CalcMode = "feet" | "area" | "tons" | "meters" | "dimensions" | "none";
export type ContentTable = { caption: string; headers: string[]; rows: (string | number)[][]; note?: string };
export type ContentSection = { heading: string; paragraphs: string[]; bullets?: string[]; table?: ContentTable };
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
  "slug": "concrete-cubic-yard-calculator",
  "title": "Concrete Cubic Yard Calculator | Slabs, Footings & Bag Yields",
  "h1": "Concrete Cubic Yard Calculator",
  "description": "Calculate concrete cubic yards for slabs, patios, footings and post holes. Compare slab thickness, bag yield, ready-mix orders and worked examples.",
  "type": "material",
  "material": "concrete",
  "mode": "dimensions",
  "intro": "Calculate concrete volume for a patio, walkway, slab or footing using measured dimensions. This concrete cubic yard calculator gives the geometric quantity in yd³; the guide below explains what changes when you estimate thickened edges, cylindrical piers, bagged mix or ready-mix deliveries.",
  "keyFact": "A 15 × 12 ft slab at 4 inches thick contains 2.22 cubic yards (60 cubic feet), before any additional allowance.",
  "sections": [
    {
      "heading": "Calculate concrete cubic yards from slab dimensions",
      "paragraphs": [
        "A uniform rectangular concrete slab is measured by its finished length, width and thickness. Enter length and width in feet and slab thickness in inches. The volume formula is <strong>length (ft) × width (ft) × thickness (in) ÷ 324</strong>. Dividing by 324 converts the mixed feet-and-inches dimensions directly into cubic yards. All measurements should refer to the actual concrete shape, not the outside edge of surrounding excavation.",
        "For example, a patio measuring 15 feet by 12 feet with a 4-inch-thick slab has 180 square feet of area. Its concrete volume is 180 × 4 ÷ 324 = 2.2222 yd³, equivalent to 60 cubic feet. Use the calculator above to change the dimensions. For a detailed explanation of the underlying volume conversion, see [[how to calculate cubic yards|/how-to-calculate-cubic-yards/]]."
      ]
    },
    {
      "heading": "Concrete slab thickness chart: yards needed per 100 square feet",
      "paragraphs": [
        "Slab thickness has a direct, linear effect on concrete quantity. For the same footprint, a 6-inch layer uses 50% more concrete than a 4-inch layer. The depths in the table are calculation scenarios, not structural recommendations. Required slab thickness, reinforcement, subbase and concrete strength depend on the use, loads, soil and approved plans."
      ],
      "table": {
        "caption": "Geometric concrete volume for 100 square feet at uniform thickness",
        "headers": [
          "Thickness",
          "Cubic feet",
          "Cubic yards"
        ],
        "rows": [
          [
            3,
            25,
            "0.93 yd³"
          ],
          [
            4,
            "33.33",
            "1.23 yd³"
          ],
          [
            5,
            "41.67",
            "1.54 yd³"
          ],
          [
            6,
            50,
            "1.85 yd³"
          ],
          [
            8,
            "66.67",
            "2.47 yd³"
          ]
        ],
        "note": "Cubic feet are rounded for display; cubic-yard figures exclude slab edges, depressions and job-specific allowances."
      }
    },
    {
      "heading": "Estimating patios, driveways and walkways without missing sections",
      "paragraphs": [
        "For a straightforward patio, measure the inside dimensions of the forms and the finished thickness. A curved patio can be divided into rectangles and circular segments. If the thickness changes, do not apply a single average unless it accurately represents the volume. Calculate each section separately and add its cubic yards.",
        "A driveway often includes transitions, approaches and thicker edges that are absent from a simple flat-slab calculation. A walkway may have steps, ramps or widened landings. Mark those features on a sketch with dimensions before estimating. This prevents both under-ordering and double-counting adjoining portions of the pour."
      ]
    },
    {
      "heading": "Concrete footings, grade beams and thickened edges",
      "paragraphs": [
        "Footings are three-dimensional elements and need their own width, depth and run length. A rectangular continuous footing can be estimated as <strong>length (ft) × width (ft) × depth (ft) ÷ 27</strong>. For a 30-foot-long footing that is 2 feet wide and 1 foot deep, the gross volume is 60 cubic feet, or about 2.22 yd³.",
        "When a slab has a thickened edge, count only the volume <em>in addition to</em> the slab thickness already included. For example, if a strip is 12 inches deep overall and the slab volume already assumes 4 inches, estimate the extra strip using 8 inches, not another 12. If footings overlap or join, deduct overlaps to avoid adding the same concrete twice.",
        "Structural footing dimensions should come from approved drawings or the responsible professional. This calculator estimates quantities; it does not specify footing sizes, bearing capacity, reinforcement or code compliance."
      ]
    },
    {
      "heading": "Round piers, post holes and cylindrical concrete volumes",
      "paragraphs": [
        "For a circular pier, calculate the cross-sectional area as <strong>π × radius²</strong> using feet, then multiply by the pier depth in feet. Divide the cubic feet by 27 to obtain cubic yards. The radius equals half the measured diameter. A 12-inch-diameter hole that is 3 feet deep has an area of approximately 0.785 square foot and a gross cylindrical volume of about 2.36 cubic feet, or 0.087 yd³.",
        "If a post or other object occupies part of the hole, the concrete volume can be less than the full cylinder. Estimate the displaced volume only when dimensions and placement are known; otherwise treat the full cylinder as a gross estimate. Multiple identical holes can be calculated once and multiplied by the number of holes."
      ]
    },
    {
      "heading": "Ready-mix concrete versus bagged concrete",
      "paragraphs": [
        "Ready-mix suppliers commonly quote wet concrete by the cubic yard, while packaged concrete is specified by bag weight and its expected mixed yield. Bag weight alone does not tell you the hardened volume. For a realistic bag count, divide total cubic feet by the <em>published yield per bag</em>, then round up to a whole bag.",
        "As one product-specific illustration, [[QUIKRETE Concrete Mix|https://www.quikrete.com/calculator/main.asp]] provides bag-count estimators, and the manufacturer lists approximate mixed yields for its standard Concrete Mix. Other blends, lightweight products and fast-setting mixes may differ, so use the actual packaging or manufacturer data for the product you purchase."
      ],
      "table": {
        "caption": "Illustrative standard Concrete Mix bag yields (verify the exact product)",
        "headers": [
          "Bag size",
          "Approximate mixed yield",
          "Whole bags per 1 yd³"
        ],
        "rows": [
          [
            "40 lb",
            "0.30 ft³",
            "90"
          ],
          [
            "60 lb",
            "0.45 ft³",
            "60"
          ],
          [
            "80 lb",
            "0.60 ft³",
            "45"
          ]
        ],
        "note": "Based on published yields for standard QUIKRETE Concrete Mix, not a promise for every concrete product. 1 yd³ = 27 ft³."
      }
    },
    {
      "heading": "Worked example: how many 80-pound bags for a concrete patio?",
      "paragraphs": [
        "Consider a patio measuring 15 × 12 feet, poured at a uniform 4-inch thickness. Its area is 180 sq ft. The required mixed volume is 180 × (4 ÷ 12) = <strong>60 cubic feet</strong>, or 60 ÷ 27 = <strong>2.22 cubic yards</strong>. If the chosen 80-pound bag yields approximately 0.60 cubic foot, 60 ÷ 0.60 = <strong>100 bags</strong> before allowance.",
        "That result describes an illustrative product yield, not the best purchasing method. For a larger pour, handling, mixing capacity, delivery access and workable placement time can make ready-mix service more practical. Compare total delivered cost and the resources needed for the pour before deciding."
      ]
    },
    {
      "heading": "How much extra concrete should you order?",
      "paragraphs": [
        "A geometric calculation may miss uneven subgrade, form variation, thickened areas, spillage and material left in equipment. An ordering allowance is sometimes appropriate, but no single percentage fits every job. Instead, check the measured forms, slab thickness at several points, separate footings and the supplier's minimum load and ordering increments.",
        "For instance, a 2.22 yd³ slab may be quoted or ordered in a supplier-defined increment rather than as precisely 2.2222 yd³. The calculator's allowance field lets you model a scenario, but it does not replace reviewing the physical project. Ask the ready-mix supplier how it handles short loads and delivery scheduling."
      ]
    },
    {
      "heading": "Concrete cost estimate and ordering checklist",
      "paragraphs": [
        "A material-only estimate is the intended purchase volume multiplied by the supplier's quote per cubic yard. Actual project expense can also include delivery or short-load charges, pump or wheelbarrow access, forms, base preparation, reinforcement, labor and finishing. Avoid comparing the price of bagged mix with ready-mix using bag weight; compare mixed cubic feet or cubic yards instead.",
        "Before finalizing the concrete quantity, check the inside form dimensions, thickness variation, footings and piers, expected site access, supplier increments and the mix specified for the application. If the project is structural, or concrete strength, weather placement or curing matters, follow the project specifications and qualified contractor or engineer."
      ],
      "bullets": [
        "Confirm the footprint and thickness of every pour section.",
        "Calculate edge thickening, post holes and footings separately without overlapping volumes.",
        "Choose ready-mix or bags based on mixed yield, handling and project logistics.",
        "Get a supplier quote that states cubic-yard quantity, minimums and delivery charges.",
        "For exact volume conversions, use [[cubic feet to cubic yards|/cubic-feet-to-cubic-yards/]]."
      ]
    },
    {
      "heading": "Concrete calculation references",
      "paragraphs": [
        "Volume conversions use the international yard defined by [[NIST|https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors]]. Product-specific bag-yield examples are based on [[QUIKRETE's concrete calculator|https://www.quikrete.com/calculator/main.asp]] and published standard mix data. The manufacturer notes that bag yields are approximate and do not automatically allow for uneven substrates or waste."
      ]
    }
  ],
  "faqs": [
    {
      "question": "How many cubic yards of concrete are needed for a 10 × 10 slab at 4 inches?",
      "answer": "A 100-square-foot slab at 4 inches thick has 100 × 4 ÷ 324 = 1.2346 cubic yards, or about 1.23 yd³. Check thicker edges, uneven subgrade and the supplier's ordering increments before purchasing."
    },
    {
      "question": "How much concrete for a 20 × 20 slab at 6 inches?",
      "answer": "The footprint is 400 square feet. At 6 inches thick the geometric volume is 400 × 6 ÷ 324 = 7.41 cubic yards. This is a quantity calculation, not confirmation that 6 inches is the appropriate structural thickness."
    },
    {
      "question": "How many 80-pound concrete bags make one cubic yard?",
      "answer": "For a standard mix with a published yield of approximately 0.60 cubic foot per 80-pound bag, one cubic yard (27 cubic feet) equals 45 bags by yield. Always verify the particular product's labeled yield."
    },
    {
      "question": "Does a concrete slab calculator include footings?",
      "answer": "A basic slab quantity only covers the entered footprint and thickness. Footings, thickened perimeters, steps, ramps and isolated piers require separate volume estimates and careful avoidance of overlapping sections."
    },
    {
      "question": "How do I calculate concrete for a round post hole?",
      "answer": "Measure the hole diameter and depth, convert both to feet, and use π × radius² × depth ÷ 27. Multiply by the number of holes, then adjust for known displacement if a post occupies part of the hole."
    },
    {
      "question": "Should I order concrete by tons or cubic yards?",
      "answer": "Ready-mix concrete is commonly ordered by cubic yard of delivered mix. Weight estimates have different purposes and do not substitute for the volume in forms. Use the units specified by your supplier."
    },
    {
      "question": "Is a fixed 10% concrete waste factor always enough?",
      "answer": "No. Actual needs depend on form dimensions, subgrade, pour features, handling and supplier increments. Model an allowance if appropriate, but verify it for the project instead of assuming a universal percentage."
    },
    {
      "question": "Does this calculator determine concrete mix strength or reinforcement?",
      "answer": "No. It estimates geometric volume. Compressive strength, reinforcement, curing, footing design and local code requirements must be determined separately from qualified project guidance."
    }
  ]
}
{
  "slug": "gravel-cubic-yard-calculator",
  "title": "Gravel Cubic Yard Calculator | Driveways, Tons & Depth",
  "h1": "Gravel Cubic Yard Calculator",
  "description": "Estimate gravel cubic yards and short tons for driveways, paths and base layers. See depth charts, crushed stone types and loose vs compacted quantities.",
  "type": "material",
  "material": "gravel",
  "mode": "dimensions",
  "intro": "Estimate gravel, crushed stone or aggregate volume for a driveway, path, drainage layer or landscape bed. Enter your area and planned finished depth; then read how aggregate gradation, loose versus compacted conditions, and supplier tonnage can change the order.",
  "keyFact": "A 40 × 10 ft gravel area at a uniform 4-inch depth contains 4.94 cubic yards geometrically, before loose-to-compacted adjustment.",
  "sections": [
    {
      "heading": "How to calculate gravel for a driveway or path",
      "paragraphs": [
        "Start with the actual area being covered, not the length of the road alone. Measure driveway length and average width in feet. Multiply by the required finished gravel depth in inches and divide by 324 to find cubic yards. A 40 × 10-foot drive covered 4 inches deep has 40 × 10 × 4 ÷ 324 = <strong>4.94 yd³</strong> of installed geometric volume.",
        "If your driveway widens at the garage, has turnouts or includes a curved apron, split it into sections. Calculate each footprint and layer depth separately; then add the quantities. The result is a useful volume check, but it does not automatically say how many tons or loose truckloads you should purchase."
      ]
    },
    {
      "heading": "Gravel coverage chart by depth",
      "paragraphs": [
        "The chart shows the mathematical amount of gravel needed to cover 100 square feet at uniform thickness. Use it for comparing design scenarios only: decorative stone, compacted base and drainage aggregate have different recommended applications. A thicker layer requires proportionally more volume, regardless of the stone's mass."
      ],
      "table": {
        "caption": "Gravel volume for 100 sq ft, before compaction or waste",
        "headers": [
          "Finished depth",
          "Cubic yards",
          "Cubic feet"
        ],
        "rows": [
          [
            2,
            "0.62 yd³",
            "16.67 ft³"
          ],
          [
            3,
            "0.93 yd³",
            "25 ft³"
          ],
          [
            4,
            "1.23 yd³",
            "33.33 ft³"
          ],
          [
            6,
            "1.85 yd³",
            "50 ft³"
          ],
          [
            8,
            "2.47 yd³",
            "66.67 ft³"
          ]
        ],
        "note": "These are calculated layer volumes, not instructions to use a particular depth for a driveway."
      }
    },
    {
      "heading": "Choosing gravel type: crushed stone, base or drainage aggregate",
      "paragraphs": [
        "Products sold as gravel are not necessarily interchangeable. Dense-graded crushed aggregate contains a range of particle sizes and finer material intended to compact into a stable base. Open-graded, clean stone has larger voids and may be selected where drainage is the priority. Decorative pea gravel or river rock has a different surface feel and is often unsuitable as a substitute for a specified load-bearing base.",
        "The [[Federal Highway Administration's granular-base guidance|https://www.fhwa.dot.gov/publications/research/infrastructure/structures/97148/app3.cfm]] distinguishes the properties and gradation of base and subbase materials. Before ordering, confirm nominal stone size, gradation, fines, compaction and drainage requirements with the project plans or supplier. A generic volume calculator cannot choose the correct aggregate product."
      ],
      "bullets": [
        "Dense-graded base: selected for a compacted support layer when specified.",
        "Clean drainage stone: typically chosen for permeability and drainage applications.",
        "Pea gravel or decorative rock: often used for surface appearance and landscape beds.",
        "Crushed stone versus natural gravel: particle shape and grading may affect compaction and stability."
      ]
    },
    {
      "heading": "Cubic yards to tons: what does a yard of gravel weigh?",
      "paragraphs": [
        "A cubic yard is volume; a US short ton is 2,000 pounds of weight. Gravel weight depends on bulk density, which varies with rock type, particle grading, moisture and the volume state being measured. The calculator uses an <strong>editable illustrative default</strong>, not a verified density for the stone in your truck.",
        "To estimate short tons, multiply cubic yards by short tons per cubic yard. With an <em>example</em> factor of 1.4 short tons per cubic yard, a 4.94-yard layer would be approximately 6.92 short tons. If your supplier quotes a density in pounds per cubic foot, multiply that density by 27 cubic feet and divide by 2,000 to obtain short tons per cubic yard.",
        "For a weight-focused workflow, use our [[cubic yards to tons calculator|/cubic-yards-to-tons/]] and replace any default with the supplier's bulk-density information."
      ]
    },
    {
      "heading": "Loose versus compacted gravel: two volumes, not one",
      "paragraphs": [
        "Your project drawing may specify a <strong>compacted finished thickness</strong>, but a truck can deliver loose aggregate. Compaction reduces void space, so the loose volume required to achieve a specified compacted volume may differ. The correct relationship depends on the actual aggregate gradation, moisture and placement method; there is no scientifically valid fixed allowance for every gravel type.",
        "A loose-to-compacted factor should come from product test data or project requirements. It may be expressed through dry density, compaction specifications or verified past placement yields. An extra-percentage field on a calculator is only a scenario input. Do not assume it reproduces a Proctor test, field density measurement or engineering specification."
      ]
    },
    {
      "heading": "Example: gravel driveway quoted by the ton",
      "paragraphs": [
        "Suppose a driveway has a geometric installed requirement of 4.94 yd³. Your supplier provides a product-specific bulk density of <strong>1.45 short tons per cubic yard</strong> for the relevant material state. Multiplying 4.94 × 1.45 gives roughly <strong>7.16 short tons</strong> for that stated density and volume, before any further project adjustment.",
        "If the supplier sells by the ton, ask whether the density represents loose or compacted material, and verify the final thickness requirement. If the quotation is by cubic yard, confirm whether the load volume is measured loose. Either way, supplier product information is more useful than a generic online conversion."
      ]
    },
    {
      "heading": "Measuring irregular gravel areas and multiple layers",
      "paragraphs": [
        "A long path may be easiest to measure as several rectangles. A circular landscape bed needs π × radius² for area before applying depth. If one part of the site requires a 2-inch decorative topping and another needs a 6-inch base, calculate and order those materials separately rather than using one blended quantity.",
        "Subgrade shape, rutting and elevation changes can create pockets that need additional aggregate. For significant grading, use measured elevations or cross-sections. Simply multiplying the footprint by a guessed average depth can produce a misleading delivery estimate when a surface is uneven."
      ]
    },
    {
      "heading": "Gravel delivery, truckloads and price estimates",
      "paragraphs": [
        "Stone delivery can be limited by legal truck payload weight as well as the truck bed's nominal cubic-yard capacity. A truck advertised as holding several cubic yards may not haul that volume of dense stone without exceeding its allowable load. Confirm actual payload and the number of trips with the hauler instead of assuming capacity from bed size alone.",
        "For an illustrative cost comparison, multiply the quoted number of short tons by the price per short ton, or the quoted cubic yards by price per cubic yard. Then include delivery, minimum-load charges and any spreading or compaction service. Check whether suppliers use US short tons, not metric tonnes, before comparing numbers."
      ]
    },
    {
      "heading": "Gravel ordering checklist and common errors",
      "paragraphs": [
        "Before buying, verify the project footprint, finish grade, planned depth for each layer, aggregate type, supplier unit and how material density is defined. Distinguish purchased delivery volume from finished installed volume. For base and pavement work, the specification for grading and compaction is more important than maximizing the number shown by a generic calculator.",
        "Common errors include treating pea gravel as a substitute for crushed base, assuming every cubic yard weighs the same, ignoring a wider driveway apron, and using a compacted-depth calculation as if it directly described loose truck capacity. When you need only a basic volume conversion, see [[square feet to cubic yards|/square-feet-to-cubic-yards/]]."
      ]
    }
  ],
  "faqs": [
    {
      "question": "How many cubic yards of gravel do I need for a 100-square-foot area?",
      "answer": "At 2 inches deep, about 0.62 yd³; at 3 inches, about 0.93 yd³; at 4 inches, about 1.23 yd³. These are geometric finished-layer volumes and do not include loose-to-compacted adjustment."
    },
    {
      "question": "How much gravel for a 10 × 20 driveway at 4 inches?",
      "answer": "The area is 200 sq ft. Multiply by 4 inches, divide by 324, and the geometric volume is about 2.47 cubic yards. Confirm the layer depth and aggregate product before ordering."
    },
    {
      "question": "How many tons of gravel are in five cubic yards?",
      "answer": "It depends on bulk density. At an illustrative 1.4 US short tons per cubic yard, 5 yd³ weighs about 7 short tons. Supplier-specific weight is preferable."
    },
    {
      "question": "What is the difference between gravel and crushed stone base?",
      "answer": "Gravel is a broad category. Dense-graded crushed base typically includes a controlled mix of sizes and fines for compaction, while clean or decorative stone may serve other purposes. Use the specified aggregate, not just a matching volume."
    },
    {
      "question": "Should I add gravel for compaction?",
      "answer": "A compacted finished thickness may require more loose delivered volume, but the factor depends on the material and field conditions. Ask the supplier or project specialist for the applicable conversion."
    },
    {
      "question": "Can the calculator estimate pea gravel?",
      "answer": "Yes, it can calculate geometric volume for pea gravel. Weight and installation suitability differ from crushed stone, so use the selected product's density and application requirements."
    },
    {
      "question": "How many yards of gravel will fit in a dump truck?",
      "answer": "There is no universal amount. A truck is limited by both bed volume and allowable load weight. Determine the gravel density and ask the hauler for legal payload and practical delivery capacity."
    },
    {
      "question": "Does more gravel always mean better driveway drainage?",
      "answer": "No. Drainage depends on grading, subgrade, aggregate gradation and site design. A deeper layer of the wrong product may not correct a drainage problem."
    }
  ]
}
{
  "slug": "mulch-cubic-yard-calculator",
  "title": "Mulch Cubic Yard Calculator | Beds, Bags & Coverage",
  "h1": "Mulch Cubic Yard Calculator",
  "description": "Calculate mulch by cubic yard for garden beds and tree rings. Compare 2- and 3-cubic-foot bags, coverage depth, bulk delivery and topping up existing mulch.",
  "type": "material",
  "material": "mulch",
  "mode": "dimensions",
  "intro": "Plan the cubic yards of bark or wood mulch needed for garden beds, shrub borders, circular planting areas and tree rings. Estimate coverage at a chosen depth, compare bulk mulch with bags, and avoid ordering a full new layer when you're only topping up an existing bed.",
  "keyFact": "At a uniform 3-inch depth, one cubic yard of mulch covers approximately 108 square feet before settling or loss.",
  "sections": [
    {
      "heading": "How many cubic yards of mulch do I need?",
      "paragraphs": [
        "Measure the landscaped area in square feet and decide how much <strong>new mulch depth</strong> you need. Multiply square feet by desired depth in inches and divide by 324. For a 12-foot by 10-foot garden bed receiving a fresh 3-inch layer, the calculation is 120 × 3 ÷ 324 = <strong>1.11 cubic yards</strong>.",
        "For beds broken into distinct sections, estimate each one separately. The total cubic yards determine the material quantity. A supplier may then sell that volume by bulk yard or package it in bags labeled by cubic feet. If you only know the area, the [[square feet to cubic yards tool|/square-feet-to-cubic-yards/]] explains the area-and-depth calculation."
      ]
    },
    {
      "heading": "Mulch coverage chart: square feet per cubic yard",
      "paragraphs": [
        "One yard of mulch is 27 cubic feet of material. It spreads across more square feet when the layer is shallow. The following coverage values assume a uniform layer on a level reference area; uneven beds, lost material and changes in settled thickness affect real coverage.",
        "The depth you should use depends on the plant, age, site drainage and guidance for your mulch type. The numbers are not a recommendation to apply a 4-inch layer around every plant."
      ],
      "table": {
        "caption": "Theoretical mulch coverage by layer depth",
        "headers": [
          "Mulch depth",
          "1 cubic yard covers",
          "3 cubic yards cover"
        ],
        "rows": [
          [
            1,
            "324 sq ft",
            "972 sq ft"
          ],
          [
            2,
            "162 sq ft",
            "486 sq ft"
          ],
          [
            3,
            "108 sq ft",
            "324 sq ft"
          ],
          [
            4,
            "81 sq ft",
            "243 sq ft"
          ]
        ],
        "note": "Coverage is geometric and ignores any settlement, slope or overage."
      }
    },
    {
      "heading": "How deep should garden mulch be?",
      "paragraphs": [
        "The [[University of Minnesota Extension's mulching guidance|https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/mulching-for-soil-and-garden-health]] discusses a 2- to 4-inch range for many garden applications, with soil aeration and plant health in mind. The correct depth for a specific bed may be lower. Deep mulch is not automatically better at controlling weeds or conserving moisture.",
        "Keep mulch from piling against tree trunks, stems and root flares. For newly planted trees and shrubs, follow more targeted guidance: the [[University of Minnesota Extension|https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/watering-newly-planted-trees-and-shrubs]] cautions against deep mulch and recommends leaving the root flare bare. Check the material already in place before adding more."
      ]
    },
    {
      "heading": "Mulch bag calculator: 2-cubic-foot and 3-cubic-foot bags",
      "paragraphs": [
        "Bagged mulch is usually described by <strong>volume per bag</strong>, not by cubic yards. Since one cubic yard equals 27 cubic feet, one yard contains the same labeled volume as 13.5 two-cubic-foot bags or 9 three-cubic-foot bags. When buying bags, round up to the next whole bag because partial bags may not be purchasable.",
        "A 2.5-yard job equals 67.5 cubic feet. Divide 67.5 by 2 for 33.75, or <strong>34 two-cubic-foot bags</strong>. With 3-cubic-foot bags, it is 22.5, or <strong>23 whole bags</strong>. Bag yields are stated volumes; compressed products or unusual packaging may require following product-specific instructions."
      ],
      "table": {
        "caption": "Whole bags needed to meet selected bulk mulch volumes",
        "headers": [
          "Bulk volume",
          "2-ft³ bags",
          "3-ft³ bags"
        ],
        "rows": [
          [
            "0.5 yd³",
            "7 bags",
            "5 bags"
          ],
          [
            "1 yd³",
            "14 bags",
            "9 bags"
          ],
          [
            "2 yd³",
            "27 bags",
            "18 bags"
          ],
          [
            "2.5 yd³",
            "34 bags",
            "23 bags"
          ],
          [
            "3 yd³",
            "41 bags",
            "27 bags"
          ]
        ],
        "note": "Whole-bag counts round upward from total cubic feet. They do not include any additional waste or settling allowance."
      }
    },
    {
      "heading": "How to measure circular beds, tree rings and curved borders",
      "paragraphs": [
        "For a circular bed, measure the diameter, halve it to get the radius and calculate area as <strong>π × radius²</strong>. Multiply area in square feet by mulch depth in inches, then divide by 324. A 10-foot-diameter planting circle has about 78.54 sq ft of area. At 3 inches deep, that is roughly 0.73 yd³.",
        "A ring around a tree is different because the center should remain free of mulch. Subtract the unmulched center circle from the larger area. If the outer radius is 5 feet and the inner mulch-free radius is 1 foot, the ring area is π × (25 − 1) ≈ 75.40 sq ft; at 3 inches deep, the material volume is about 0.70 yd³. Actual trunk clearances should follow tree-care guidance."
      ]
    },
    {
      "heading": "Topping up existing mulch without over-ordering",
      "paragraphs": [
        "A common estimating mistake is treating every spring refresh as a brand-new 3-inch application. If a bed already has an intact 2-inch layer and the desired final layer is 3 inches, the additional depth is about 1 inch, not 3 inches, provided that the old layer is suitable and measured consistently.",
        "For a 200-square-foot bed, one extra inch requires 200 × 1 ÷ 324 ≈ <strong>0.62 yd³</strong>. Recheck the depth in multiple spots because older mulch may be uneven or mixed into soil. Where plants are already close to an appropriate mulch depth, adding material may not be necessary."
      ]
    },
    {
      "heading": "Bulk mulch versus bags: when is each more practical?",
      "paragraphs": [
        "Bulk mulch is often convenient for several connected planting beds; bags can be easier to move through gates or use for small, scattered patches. To compare cost, convert all options to the same total volume. For example, a 2-yard job needs 54 cubic feet, which equals 27 two-cubic-foot bags or 18 three-cubic-foot bags, before any extra allowance.",
        "Compare the supplier's delivered bulk price against the price of the necessary whole bags. Include delivery minimums, pickup time, bag handling and where a truck can dump. Price per bag is not directly comparable to price per cubic yard until the volume is normalized."
      ]
    },
    {
      "heading": "Choosing mulch types and estimating volume accurately",
      "paragraphs": [
        "Shredded hardwood, bark nuggets and wood chips can differ in texture, piece size, moisture and how they settle. The geometric formula remains the same, but material handling, appearance and finished depth can differ. Straw, compost and inorganic stone are not always substitutes for wood mulch and should be evaluated for the intended planting use.",
        "Choose a product appropriate for the plants and site, then order by the correct labeled volume. Avoid treating an approximate mulch weight as the primary way to estimate garden-bed coverage. Use volume for coverage, and confirm supplier weight only for delivery planning. For comparison with soil in a new planting bed, see [[the topsoil calculator|/topsoil-cubic-yard-calculator/]]."
      ]
    },
    {
      "heading": "Mulch ordering checklist and practical errors",
      "paragraphs": [
        "Measure each bed including rounded corners, exclude hardscape and any intentional unmulched area, and verify the depth of mulch already present. Confirm whether the product is sold in cubic feet, cubic yards or something else. Recheck plant stem and tree trunk clearances before spreading.",
        "The most frequent errors are forgetting existing mulch, confusing bags by weight with bags by volume, rounding down fractional bags, estimating a tree ring as a full circle and selecting a layer that is too deep for plant health. The [[cubic yard coverage chart|/cubic-yard-coverage-chart/]] provides additional depth comparisons."
      ]
    }
  ],
  "faqs": [
    {
      "question": "How many square feet does one cubic yard of mulch cover?",
      "answer": "At 2 inches deep, approximately 162 square feet; at 3 inches, 108 square feet; at 4 inches, 81 square feet. Real coverage varies with bed shape and settling."
    },
    {
      "question": "How much mulch do I need for 500 square feet at 3 inches?",
      "answer": "Calculate 500 × 3 ÷ 324 = 4.63 cubic yards before any additional allowance. A 2-inch layer over the same area would need about 3.09 cubic yards."
    },
    {
      "question": "How many 2-cubic-foot mulch bags are in a yard?",
      "answer": "By labeled volume, 27 ÷ 2 = 13.5 bags per cubic yard. To buy at least one cubic yard with whole 2-cubic-foot bags, round up to 14."
    },
    {
      "question": "How many three-cubic-foot bags equal a cubic yard?",
      "answer": "Exactly nine bags with a labeled volume of three cubic feet each equal 27 cubic feet, which is one cubic yard."
    },
    {
      "question": "Should I add three inches of mulch every year?",
      "answer": "Not necessarily. Check the existing mulch depth and condition, then top up only what is needed to reach an appropriate final depth for the plants and site."
    },
    {
      "question": "How do I calculate mulch for a round flower bed?",
      "answer": "Find the circular area using π × radius², multiply by depth in inches, and divide by 324. If the bed has a mulch-free center, subtract that center area first."
    },
    {
      "question": "What is the best mulch depth around a tree?",
      "answer": "Follow tree-specific planting guidance rather than a blanket number. Avoid excessive depth and keep the root flare and trunk clear of piled mulch."
    },
    {
      "question": "Does the calculator count the area under plants and rocks?",
      "answer": "It calculates the full measured area. Subtract any meaningful areas that will not receive mulch, such as a central paver area or a mulch-free tree ring interior."
    }
  ]
}
{
  "slug": "topsoil-cubic-yard-calculator",
  "title": "Topsoil Cubic Yard Calculator | Lawn & Garden Soil",
  "h1": "Topsoil Cubic Yard Calculator",
  "description": "Calculate cubic yards of topsoil for lawns, gardens and grading. Compare soil depths, new lawn vs topdressing, soil quality and settling.",
  "type": "material",
  "material": "topsoil",
  "mode": "dimensions",
  "intro": "Calculate topsoil cubic yards for a new lawn, garden bed, soil replacement or small leveling project. Enter area and desired finished soil depth, then use the guidance below to distinguish topsoil quantities from compost amendments, topdressing and structural fill.",
  "keyFact": "A 30 × 20 ft area receiving 4 inches of topsoil has a geometric volume of 7.41 yd³ before settlement or delivery adjustments.",
  "sections": [
    {
      "heading": "How to calculate topsoil cubic yards",
      "paragraphs": [
        "Measure the footprint in feet and decide how much <strong>new finished soil depth</strong> the project requires. Multiply length × width in feet by depth in inches, then divide by 324. A 30 × 20-foot yard area is 600 sq ft; at 4 inches thick, it requires 600 × 4 ÷ 324 = <strong>7.41 cubic yards</strong> of geometric volume.",
        "For multiple beds, measure each section and sum the cubic yards. If you already know total square footage, use <strong>area (sq ft) × depth (in) ÷ 324</strong>. For nonuniform filling or grading, a single depth may hide large differences; use measured sections or professional grade data when accuracy matters."
      ]
    },
    {
      "heading": "Topsoil depth chart for lawn and garden projects",
      "paragraphs": [
        "The table shows the geometric cubic yards needed to add a uniform layer across 100 square feet. It does not define the best depth for a particular plant, soil or landscape situation. A 2-inch topdressing, a new lawn on compacted subsoil and a deeper planting bed have different needs."
      ],
      "table": {
        "caption": "Topsoil volume per 100 square feet at selected uniform depths",
        "headers": [
          "New soil depth",
          "Cubic yards",
          "Cubic feet"
        ],
        "rows": [
          [
            1,
            "0.31 yd³",
            "8.33 ft³"
          ],
          [
            2,
            "0.62 yd³",
            "16.67 ft³"
          ],
          [
            3,
            "0.93 yd³",
            "25 ft³"
          ],
          [
            4,
            "1.23 yd³",
            "33.33 ft³"
          ],
          [
            6,
            "1.85 yd³",
            "50 ft³"
          ],
          [
            8,
            "2.47 yd³",
            "66.67 ft³"
          ]
        ],
        "note": "Figures reflect the stated finished thickness on a level reference footprint and exclude settling or compaction adjustments."
      }
    },
    {
      "heading": "New lawn preparation versus established lawn topdressing",
      "paragraphs": [
        "These are separate projects and should not share a single default depth. When establishing new turf after construction, roots may face compacted or low-quality subsoil. [[Penn State Extension's lawn-establishment guidance|https://extension.psu.edu/lawn-establishment]] describes 4 to 6 inches of suitable, firmed topsoil for establishing good-quality turf and integrating the upper material with underlying soil where appropriate.",
        "By contrast, established turf topdressing typically uses a much shallower application, carefully worked into the existing grass canopy; burying grass under several inches of soil can harm it. Do not use a full new-lawn soil depth when calculating a routine topdress. Select depth based on the actual maintenance practice, and consult local extension guidance for turf type and conditions."
      ]
    },
    {
      "heading": "Topsoil versus garden soil, planting mix and compost",
      "paragraphs": [
        "Topsoil refers to an upper soil material, but a product sold as 'topsoil' may contain varying proportions of sand, silt, clay and organic matter. Screened topsoil usually has large debris removed, although screening alone does not guarantee fertility or a suitable soil structure. Raised-bed planting mixes can contain different amendments and may be sold by volume.",
        "Compost is primarily an organic soil amendment, not always a complete replacement for mineral topsoil. A garden that needs improved organic matter may require a very different material from a yard that needs several inches of soil to establish a new grade. Calculate each product separately, and ask for the supplier's composition and intended uses."
      ]
    },
    {
      "heading": "How much soil is needed for a raised bed or planting area?",
      "paragraphs": [
        "For a rectangular raised bed, multiply the inside length and width by the actual <em>unfilled</em> height you plan to add, then convert to cubic yards. A 4 × 8-foot bed filled 12 inches deep requires 4 × 8 × 12 ÷ 324 = <strong>1.19 cubic yards</strong>. If the bottom contains existing soil, logs or another planned layer, measure only the portion that will actually be filled with the selected planting soil.",
        "Do not assume that an entire planter must be filled with generic topsoil. The crop, drainage, local climate and soil blend influence the material selection. Multiple beds may have different dimensions and settled heights, so a small sketch and separate quantities help avoid an unexpectedly large purchase."
      ]
    },
    {
      "heading": "Soil settling: loose delivered yards versus finished depth",
      "paragraphs": [
        "The volume in a delivery truck may differ from the volume of soil after watering, spreading and settling. Moisture, texture, organic matter and placement methods affect how much a loose soil pile changes. A universal percentage is not reliable for all topsoil products, particularly when comparing screened mineral soil with a highly organic planting mix.",
        "Ask the supplier whether the material is sold by loose cubic yard and whether it can provide product-specific recommendations for finished coverage. The calculator's extra allowance can model a scenario, but it does not compute soil shrinkage or guarantee settled grade."
      ]
    },
    {
      "heading": "Checking topsoil quality before you buy",
      "paragraphs": [
        "The cheapest bulk topsoil may not be suitable for lawns or gardens. Ask about screening, visible debris, weed contamination, texture, organic matter and whether a representative soil analysis is available. A soil test can clarify pH and nutrients for the intended plants, while texture and drainage characteristics affect root growth and water movement.",
        "Avoid spreading excessively wet soil with heavy equipment, as compaction can damage pore space and water infiltration. Consider how the delivered soil will blend with existing subsoil: an abrupt interface can affect drainage or root penetration. If the goal is a large grade change rather than a suitable growing layer, [[fill dirt estimation|/fill-dirt-cubic-yard-calculator/]] addresses that different use case."
      ]
    },
    {
      "heading": "Topsoil delivery and bulk pricing",
      "paragraphs": [
        "Compare prices in the same unit. If a supplier quotes topsoil by cubic yard, multiply the estimated purchase quantity by the stated price per cubic yard. If bags are offered instead, check each bag's cubic-foot volume and compare it with the total cubic feet required. One cubic yard is exactly 27 cubic feet, before any supplier or project adjustment.",
        "Include delivery minimums, access limitations, unloading location and the cost of moving and spreading material. A truck might be limited by payload weight even when its bed has additional volume. Moist soil can weigh substantially more than drier soil of the same bulk volume; do not rely on a fixed tons-per-yard value."
      ]
    },
    {
      "heading": "Topsoil planning mistakes and final checklist",
      "paragraphs": [
        "Before ordering, confirm the actual footprint, finished thickness, whether you are replacing or topping up existing soil, and what product is appropriate for the job. Measure low and high points in an uneven yard. Verify the soil blend and whether the supplier quotes a loose volume. Keep landscaping material estimates separate from the grading or structural-fill quantities.",
        "Avoid using a new-lawn depth for established-lawn topdressing, estimating a raised-bed fill from its full exterior height, ignoring soil already in the bed, or assuming the word 'screened' guarantees plant suitability. Our [[cubic yard coverage chart|/cubic-yard-coverage-chart/]] can help visualize the effect of changing soil depth."
      ]
    }
  ],
  "faqs": [
    {
      "question": "How much topsoil do I need for 1,000 square feet?",
      "answer": "Depth is required. For 1,000 sq ft, 1 inch equals about 3.09 yd³, 2 inches about 6.17 yd³, and 4 inches about 12.35 yd³ before settling or allowances."
    },
    {
      "question": "How many yards of topsoil for a 20 × 20 garden at 6 inches?",
      "answer": "The geometric volume is 20 × 20 × 6 ÷ 324 = approximately 7.41 cubic yards. Verify that the planned material and depth suit the garden's use."
    },
    {
      "question": "How much topsoil does a new lawn need?",
      "answer": "It depends on soil conditions and the lawn-establishment plan. Penn State Extension discusses 4 to 6 inches of firmed or settled suitable topsoil for good-quality turf establishment; do not apply that depth automatically to established-lawn topdressing."
    },
    {
      "question": "Is topsoil the same as compost?",
      "answer": "No. Topsoil is soil material, while compost is an organic amendment. Both can improve a planting project when appropriately selected, but the correct blend and amount depend on the soil and plants."
    },
    {
      "question": "How much does a cubic yard of topsoil weigh?",
      "answer": "There is no fixed weight. Soil texture, moisture content, organic matter and compaction all affect bulk density. Ask the supplier for a relevant pounds-per-yard or tons-per-yard estimate."
    },
    {
      "question": "Does loose topsoil settle after delivery?",
      "answer": "It may. Settling depends on soil and placement conditions. Check the desired finished depth and use a supplier-specific allowance rather than an assumed universal percentage."
    },
    {
      "question": "Can I use topsoil to fill a large hole under a structure?",
      "answer": "Not automatically. Growing soil and engineered structural fill serve different purposes. Structural backfill requires material and placement specifications appropriate to the project."
    },
    {
      "question": "How do I calculate raised-bed soil?",
      "answer": "Multiply inside length by inside width by the depth of soil you intend to add. Convert cubic feet to cubic yards by dividing by 27, and account for any existing fill or other materials occupying space."
    }
  ]
}
{
  "slug": "fill-dirt-cubic-yard-calculator",
  "title": "Fill Dirt Cubic Yard Calculator | Backfill & Earthwork",
  "h1": "Fill Dirt Cubic Yard Calculator",
  "description": "Estimate fill dirt cubic yards for backfill, grading, trenches and low areas. Learn bank vs loose vs compacted volume, swell and shrinkage.",
  "type": "material",
  "material": "fill-dirt",
  "mode": "dimensions",
  "intro": "Estimate fill dirt volume for backfilling, raising a level area or preliminary grading. This tool calculates a measured geometric volume; the guide explains why bank, loose and compacted cubic yards require distinct assumptions before ordering truck-delivered fill.",
  "keyFact": "Raising a 20 × 15 ft rectangular area by 6 inches requires 5.56 cubic yards of geometric finished fill volume.",
  "sections": [
    {
      "heading": "How to calculate fill dirt cubic yards",
      "paragraphs": [
        "Measure the space to be filled, including length, width and target depth. For a rectangular level area, use <strong>length (ft) × width (ft) × fill depth (in) ÷ 324</strong>. A 20 × 15-foot area raised 6 inches has a geometric volume of 20 × 15 × 6 ÷ 324 = <strong>5.56 yd³</strong>. This describes the target space, not necessarily the loose truck quantity.",
        "Where soil is being moved between cut and fill areas, measure existing and proposed grades. Cut volume is the material removed, and fill volume is the volume required to establish the new grade. Subtracting one number from the other without accounting for soil state, suitability and loss can produce an inaccurate trucking plan."
      ]
    },
    {
      "heading": "Bank, loose and compacted cubic yards explained",
      "paragraphs": [
        "These are three different measurement states. <strong>Bank cubic yards (BCY)</strong> describe earth in its original undisturbed position. <strong>Loose cubic yards (LCY)</strong> describe excavated or stockpiled material after its structure is disturbed. <strong>Compacted cubic yards (CCY)</strong> describe fill placed and compacted to the specified condition.",
        "A volume of material may swell when dug, then reduce in volume when placed and compacted. The [[Federal Highway Administration's earthwork design guidance|https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design]] explains how shrink and swell depend on material and field conditions. A cubic yard measured in place cannot simply be assumed to equal one cubic yard in a truck.",
        "Use density measurements or project-specific swell and shrinkage factors when converting between states. The calculator's extra percentage field is for scenarios, not a substitute for geotechnical testing or an earthwork mass-balance plan."
      ],
      "table": {
        "caption": "Earthwork volume terminology",
        "headers": [
          "Term",
          "What it measures",
          "Typical planning use"
        ],
        "rows": [
          [
            "BCY (bank)",
            "Undisturbed in-place soil",
            "Existing excavation / cut"
          ],
          [
            "LCY (loose)",
            "Excavated or stockpiled material",
            "Truck loads / loose delivery"
          ],
          [
            "CCY (compacted)",
            "Placed soil at specified density",
            "Finished fill / grading"
          ]
        ],
        "note": "These abbreviations describe volume states, not interchangeable units or universal conversion factors."
      }
    },
    {
      "heading": "Fill depth chart for a level 100-square-foot area",
      "paragraphs": [
        "For preliminary yard leveling, depth has a direct effect on required volume. The following values represent a uniform finished fill layer, without correction for settlement, compaction or changes in base elevations. A shallow top-up and a one-foot raise are very different hauling jobs."
      ],
      "table": {
        "caption": "Finished geometric fill volume for 100 square feet",
        "headers": [
          "Average fill depth",
          "Cubic yards",
          "Cubic feet"
        ],
        "rows": [
          [
            2,
            "0.62 yd³",
            "16.67 ft³"
          ],
          [
            4,
            "1.23 yd³",
            "33.33 ft³"
          ],
          [
            6,
            "1.85 yd³",
            "50 ft³"
          ],
          [
            8,
            "2.47 yd³",
            "66.67 ft³"
          ],
          [
            12,
            "3.7 yd³",
            "100 ft³"
          ]
        ],
        "note": "Do not use a single average thickness where site grades vary substantially."
      }
    },
    {
      "heading": "Estimating fill for a sloped yard or changing grade",
      "paragraphs": [
        "A flat-area formula assumes uniform fill depth. When the finished grade tapers from one end to another, depth varies across the footprint. For a simple planar taper with constant width and a depth that changes linearly, the average of the two end depths can estimate the geometric volume. This shortcut is not appropriate for irregular terrain, hollows or changing side slopes.",
        "Example: a rectangular 40 × 20-foot zone rises from zero fill at one end to 12 inches at the other, with a linear grade across its 40-foot length. The average fill depth is (0 + 12) ÷ 2 = 6 inches. Estimated volume = 800 × 6 ÷ 324 = <strong>14.81 cubic yards</strong> in the finished geometric space. This ignores material-state changes and any drainage or settlement requirements.",
        "For meaningful siteworks, measured spot elevations, contour surfaces or engineering cross-sections provide better estimates than a guessed average depth. Keep erosion, drainage direction and adjoining properties in mind before altering grade."
      ]
    },
    {
      "heading": "Trench backfill: subtract the space occupied by other materials",
      "paragraphs": [
        "A trench's gross excavated volume is not necessarily the volume of fill dirt to order. Pipes, conduits, concrete structures, drainage stone or bedding occupy part of the trench. The net backfill volume is the measured void to be refilled after accounting for the installed material and layers.",
        "For example, a straight trench 60 feet long, 2 feet wide and 3 feet deep has a gross box volume of 60 × 2 × 3 ÷ 27 = <strong>13.33 cubic yards</strong>. If a specified bedding layer occupies part of that space, estimate its volume separately and subtract it from the gross void before calculating soil backfill. This example is only a quantity calculation and does not establish safe trench dimensions, support systems or excavation procedures."
      ]
    },
    {
      "heading": "Swell, shrinkage and compaction factors",
      "paragraphs": [
        "Swell occurs when a mass of excavated soil occupies more bulk volume after disturbance. Shrinkage describes a reduction in volume associated with placement, compaction or earthwork balance. Moisture, gradation, organic content and existing density influence these effects. No single factor applies to every sandy, clayey or rocky soil.",
        "For a strictly illustrative calculation, if project data say <em>1 compacted cubic yard requires 1.15 loose cubic yards</em>, a 10-CCY finished fill would require 11.5 LCY. This 1.15 ratio is an example supplied for arithmetic; it is not a default material factor and must not be applied without project-specific information.",
        "Compaction specifications may reference tests, moisture-density relationships or a target dry density. For load-bearing fill, the appropriate material, lift thickness, compaction method and verification belong to the project's engineering requirements."
      ]
    },
    {
      "heading": "Choosing fill material: clean fill versus topsoil",
      "paragraphs": [
        "Fill dirt is primarily used to build or restore grade, backfill voids or form a suitable subgrade. Topsoil is selected for its value as a growing medium. A soil product suited to planting is not automatically appropriate for structural compaction, and material selected as structural fill may be poor as a surface planting layer.",
        "Ask the supplier about particle size, organic material, debris, contamination concerns and suitability for your project. Imported fill may require testing or approval under project documents or local rules. If the goal is a healthy lawn or garden surface, calculate that separate upper layer using the [[topsoil cubic yard calculator|/topsoil-cubic-yard-calculator/]]."
      ]
    },
    {
      "heading": "Dump truck quantities, costs and delivery planning",
      "paragraphs": [
        "Earthwork deliveries are often constrained by both hauling capacity and legal payload weight. A bed that has room for several loose cubic yards may reach its weight limit first. Ask the contractor or supplier how loads are measured and whether invoices use loose cubic yards, bank yards, short tons or truck trips.",
        "For preliminary budgeting, calculate the intended order quantity in the supplier's billing unit and multiply by its quote. Include hauling, disposal of unsuitable excavated material, access, spreading, compaction and testing where applicable. A geometry-only calculator cannot determine disposal classifications, material suitability or total project cost."
      ]
    },
    {
      "heading": "When to use a professional earthwork estimate",
      "paragraphs": [
        "A simple fill quantity is most useful for small, level, nonstructural areas with known dimensions. Retaining walls, building pads, significant slope changes, utility excavation, flood-prone property and roadway embankments can require survey measurements, drainage design, geotechnical evaluation, permits and inspected compaction.",
        "Before purchasing fill, confirm existing and target elevations, whether the quantity is bank, loose or compacted, which material is specified, the depth and shape of each section, required testing and safe delivery access. For a basic flat-area calculation, the [[homepage cubic yard calculator|/]] provides the underlying geometric volume formula."
      ]
    }
  ],
  "faqs": [
    {
      "question": "How much fill dirt do I need to raise a 20 × 15 area by 6 inches?",
      "answer": "The geometric fill is 20 × 15 × 6 ÷ 324 = about 5.56 cubic yards. The loose quantity to order may differ according to soil density, compaction and placement conditions."
    },
    {
      "question": "What is the difference between bank and loose cubic yards?",
      "answer": "Bank yards measure undisturbed in-place earth; loose yards measure material after it has been excavated. Soil often occupies a different volume when disturbed, so the two quantities should not be treated as identical."
    },
    {
      "question": "What does CCY mean in earthwork?",
      "answer": "CCY means compacted cubic yards: the finished volume after material has been placed and compacted to a defined condition. It is not automatically equal to loose cubic yards on a delivery truck."
    },
    {
      "question": "How do I estimate fill dirt for a sloping yard?",
      "answer": "Measure the existing and proposed grades. A simple linear taper can be estimated from average depth, but irregular terrain needs multiple sections, spot levels or professional survey-based measurements."
    },
    {
      "question": "Can I use excavated dirt as backfill?",
      "answer": "Possibly, if the material is suitable and permitted by the project specifications. Debris, organic matter, excessive moisture or unfavorable soil characteristics may make some excavated material unsuitable."
    },
    {
      "question": "How many cubic yards fit in a dump truck?",
      "answer": "There is no universal capacity. The truck's bed volume and its allowable payload weight both matter, especially for wet or dense soil. Check the actual vehicle and billing method with the hauler."
    },
    {
      "question": "Should I add 20% for fill compaction?",
      "answer": "Do not apply a universal 20% factor. Required loose-to-compacted adjustments depend on soil properties, original state, compaction specifications and field conditions."
    },
    {
      "question": "Can a fill dirt calculator design a building pad or retaining wall?",
      "answer": "No. It computes a preliminary volume. Structural earthwork may need engineered fill, geotechnical testing, appropriate compaction, grading plans and drainage design."
    }
  ]
}
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
