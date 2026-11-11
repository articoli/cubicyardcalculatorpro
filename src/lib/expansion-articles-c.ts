import type {ExpansionArticle} from "./expansion-articles";
export const articlesC:Record<string,ExpansionArticle>={
  "how-much-does-a-cubic-yard-weigh": {
    "category": "Material weight & bulk density",
    "readTime": "10 min read",
    "lead": "One cubic yard always occupies 27 cubic feet, but its weight depends on what fills the space. This guide explains bulk density, moisture, the difference between US short tons and metric tonnes, and how to make a defensible estimate using supplier information.",
    "sections": [
      {
        "heading": "Why one cubic yard has no fixed weight",
        "paragraphs": [
          "A cubic yard is a unit of volume. It measures the space inside a three-foot cube, but it does not define what the cube contains. Sand, soil, gravel, concrete and wood mulch can occupy that space at very different weights. Even two samples of the same material may differ when moisture content, particle size or packing changes.",
          "Bulk density describes a material's mass per unit bulk volume, including the void spaces between particles. For soil, the [[USDA Natural Resources Conservation Service|https://www.nrcs.usda.gov/state-offices/illinois/soil-tech-note-16a-compacted-zone-in-soil]] discusses how compaction changes density and pore space. The correct density is material-specific and must match the state being measured.",
          "This is why a statement such as 'one cubic yard equals one ton' is not a general conversion rule. Volume-to-weight conversion requires additional data, unlike the exact mathematical conversion of 27 cubic feet to a cubic yard."
        ]
      },
      {
        "heading": "Cubic yards to pounds and US short tons formula",
        "paragraphs": [
          "The basic conversion is <strong>weight = volume × bulk density</strong>. If density is reported in pounds per cubic foot, multiply by 27 cubic feet per cubic yard to obtain pounds per cubic yard. Then divide pounds by 2,000 to express the result in US short tons.",
          "For instance, if a supplier's data sheet reports a bulk density of 100 lb/ft³ for a particular loose aggregate state, one cubic yard would weigh 100 × 27 = 2,700 pounds, or 1.35 US short tons. That is an illustrative material-density value, not a published property of every kind of gravel.",
          "When supplier density is already expressed as US short tons per cubic yard, simply multiply by your cubic-yard quantity. Use the [[cubic yards to tons calculator|/cubic-yards-to-tons/]] to enter an actual factor."
        ]
      },
      {
        "heading": "Example weights at several densities",
        "paragraphs": [
          "The table deliberately uses hypothetical densities rather than applying a potentially misleading fixed number to named materials. This lets you compare how strongly the same geometric quantity depends on density.",
          "A nominal 5-yard truckload at 1.5 US short tons per yard weighs 7.5 tons; the same 5 cubic yards at 0.35 short tons per yard would weigh 1.75 tons. These differences affect hauling capacity, not the measured number of cubic yards."
        ],
        "table": {
          "caption": "Weight of one cubic yard at sample bulk densities",
          "heads": [
            "Assumed density",
            "Weight per 1 yd³",
            "Weight per 5 yd³"
          ],
          "rows": [
            [
              "0.25 US tons/yd³",
              "500 lb",
              "1.25 US tons"
            ],
            [
              "0.5 US tons/yd³",
              "1,000 lb",
              "2.5 US tons"
            ],
            [
              "1.0 US ton/yd³",
              "2,000 lb",
              "5 US tons"
            ],
            [
              "1.25 US tons/yd³",
              "2,500 lb",
              "6.25 US tons"
            ],
            [
              "1.5 US tons/yd³",
              "3,000 lb",
              "7.5 US tons"
            ],
            [
              "2.0 US tons/yd³",
              "4,000 lb",
              "10 US tons"
            ]
          ]
        }
      },
      {
        "heading": "Why gravel, sand and soil weights vary",
        "paragraphs": [
          "Crushed stone weight depends on the rock type, particle grading, moisture and how tightly the particles pack. A uniform clean drainage stone can have a different void structure from dense-graded base. Sand likewise varies with moisture content and grain distribution. A weight factor suitable for dry loose sand should not be assumed suitable for damp compacted sand.",
          "Topsoil is not uniform. Organic matter, clay, sand content and moisture can produce large differences in delivered mass. A moist pile may weigh substantially more than a drier pile of similar measured volume. Soil sold by loose cubic yard can also settle, changing volume without changing the total mass of solids.",
          "Compost and wood mulch can be particularly variable because their source materials and moisture levels differ. For ordering dense aggregates or designing loads, obtain the exact supplier's tested or stated bulk density rather than a table of generic online averages."
        ]
      },
      {
        "heading": "Cured concrete weight is not concrete order volume",
        "paragraphs": [
          "Normal-weight concrete is considerably denser than most loose landscape products, but the mass of a hardened concrete element is not the same as the amount of ready-mix that should be ordered. A concrete slab order is based on the volume inside the forms, measured in cubic yards. A density estimate might be useful for a load or structural mass check, but does not replace slab dimensions.",
          "For a slab, calculate length × width × thickness using the [[concrete cubic yard calculator|/concrete-cubic-yard-calculator/]]. For dry bags, use the manufacturer's stated mixed yield per bag rather than dividing an arbitrary concrete density into the bag weight."
        ]
      },
      {
        "heading": "Loose, compacted and bank density states",
        "paragraphs": [
          "The same soil can occupy different volumes in undisturbed ground, after excavation and after compaction. Mass is conserved when material is merely moved, but the bulk volume can change because of voids and rearrangement. Consequently, density values from different states cannot be mixed into one equation without accounting for the conversion.",
          "Use a loose density with loose truckload volume, a relevant installed density with compacted volume, and in-place properties when evaluating bank excavation. The [[soil swell and compaction guide|/soil-swell-and-compaction/]] explains these differences in greater detail."
        ]
      },
      {
        "heading": "US short tons, metric tonnes and long tons",
        "paragraphs": [
          "US construction quotes often use the short ton, defined as 2,000 pounds. A metric tonne is 1,000 kilograms, approximately 2,204.62 pounds. These are not equal. A long ton is 2,240 pounds and is used in some other contexts. Be explicit about which ton a supplier quotes.",
          "If a stone yard says '7 tons,' verify that it means US short tons before converting or comparing with a metric quotation. This website's editable material-weight tools use US short tons unless a page clearly states otherwise."
        ]
      },
      {
        "heading": "Practical bulk-weight verification checklist",
        "paragraphs": [
          "Ask for the actual material product, whether density includes moisture, the volume state, and the unit of measurement. Record how many cubic yards are needed and use the density that matches that quantity. If a contractor must haul the material, confirm payload and axle-weight limitations independently.",
          "Do not use density estimates to infer the suitability of soil for structural fill or the capacity of a building surface. Those are separate engineering questions. For truck scheduling, use the [[dump truck load calculator|/dump-truck-load-calculator/]] with a verified payload allowance."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How much does 1 cubic yard of gravel weigh?",
        "answer": "There is no fixed number. Rock type, grading, moisture and packing affect weight. Ask the supplier for the relevant bulk density."
      },
      {
        "question": "How much does one cubic yard of topsoil weigh?",
        "answer": "Topsoil weight varies with mineral composition, organic matter, water content and its delivered state. Use the supplier's short tons per yard if available."
      },
      {
        "question": "How do I convert pounds per cubic foot into tons per yard?",
        "answer": "Multiply pounds per cubic foot by 27 and divide by 2,000 to get US short tons per cubic yard."
      },
      {
        "question": "Is a metric tonne the same as a US ton?",
        "answer": "No. A US short ton is 2,000 pounds. A metric tonne is 1,000 kilograms, approximately 2,204.62 pounds."
      },
      {
        "question": "Does compacting gravel change its weight?",
        "answer": "Compaction of the same material generally changes bulk volume and density, not the total mass. Loss or additions during placement are separate considerations."
      },
      {
        "question": "Can I estimate truck loads from cubic yards alone?",
        "answer": "Not reliably for dense materials. Check bed volume and allowed payload weight using a material density that matches the load state."
      }
    ],
    "sources": [
      [
        "USDA NRCS soil bulk density",
        "https://www.nrcs.usda.gov/state-offices/illinois/soil-tech-note-16a-compacted-zone-in-soil"
      ],
      [
        "FHWA earthwork states",
        "https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design"
      ]
    ]
  },
  "bulk-vs-bagged-materials": {
    "category": "Material buying & cost comparisons",
    "readTime": "10 min read",
    "lead": "A lower price per cubic yard does not always mean bulk material is cheaper after delivery, and a low bag price can conceal a small package volume. This guide compares like-for-like amounts while accounting for whole bags, transportation, quality and access.",
    "sections": [
      {
        "heading": "Compare the same amount of material first",
        "paragraphs": [
          "Bulk material is typically sold by cubic yard, while packaged mulch, compost or soil may be labeled in cubic feet. Because one cubic yard equals 27 cubic feet, multiply the bulk yards by 27 before comparing bag sizes. If a bed needs 2.4 cubic yards, that is 64.8 cubic feet of total material. Divide by the labeled bag volume and round up to whole bags.",
          "With 2-cubic-foot bags, 64.8 ÷ 2 = 32.4, so you need 33 whole bags. With 3-cubic-foot bags, you need 22 whole bags. Comparing only '33 bags' against '2.4 yards' without a common volume basis hides the true difference.",
          "Use the [[cubic yards to bags calculator|/cubic-yards-to-bags/]] for packaging arithmetic, then return here to consider the cost and practical buying decision."
        ]
      },
      {
        "heading": "Illustrative bulk versus bagged cost comparison",
        "paragraphs": [
          "Imagine a 2.4-yard mulch requirement and a hypothetical retail price of $6 for each 2-cubic-foot bag. Thirty-three bags would cost $198 before sales tax or any collection costs. A bulk price of $58 per cubic yard produces a material subtotal of $139.20, but an $80 delivery fee raises the total to $219.20 before tax.",
          "In that particular example, bags appear cheaper than the delivered bulk load, despite their higher material price per cubic yard. These are invented demonstration prices, not current local quotations. Real break-even points depend on supplier fees, distance, bag size and how much material you actually need.",
          "Also consider the effort of loading, carrying and opening 33 bags. A lower sticker price is not always the best overall choice for a project."
        ],
        "table": {
          "caption": "Worked hypothetical comparison for 2.4 yd³ of mulch",
          "heads": [
            "Option",
            "Material amount",
            "Illustrative material cost",
            "Delivery",
            "Subtotal"
          ],
          "rows": [
            [
              "2 ft³ bags",
              "33 whole bags",
              "$198.00",
              "$0 pickup",
              "$198.00"
            ],
            [
              "Bulk delivery",
              "2.4 yd³",
              "$139.20",
              "$80.00",
              "$219.20"
            ]
          ]
        }
      },
      {
        "heading": "Find the break-even point on delivered price",
        "paragraphs": [
          "The bulk purchase cost can be written as (yards ordered × price per yard) + delivery. Bagged purchase cost is (rounded whole bag count × price per bag) + any delivery or collection charges. To compare the same material, specify an identical target volume and include the full quote.",
          "For small purchases, a bulk supplier's minimum load or fixed delivery cost may dominate. As the order gets larger, spreading a fixed delivery charge across more yards can reduce its effect per yard. But suppliers can have different minimums, truck capacities and quality standards, so there is no universal number of bags at which bulk always wins.",
          "Use the [[cubic yard cost calculator|/cubic-yard-cost-calculator/]] to model supplier-provided unit prices and delivery fees."
        ]
      },
      {
        "heading": "Bag size and product yield can change the answer",
        "paragraphs": [
          "For mulch, compost and certain soils, a package may clearly state a cubic-foot volume. Concrete mix is different: a bag is often labeled by weight and must be converted using its published mixed yield. Comparing a 60-pound concrete bag to a bulk cubic yard by pounds alone can be wrong.",
          "Some products expand, shrink or are sold in compacted packages. The appropriate reference is the manufacturer's actual useful yield, not an assumption that all packages produce their nominal uncompressed shape. Read the label and retain the units when calculating."
        ]
      },
      {
        "heading": "Material quality and intended application",
        "paragraphs": [
          "Not all mulch blends, screened topsoil products or aggregate mixes are equivalent. An apparently cheaper bulk product may differ in particle size, cleanliness, organic content or suitability for an application. For gravel base, gradation can matter more than a small price difference. For soil and compost, test results or product descriptions may justify a different purchase decision.",
          "Compare material name, grade and intended use before treating two quotes as substitutes. Soil intended for plant growth is not automatically suitable for structural backfill. Likewise, decorative river rock and compactable driveway aggregate should not be compared solely by volume cost."
        ]
      },
      {
        "heading": "Access, storage and handling considerations",
        "paragraphs": [
          "Bags are easier to distribute across narrow paths, small courtyards or multiple garden beds, and leftover unopened bags may be simpler to store. Bulk delivery needs a suitable dump location and enough access for a vehicle. Sometimes a supplier can deliver with a smaller truck or a bulk bag, but that can change the fee.",
          "Consider how far the material must be moved after delivery. Heavy wet sand or gravel may make hand-moving a large amount unrealistic, even if the delivered material price is favorable. Ask about site access and possible loading restrictions before confirming a truck visit."
        ]
      },
      {
        "heading": "Waste, rounding and unused material",
        "paragraphs": [
          "Purchasing only full bags can lead to modest overage when the required volume is not an exact multiple of package size. A bulk seller may also round to a minimum order increment. Record both the geometric need and the purchasable quantity; the difference is not necessarily installation waste.",
          "An arbitrary 10% adjustment can overstate small garden jobs. Calculate appropriate allowances from actual site conditions and the supplier's selling units. When comparing options, apply the same justified quantity requirement to both purchases, or explain any difference."
        ]
      },
      {
        "heading": "Decision checklist",
        "paragraphs": [
          "Choose bags when the job is small or access is restricted, and bulk delivery when the volume and transport logistics justify it. In both cases, confirm product equivalence, actual volume or yield, cost, any fees, whole-bag rounding and expected leftover material.",
          "For the original volume estimate, use the [[cubic yard calculator|/]]. For material-specific questions, consult the [[mulch calculator|/mulch-cubic-yard-calculator/]], [[compost calculator|/compost-cubic-yard-calculator/]] or [[concrete calculator|/concrete-cubic-yard-calculator/]] as appropriate."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is bulk mulch always cheaper than bags?",
        "answer": "No. A low bulk price can be offset by delivery fees or minimum loads, especially for small quantities."
      },
      {
        "question": "How many 2-cubic-foot bags make two cubic yards?",
        "answer": "Two cubic yards equal 54 cubic feet, so 27 bags of 2 cubic feet each match the labeled volume."
      },
      {
        "question": "Can I compare bag prices per pound?",
        "answer": "Only for equivalent products sold by weight where that basis is appropriate. For volume coverage, compare labeled cubic-foot volume or mixed yield."
      },
      {
        "question": "How do I include delivery in a comparison?",
        "answer": "Add delivered fees to the full material purchase, then compare the total cost for equivalent useful volume."
      },
      {
        "question": "Is bulk stone better than bagged stone?",
        "answer": "It depends on project size, access, product suitability, delivery fees and handling requirements. Verify that both options offer equivalent stone."
      },
      {
        "question": "What if I cannot use the entire bulk delivery?",
        "answer": "Include the cost and practicality of any unused material; buying a smaller number of bags may be more efficient for a small area."
      }
    ],
    "sources": [
      [
        "Oregon State compost bag and bulk comparison",
        "https://extension.oregonstate.edu/catalog/em-9308-how-use-compost-gardens-landscapes"
      ],
      [
        "NIST cubic yard definitions",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ]
    ]
  },
  "how-to-measure-irregular-areas": {
    "category": "Field measurements & geometry",
    "readTime": "10 min read",
    "lead": "Many real projects are not perfect rectangles. A curving mulch bed, trapezoidal walkway or sloped excavated area needs more thoughtful measurements than a single length multiplied by width. This guide explains how to divide the footprint, handle openings and preserve the correct depth.",
    "sections": [
      {
        "heading": "Why the bounding rectangle can overestimate yardage",
        "paragraphs": [
          "Measuring the longest length and widest width of an irregular bed gives the area of a rectangle that may include empty corners or hardscape. If those portions will not receive material, the bounding rectangle overstates the volume. Conversely, a winding shape with several widened sections can be underestimated if you measure only a narrow middle portion.",
          "Sketch the actual outline and divide it into shapes that can be measured reliably. Keep all measurements in a consistent unit and label which pieces overlap or are excluded. Calculate each section's surface area first, then apply the correct material depth."
        ]
      },
      {
        "heading": "Method 1: rectangles and right triangles",
        "paragraphs": [
          "Divide an L-shaped area into two non-overlapping rectangles. For example, a 12 × 8-foot rectangle has 96 square feet, and an adjoining right triangle with base 6 feet and perpendicular height 4 feet adds 12 square feet. The combined 108 square feet at 3 inches deep needs 108 × 3 ÷ 324 = <strong>exactly 1 cubic yard</strong> of geometric volume.",
          "A triangle's area is one-half base × perpendicular height; the height must be perpendicular to its base, not simply the length of a sloped edge. Draw the boundary between sections clearly so the same space is not counted twice."
        ]
      },
      {
        "heading": "Method 2: trapezoids and tapered paths",
        "paragraphs": [
          "A trapezoid has two parallel sides. Its area equals one-half the sum of the parallel side lengths multiplied by the perpendicular distance between them. For a walkway with parallel widths of 4 and 7 feet over a 30-foot perpendicular run, the area is (4 + 7) ÷ 2 × 30 = 165 square feet.",
          "If the new gravel depth is uniformly 3 inches, the geometric volume is 165 × 3 ÷ 324 ≈ 1.53 cubic yards. This shortcut depends on the actual shape being a trapezoid with the stated parallel sides. It should not be used to model an arbitrary curved border."
        ]
      },
      {
        "heading": "Method 3: circles, semicircles and tree rings",
        "paragraphs": [
          "For a circle, area = π × radius². A semicircle has half that area. Measure the diameter across the circle and divide it by two for the radius. A ten-foot-diameter circle has radius 5 feet and an area of approximately 78.54 square feet.",
          "A ring-shaped bed has an unfilled center, so subtract the area of the inner circle: π × (outer radius² − inner radius²). If the outer radius is 5 feet and the inner radius is 1 foot, the covered area is approximately 75.40 square feet. At 2 inches of mulch the volume is about 0.47 cubic yard.",
          "Exclude boulders, planters and paved islands when their footprint materially reduces the area being filled."
        ]
      },
      {
        "heading": "Method 4: measured sections for curved beds",
        "paragraphs": [
          "For a gently curved long bed, divide it into short measured strips and approximate each strip as a rectangle or trapezoid. Take widths at regular intervals so the estimate reflects where the bed widens or narrows. Adding more measured cross sections generally improves an approximation of an irregular outline.",
          "Do not use one maximum width across the entire bed unless the boundary genuinely remains that wide. If an area is particularly complex or high-value, a scaled plan, survey or suitable area-measurement software may give a more reliable footprint than rough hand measurements."
        ]
      },
      {
        "heading": "Changing depths: area alone is not enough",
        "paragraphs": [
          "A uniformly deep landscape layer can be calculated from total area × depth. For an area where depth changes, divide the site into zones and calculate volume per zone. If a linear taper really goes from zero inches at one end to 6 inches at the other across a rectangular footprint, average depth of 3 inches may represent the volume for that idealized shape.",
          "That does not mean the average of two random spot depths is reliable for hilly or excavated terrain. Irregular grades, berms and depressions may require measured elevations or cross sections. Use the [[excavation calculator|/excavation-cubic-yard-calculator/]] for simple pits and the [[fill dirt calculator|/fill-dirt-cubic-yard-calculator/]] for backfill considerations."
        ]
      },
      {
        "heading": "Example irregular-area takeoff table",
        "paragraphs": [
          "Summing sections is easier to audit when the calculations are written separately. The example below represents three independent non-overlapping garden shapes with the same depth."
        ],
        "table": {
          "caption": "Illustrative 3-inch mulch takeoff from separate shapes",
          "heads": [
            "Section",
            "Measured area",
            "Cubic yards at 3 in"
          ],
          "rows": [
            [
              "Rectangle",
              "96 sq ft",
              "0.89 yd³"
            ],
            [
              "Triangle",
              "12 sq ft",
              "0.11 yd³"
            ],
            [
              "Semicircle (r = 4 ft)",
              "25.13 sq ft",
              "0.23 yd³"
            ],
            [
              "Combined",
              "133.13 sq ft",
              "1.23 yd³"
            ]
          ]
        }
      },
      {
        "heading": "Check your measured area before ordering",
        "paragraphs": [
          "Make sure no sections overlap and that holes are subtracted. Measure horizontal plan area where the formula assumes it; a tape laid along a steep slope may measure a different distance. Keep dimensions, units and depth for every section. Calculate each section using unrounded measurements and round only at the final volume.",
          "Material-specific behavior still matters after the geometric takeoff. Gravel compaction, soil settlement and concrete form variations can affect quantities purchased, even when the plan area is correct. For a standard check, use the [[main cubic yard calculator|/]] and enter the measured section dimensions."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate an L-shaped area's cubic yards?",
        "answer": "Divide the shape into non-overlapping rectangles, calculate each area, multiply each by its depth and add the cubic-yard volumes."
      },
      {
        "question": "How do I estimate a curved garden bed?",
        "answer": "Split it into smaller measurable strips or shapes, determine their areas and sum them. Use more cross sections where the width changes."
      },
      {
        "question": "Should I subtract a tree trunk opening?",
        "answer": "Subtract meaningful regions that will not receive material, such as a mulch-free inner circle around a tree."
      },
      {
        "question": "Can I average depths for a sloped area?",
        "answer": "Only when the geometry and measurement pattern support it, such as a true linear taper. Complex grades need more elevation measurements."
      },
      {
        "question": "Why does the calculation overestimate my curved bed?",
        "answer": "A bounding rectangle can include corners outside the bed. Measure the actual shape instead of the largest enclosing rectangle."
      },
      {
        "question": "Is irregular area the same as irregular volume?",
        "answer": "Not always. A complex boundary affects area; changing fill depth affects volume separately. Both must be measured."
      }
    ],
    "sources": [
      [
        "NIST exact linear and cubic units",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ],
      [
        "FHWA earthwork design",
        "https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design"
      ]
    ]
  },
  "cubic-yard-vs-square-yard": {
    "category": "Length, area & volume",
    "readTime": "8 min read",
    "lead": "The words yard, square yard and cubic yard describe different dimensions, even though they share a name. This guide explains how the units relate, why they cannot be substituted directly and which measurements a project estimator needs.",
    "sections": [
      {
        "heading": "Linear yard: a measurement of length",
        "paragraphs": [
          "A linear yard equals three feet or 36 inches in distance. It describes one dimension only. You might measure the length of a roll of fabric, a fence run or the distance along the edge of a garden bed in yards. Knowing that a roll is ten linear yards long does not tell you its width or its bulk volume.",
          "For example, a ten-yard path is 30 feet long, but its surface area cannot be calculated until its width is known. To determine how much gravel fills the path, you must also measure thickness."
        ]
      },
      {
        "heading": "Square yard: a measurement of area",
        "paragraphs": [
          "A square yard (yd²) is the area of a square measuring one yard along both sides. That means it covers 3 × 3 = 9 square feet. Square yards are useful for carpet, turf, paving and other surface coverings sold by area.",
          "A 12-foot by 9-foot rectangular footprint covers 108 square feet. Divide by nine to obtain 12 square yards. This does not give cubic yards because no depth has been specified. A shallow coating and a deep excavation can share the same 12-square-yard footprint while occupying very different volumes."
        ]
      },
      {
        "heading": "Cubic yard: a measurement of volume",
        "paragraphs": [
          "A cubic yard (yd³) is the space inside a cube one yard long, wide and high. It contains 27 cubic feet. Bulk concrete, gravel, mulch and soil quantities are often described this way because the materials occupy three-dimensional space.",
          "A cubic yard is not equivalent to a square yard. It is equal to the space formed by a one-square-yard area filled to a depth of one yard, or three feet. When the depth is less, the cubic-yard volume is proportionally smaller."
        ]
      },
      {
        "heading": "Quick comparison table",
        "paragraphs": [
          "Each unit tells you something different about a project. Use the table to decide what additional measurements are needed before calculating material quantity."
        ],
        "table": {
          "caption": "Yard-based units in construction and landscaping",
          "heads": [
            "Unit",
            "Measures",
            "Exact equivalent",
            "Example use"
          ],
          "rows": [
            [
              "Linear yard (yd)",
              "Length",
              "3 feet",
              "Roll or edge length"
            ],
            [
              "Square yard (yd²)",
              "Area",
              "9 square feet",
              "Turf or paving area"
            ],
            [
              "Cubic yard (yd³)",
              "Volume",
              "27 cubic feet",
              "Bulk soil, mulch, concrete"
            ]
          ]
        }
      },
      {
        "heading": "Convert square yards into cubic yards using depth",
        "paragraphs": [
          "If a footprint is measured in square yards, multiply its area by depth measured in yards to obtain cubic yards. One square yard covered one yard deep is one cubic yard. If the depth is in feet, divide by three to turn it into yards before multiplying.",
          "For example, 10 square yards of garden bed at 6 inches deep has a depth of one-sixth of a yard, so its volume is 10 × 1/6 ≈ 1.67 cubic yards. You can also convert 10 square yards into 90 square feet, then multiply by 6 inches and divide by 324. The result is identical.",
          "Use the [[square feet to cubic yards calculator|/square-feet-to-cubic-yards/]] for area-and-depth conversions."
        ]
      },
      {
        "heading": "Worked project: gravel in a walkway",
        "paragraphs": [
          "Suppose a walkway is 18 feet long and 6 feet wide. The area is 108 square feet or 12 square yards. The design calls for a uniform 3-inch gravel layer, which is one-twelfth of a yard deep. The geometric volume is 12 × 1/12 = <strong>1 cubic yard</strong>.",
          "If the finished depth changes to 6 inches while area stays the same, the volume becomes 2 cubic yards. The unchanged 12 square yards cannot tell you which quantity is correct until depth is specified. The [[gravel cubic yard calculator|/gravel-cubic-yard-calculator/]] provides supplier-oriented considerations."
        ]
      },
      {
        "heading": "Linear yards in rolls versus cubic yard bulk orders",
        "paragraphs": [
          "Some landscaping supplies such as sod or weed-barrier rolls are sold by surface area or length. Bulk mulch, gravel or topsoil is often sold by volume. Comparing the quantities directly can produce mistakes: 10 yards of landscape edging, 10 square yards of fabric and 10 cubic yards of mulch are not comparable amounts.",
          "Read the supplier's exact unit before using a calculator. If a bag is sold by cubic feet, convert that volume to yards with [[the cubic feet converter|/cubic-feet-to-cubic-yards/]]. If it is sold by weight, apply a suitable material density separately."
        ]
      },
      {
        "heading": "Common measurement mistakes",
        "paragraphs": [
          "Do not multiply two dimensions and label the result cubic yards; two lengths produce area, not volume. Do not divide square feet by 27 to obtain cubic yards; area needs depth first. Do not assume 'one yard' in a supplier quote always means the same thing.",
          "Write linear dimensions as ft or yd, areas as ft² or yd², and volumes as ft³ or yd³. A simple unit check often reveals a calculation error before the number reaches a purchase order."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is a cubic yard bigger than a square yard?",
        "answer": "They measure different things—volume and area—so one cannot be called bigger without supplying a depth."
      },
      {
        "question": "How many square feet are in a square yard?",
        "answer": "Exactly nine square feet."
      },
      {
        "question": "How many cubic feet are in one cubic yard?",
        "answer": "Exactly 27 cubic feet."
      },
      {
        "question": "Can square yards convert directly to cubic yards?",
        "answer": "Only with a depth or thickness. Multiply square yards by depth in yards."
      },
      {
        "question": "Is a linear yard the same as three feet?",
        "answer": "Yes. A linear yard is exactly three feet long."
      },
      {
        "question": "Why do landscape suppliers price materials by the yard?",
        "answer": "In bulk material contexts, 'a yard' often means a cubic yard, but you should verify the invoice's actual units."
      }
    ],
    "sources": [
      [
        "NIST exact conversions",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ]
    ]
  },
  "soil-swell-and-compaction": {
    "category": "Earthwork material states",
    "readTime": "11 min read",
    "lead": "A bank cubic yard dug from the ground, a loose cubic yard in a stockpile and a compacted cubic yard in finished fill describe different bulk states. Understanding swell and shrinkage prevents incorrect truckload estimates and unverified backfill orders.",
    "sections": [
      {
        "heading": "Bank, loose and compacted cubic yards",
        "paragraphs": [
          "<strong>Bank cubic yards (BCY)</strong> represent material in its original undisturbed position. <strong>Loose cubic yards (LCY)</strong> measure bulk excavated or stockpiled material after disturbance. <strong>Compacted cubic yards (CCY)</strong> describe a placed volume compacted to a specified condition. These names identify volume state, not three different fixed units.",
          "The [[FHWA earthwork design guide|https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design]] explains that most excavated materials change bulk volume when moved from cut to fill. A single mass of soil can occupy more space in a truck than it did in the ground, then change bulk volume again during placement and compaction.",
          "If a supplier quotes truckloads in loose yards while the project specifies compacted fill, a one-to-one assumption is not justified without material-specific information."
        ]
      },
      {
        "heading": "Swell: why excavated material occupies more space",
        "paragraphs": [
          "Swell describes the increase in bulk volume when a soil or rock mass is broken loose. The process changes the arrangement and void spaces between particles. Moisture, soil structure, rock fragmentation and original density influence the resulting expansion. Swell factors are usually expressed as a ratio or percent relative to bank volume.",
          "An illustrative formula is loose volume = bank volume × (1 + swell percentage ÷ 100). If an earthwork report provides a 20% swell factor for the actual material and the excavation is 15 bank cubic yards, the scenario's loose volume is 15 × 1.2 = 18 loose cubic yards.",
          "That 20% is an arithmetic example, not a default for all soils. A project value may be determined from samples, past work, site documentation or geotechnical methods; use the source stated by the project rather than a generic online table."
        ]
      },
      {
        "heading": "Shrinkage: what happens in compacted fill",
        "paragraphs": [
          "Shrinkage in earthwork refers to the difference between an original in-place volume and the final compacted fill volume, for a given mass of suitable material. The conversion may be expressed relative to bank volume or through dry density, depending on the contract. Clarify the ratio's direction and the reference state.",
          "Suppose a project's documented ratio states that 15 bank cubic yards of suitable soil will produce 13.5 compacted cubic yards under the specified conditions. The compacted-to-bank ratio is 0.90. That ratio should not be used for another site or soil without validation.",
          "Because a project can import soil, discard unsuitable material or lose fines during processing, simple volume ratios are not a complete mass-balance model."
        ]
      },
      {
        "heading": "Density, moisture and pore space",
        "paragraphs": [
          "Soil bulk density is mass divided by bulk volume, including the pore spaces between particles. Compaction reduces pore space and commonly increases dry bulk density. Moisture affects the ease of compaction and total wet weight. The [[USDA NRCS soil compaction note|https://www.nrcs.usda.gov/state-offices/illinois/soil-tech-note-16a-compacted-zone-in-soil]] describes the relation between bulk density and pore space.",
          "Engineering specifications may define a target dry density or laboratory reference such as a Proctor compaction test. A percentage of maximum dry density does not directly equal a percentage reduction in cubic yards, and the two should not be substituted.",
          "Successful fill design also considers material suitability, layer thickness, moisture conditioning and field verification. A volume calculator cannot certify any of these conditions."
        ]
      },
      {
        "heading": "Example earthwork quantity ledger",
        "paragraphs": [
          "The table represents a single hypothetical quantity using two separately documented conversion assumptions. The factors are examples only and are intentionally shown as inputs rather than inferred material properties.",
          "A 15-BCY cut may yield 18 LCY under an assumed 1.20 loose-to-bank factor, and 13.5 CCY under an assumed 0.90 compacted-to-bank factor. These are different observations of the same originally measured quantity, not a claim that 18 loose yards can be purchased to make 13.5 compacted yards on every site."
        ],
        "table": {
          "caption": "Hypothetical earthwork states from 15 bank cubic yards",
          "heads": [
            "State",
            "Illustrative factor",
            "Calculated volume"
          ],
          "rows": [
            [
              "Undisturbed bank",
              "Reference 1.00",
              "15.0 BCY"
            ],
            [
              "Excavated loose",
              "1.20 × bank",
              "18.0 LCY"
            ],
            [
              "Placed compacted",
              "0.90 × bank",
              "13.5 CCY"
            ]
          ]
        }
      },
      {
        "heading": "Why a generic 10%, 20% or 30% factor is risky",
        "paragraphs": [
          "Materials respond differently to excavation and compaction. A granular soil, highly organic soil and weathered rock may have different void structures. A number commonly used for another soil, haul condition or machinery setup could understate or overstate purchase quantities. A simple calculator's 'extra allowance' input is not equivalent to a verified swell or shrinkage factor.",
          "Ask whether the project quantity is measured in bank, loose or compacted state and where the factor originated. If the specified finished fill is 20 CCY, determine the actual project conversion to delivered loose yards before scheduling material, rather than adding a guessed fixed percentage."
        ]
      },
      {
        "heading": "Cut-and-fill balancing versus material importing",
        "paragraphs": [
          "Earthwork planning often attempts to use suitable material excavated from a cut area to create the required fill elsewhere. The original bank cut may not provide enough compacted fill after unsuitable material is removed, and a balanced bank volume does not guarantee a balanced finished fill volume.",
          "The [[FHWA earthwork design guidance|https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design]] describes borrow and waste considerations. Hauling routes, material suitability, moisture and compaction requirements can influence how much material must be imported or disposed of.",
          "For small project geometry, start with the [[excavation calculator|/excavation-cubic-yard-calculator/]] and [[fill dirt calculator|/fill-dirt-cubic-yard-calculator/]]. Larger projects may require surveys and engineered earthwork models."
        ]
      },
      {
        "heading": "What a homeowner should confirm before ordering",
        "paragraphs": [
          "Identify whether the project needs landscaping topsoil, general nonstructural fill or engineered structural fill. Establish the required finished elevation and depth using measured grades. Confirm which soil product is specified and whether the supplier quotes loose yards or weight. Do not use topsoil for structural fill merely because it is readily available.",
          "When backfilling trenches or building pads, project safety, permits and material specifications are separate from the volume arithmetic. Obtain qualified advice for structural or significant earthwork and do not assume a calculator can determine compaction acceptance."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does BCY mean?",
        "answer": "BCY means bank cubic yards, the volume of undisturbed in-place earth before excavation."
      },
      {
        "question": "What does LCY mean?",
        "answer": "LCY means loose cubic yards, the bulk volume after material is dug or stockpiled."
      },
      {
        "question": "What does CCY mean?",
        "answer": "CCY means compacted cubic yards, the volume of placed fill compacted to the specified condition."
      },
      {
        "question": "Is a 20% swell factor always correct?",
        "answer": "No. Swell varies by material and field conditions. Use a project-supported factor."
      },
      {
        "question": "Does 95% Proctor compaction mean 5% less volume?",
        "answer": "No. It refers to a specified percentage of a laboratory reference dry density, not a direct percent volume change."
      },
      {
        "question": "Can I calculate imported loose fill from finished cubic yards alone?",
        "answer": "Only with applicable material-state conversion factors or density data. The relationship cannot be determined universally from the finished volume."
      },
      {
        "question": "Are bulk density and particle density identical?",
        "answer": "No. Bulk density includes pore spaces in the material volume; particle density describes the solid phase."
      }
    ],
    "sources": [
      [
        "FHWA Earthwork Design",
        "https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design"
      ],
      [
        "USDA NRCS Compacted Zone",
        "https://www.nrcs.usda.gov/state-offices/illinois/soil-tech-note-16a-compacted-zone-in-soil"
      ]
    ]
  },
  "material-delivery-planning-guide": {
    "category": "Delivery planning & supplier quotes",
    "readTime": "10 min read",
    "lead": "A good cubic-yard estimate is only the beginning of a successful material delivery. This guide helps homeowners and project managers turn geometry into a usable order by confirming product specifications, weight limits, access, unloading location and billing units.",
    "sections": [
      {
        "heading": "Define the material and the actual purchase quantity",
        "paragraphs": [
          "Start by deciding what the project physically requires. Measure the footprint and depth, identify the product that meets the project needs, and calculate the geometric cubic yards. A gravel driveway base, compost amendment and concrete slab should not be treated as equivalent material needs simply because all are described by cubic yards.",
          "Write down the selected product, size or grade, requested delivery state and amount. For example, a bed may need 4.5 loose cubic yards of screened topsoil, while a roadway specification may describe a compacted final volume requiring a different delivered quantity.",
          "If no supplier or product has been chosen, keep the calculation labeled as geometric volume instead of claiming it is the exact amount to order."
        ]
      },
      {
        "heading": "Ask whether the quote uses yards, tons or bags",
        "paragraphs": [
          "Construction suppliers can bill by loose cubic yard, compacted cubic yard, US short ton, whole bag or truckload. The billing unit affects how you calculate quantity and compare price. Converting cubic yards into tons requires a material-specific bulk density that matches the volume state.",
          "Bagged materials use labeled cubic feet or mixed yield, not necessarily bag weight. A concrete bag's dry pounds do not directly tell you how many cubic yards of mixed concrete it produces. Compare all quote options on a compatible volume or weight basis before deciding.",
          "The [[cubic yards to tons converter|/cubic-yards-to-tons/]], [[cubic yards to bags calculator|/cubic-yards-to-bags/]] and [[cost calculator|/cubic-yard-cost-calculator/]] handle these different stages of a purchase."
        ]
      },
      {
        "heading": "Confirm delivery limits and trucking logistics",
        "paragraphs": [
          "A truck can reach its legal payload weight before filling its bed, particularly with damp soil or dense aggregate. The practical load depends on the truck's permitted payload and the material's loose bulk density. It may also be limited by bed geometry, the loading method and local road rules.",
          "Ask how many trips are included in a quote and whether the seller's stated yards refer to loose delivery volume. Do not assume a nominal '10-yard truck' can legally carry ten cubic yards of every product. The [[dump truck load calculator|/dump-truck-load-calculator/]] illustrates the two competing limits."
        ]
      },
      {
        "heading": "Prepare the site for safe unloading",
        "paragraphs": [
          "Before the truck arrives, identify an acceptable unloading spot with sufficient width, turning space and a stable surface. Check gates, overhead branches, utility cables, steep driveways and weak paved surfaces. Do not assume a fully loaded truck can safely cross a residential lawn or a narrow private driveway.",
          "Determine whether the load can be dumped in one pile, must be spread by the truck, or will need hand movement after arrival. Inform the supplier of any restrictions in advance. If the site cannot accommodate a large vehicle, request a smaller truck, staged deliveries or a bagged alternative.",
          "Truck placement, traffic management and unloading procedures should follow the hauler's safety requirements. A material calculator does not assess road or site structural capacity."
        ]
      },
      {
        "heading": "Use a delivered cost, not an incomplete unit price",
        "paragraphs": [
          "Total price may include the material rate, minimum order, distance or fuel surcharge, partial-load fee, tax, disposal of packaging and unloading or spreading services. Compare quotes with these components included. A lower price per cubic yard can lead to a higher final cost when delivery is expensive.",
          "For example, a hypothetical 6-yard material order at $52 per cubic yard has a $312 material subtotal. With a $90 delivery fee, the subtotal becomes $402 before taxes or special services. Another supplier charging $56 per yard with a $35 delivery fee would total $371 before tax. Those numbers are illustrative and do not represent a local market quote."
        ]
      },
      {
        "heading": "Example: delivery planning for a compacted gravel project",
        "paragraphs": [
          "Suppose a measured project specifies 8 cubic yards of finished gravel base. That is not automatically 8 loose delivered cubic yards. First ask the aggregate supplier or designer for the project-specific loose-to-compacted relationship. A factor should not be invented because a common website suggests adding ten percent.",
          "Once the correct delivered loose quantity is known, use the supplied loose bulk density and truck payload to estimate the number of possible loads. If the material is invoiced by ton, convert with the matching density. Keep the design requirement, order quantity, and transport quantity as three labeled numbers."
        ]
      },
      {
        "heading": "Delivery checklist you can share with a supplier",
        "paragraphs": [
          "A short written checklist avoids misunderstandings. Record the product and its intended use, quantity, supplier billing unit, desired delivery state, total delivered price, number of loads, unloading location, access restrictions and the exact contact for site coordination.",
          "Also confirm whether material will arrive damp or dry, whether multiple batches may differ visually, and where any unused material can be stored. For ready-mix concrete, schedule placement capability and any special short-load or pumping arrangements with the supplier.",
          "Having the geometry and the order documented helps you spot discrepancies without needing a complex construction spreadsheet."
        ],
        "bullets": [
          "Product, specification or size grade confirmed",
          "Geometric quantity and purchase quantity clearly distinguished",
          "Invoice unit: cubic yards, US short tons, bags or truck trips",
          "Bulk density supplied when a weight conversion is needed",
          "Truck access, unloading spot and surface restrictions reviewed",
          "All-in delivered charge, taxes and minimums confirmed",
          "Date, scheduling contact and handling arrangements recorded"
        ]
      },
      {
        "heading": "Common delivery mistakes to avoid",
        "paragraphs": [
          "Do not treat all 'yards' in invoices as the same material state. Do not order by truck capacity alone without confirming actual payload. Avoid comparing bags and bulk by pounds when coverage depends on volume. Do not request a dump location before checking vehicle access and unloading safety.",
          "Use a delivery checklist for each materially different product, even on the same project. The [[cubic yard calculator|/]] handles the initial geometry, but a correct calculation does not replace real supplier coordination."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What information should I give a material supplier?",
        "answer": "Provide product, grade or size, estimated purchase quantity, billing unit, delivery address and access restrictions, and request a full delivered quote."
      },
      {
        "question": "Should I order by tons or cubic yards?",
        "answer": "Use the supplier's quoted unit and your project specification. For conversion between them, obtain the correct bulk density."
      },
      {
        "question": "How do I know whether the truck can reach my driveway?",
        "answer": "Ask the hauler to review width, turning room, overhead clearance, ground stability and loading constraints before scheduling."
      },
      {
        "question": "Is the cheapest price per yard always best?",
        "answer": "No. Delivery charges, minimums, product differences and handling costs can change the total."
      },
      {
        "question": "Can one truck carry both gravel and mulch by the same yardage?",
        "answer": "Different material densities can change allowable payload, even when bed volume stays the same."
      },
      {
        "question": "What should I confirm before a concrete delivery?",
        "answer": "Check volume, mix requirements, access, minimum fees, placement readiness, unloading or pumping arrangements and scheduling with the supplier."
      }
    ],
    "sources": [
      [
        "FHWA Earthwork Design: Haul",
        "https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design"
      ],
      [
        "Oregon State Extension bulk delivery considerations",
        "https://extension.oregonstate.edu/catalog/em-9308-how-use-compost-gardens-landscapes"
      ]
    ]
  }
};
