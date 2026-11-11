import type {ExpansionArticle} from "./expansion-articles";
export const articlesA:Record<string,ExpansionArticle>={
  "cubic-yards-to-bags": {
    "category": "Unit conversion & packaging",
    "readTime": "8 min read",
    "lead": "Convert a bulk cubic-yard requirement into a purchasable number of bags using the package's actual volume or mixed yield. This is especially useful when comparing mulch, compost, potting mix and concrete, but the correct label to use differs by product.",
    "sections": [
      {
        "heading": "The right way to convert cubic yards into bags",
        "paragraphs": [
          "First, calculate the finished volume in cubic yards. Multiply by 27 to obtain the same volume in cubic feet. Next, find the package's stated cubic-foot volume or its expected mixed yield. Divide the total cubic feet by that value, then round the answer upward to a whole number of bags. The formula is <strong>whole bags = ceiling(cubic yards × 27 ÷ cubic feet per bag)</strong>.",
          "One cubic yard is exactly 27 cubic feet. Therefore, a 2-cubic-foot mulch bag covers 1/13.5 of a cubic yard by labeled volume. A 3-cubic-foot bag covers 1/9 of a cubic yard. These fractions are not weight conversions: a heavy bag of sand and a lightweight bag of bark may occupy the same volume while weighing very different amounts.",
          "Use the calculator above to change the bag size, volume and allowance. The output is a purchase estimate from a packaging label, not a statement that bags of every material have identical yield after spreading, mixing or compaction."
        ]
      },
      {
        "heading": "Bag-count conversion table for 1, 2 and 5 cubic yards",
        "paragraphs": [
          "Bulk yardage is usually quoted in fractional yards, but retailers normally sell complete bags. That is why a count such as 13.5 becomes 14 purchasable bags. The table converts labeled package volume only; it does not include waste or material settlement.",
          "When comparing bags from different manufacturers, check whether the volume is net cubic feet or a yield produced after adding water. Do not combine a dry bag's weight with another product's volumetric yield."
        ],
        "table": {
          "caption": "Minimum whole bags at labeled volumes",
          "heads": [
            "Bulk volume",
            "1 ft³ bags",
            "2 ft³ bags",
            "3 ft³ bags"
          ],
          "rows": [
            [
              "1 yd³",
              "27",
              "14",
              "9"
            ],
            [
              "2 yd³",
              "54",
              "27",
              "18"
            ],
            [
              "2.5 yd³",
              "68",
              "34",
              "23"
            ],
            [
              "5 yd³",
              "135",
              "68",
              "45"
            ]
          ]
        }
      },
      {
        "heading": "Example: buying mulch for a garden bed",
        "paragraphs": [
          "A 16-foot by 12-foot bed receiving a 3-inch layer needs 16 × 12 × 3 ÷ 324 = approximately 1.78 cubic yards, equal to 48 cubic feet. If your chosen mulch comes in 2-cubic-foot bags, the package-equivalent count is 48 ÷ 2 = 24 bags. With 3-cubic-foot bags, the same job needs 16 bags.",
          "Before buying all 24 bags, confirm the desired final mulch depth and any mulch already in place. A bed that needs only a 1-inch top-up requires one-third as much new volume as a fresh 3-inch layer. For those planting decisions, use the [[mulch cubic yard calculator|/mulch-cubic-yard-calculator/]]."
        ]
      },
      {
        "heading": "Concrete bags: why bag weight is not enough",
        "paragraphs": [
          "Concrete mixes are commonly sold in 40-, 60- and 80-pound bags, but the package's dry weight is not its finished mixed volume. Use the mixed yield in cubic feet listed by the exact manufacturer and product. For instance, if a product's published yield is approximately 0.60 cubic foot per 80-pound bag, one cubic yard would require 27 ÷ 0.60 = 45 bags before waste or job-specific allowance.",
          "A specialty rapid-setting, lightweight or high-performance mixture may produce a different volume than an ordinary concrete mix of the same bag weight. Check the [[QUIKRETE volume calculator|https://www.quikrete.com/calculator/main.asp]] or the technical data sheet of your chosen product. For slabs and footings, measure the physical forms using the [[concrete cubic yard calculator|/concrete-cubic-yard-calculator/]] before applying bag yield."
        ]
      },
      {
        "heading": "What to do with fractional bags and allowances",
        "paragraphs": [
          "Always round a partial bag upward only after calculating the complete project's volume. Rounding each small section independently can add unnecessary bags. If multiple areas use the same material and depth, sum their cubic-foot quantities before applying the package yield and whole-bag ceiling.",
          "An additional percentage may be appropriate for some material losses, but there is no fixed factor that safely replaces product instructions or project conditions. Keep the geometric volume visible, then calculate an adjusted purchase volume if the project warrants it. Avoid adding a generic 10% because it is common on unrelated construction blogs."
        ]
      },
      {
        "heading": "When to choose bagged material versus bulk delivery",
        "paragraphs": [
          "Bagged material can be useful when the total volume is modest, the access route is narrow or several small beds are far apart. Bulk material may be easier to purchase for larger contiguous jobs, but delivery minimums and transport costs can outweigh the lower per-yard price.",
          "Calculate the total equivalent volume first and then compare entire purchases, including the number of whole bags. The [[bulk versus bagged materials guide|/bulk-vs-bagged-materials/]] explains the cost break-even point. If you only need a geometric measurement, return to the [[cubic yard calculator|/]]."
        ]
      },
      {
        "heading": "Packaging and conversion mistakes to avoid",
        "paragraphs": [
          "Do not count a bag's advertised pounds as cubic feet. Never round fractional cubic yards down because the result looks small. Verify whether the package contains ready-to-spread material or a product that expands, mixes or compacts during use. Check whether the supplier prices volume as loose cubic yards or a finished yield.",
          "Review the packaging before purchasing: two products may be sold in similarly sized bags but have different contents or yields. The calculator assumes the entered volume per bag is trustworthy and that all bags contain the same amount."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many 2-cubic-foot bags are in one cubic yard?",
        "answer": "One cubic yard equals 27 cubic feet, so 13.5 two-cubic-foot bags have the same labeled volume. You generally need 14 whole bags to purchase at least one cubic yard."
      },
      {
        "question": "How many 3-cubic-foot bags make one yard?",
        "answer": "Exactly 9 bags of 3 cubic feet each equal 27 cubic feet, or one cubic yard, by labeled volume."
      },
      {
        "question": "How many 80-pound concrete bags make a cubic yard?",
        "answer": "For a mix with a published mixed yield of 0.60 cubic foot per 80-pound bag, approximately 45 bags produce one cubic yard; check the exact product's technical data sheet."
      },
      {
        "question": "Does bag weight affect the number of bags?",
        "answer": "Not directly. Use the package's cubic-foot volume or mixed yield. Weight and volume are different measurements."
      },
      {
        "question": "Do I round up separately for each garden bed?",
        "answer": "Add the full volumes of areas using the same product before rounding to whole bags. This avoids unnecessary rounding at every section."
      },
      {
        "question": "Should I add more bags for compaction?",
        "answer": "Only when material-specific information supports an adjustment. A general bag-count conversion does not calculate compaction or settlement."
      }
    ],
    "sources": [
      [
        "QUIKRETE concrete calculator",
        "https://www.quikrete.com/calculator/main.asp"
      ],
      [
        "NIST volume conversion standards",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ]
    ]
  },
  "cubic-yard-cost-calculator": {
    "category": "Budgeting & quantity estimating",
    "readTime": "9 min read",
    "lead": "Compare cubic-yard material quotes without confusing the unit price with the final delivered cost. This guide separates material volume, supplier minimums, extra allowances, delivery charges and taxes so you can understand where a quote comes from.",
    "sections": [
      {
        "heading": "What goes into a cubic-yard material cost estimate?",
        "paragraphs": [
          "The simplest material-cost calculation is <strong>order volume in cubic yards × price per cubic yard</strong>. A project with 5 cubic yards at a quoted $60 per yard has a $300 material subtotal. That is not yet an all-in total: delivery, taxes, small-load charges, spreading and labor may appear as separate line items.",
          "The calculator above allows you to enter order volume, a hypothetical or supplier-provided rate, delivery charges and a tax rate. It shows the separate cost components before adding them. The tax input in this illustrative tool applies to the material subtotal only; real taxable amounts vary by location and invoice structure.",
          "Always specify whether you are pricing measured geometric volume or the amount you will actually purchase. A supplier may round to specific increments, and some products are not sold in precise fractions of a cubic yard."
        ]
      },
      {
        "heading": "Sample total cost calculations with delivery",
        "paragraphs": [
          "The following examples are not local market prices. They illustrate why two quotes with the same material rate can produce different totals once delivery is included. Confirm actual fees and taxes with the company you are considering.",
          "For an example order of 4 cubic yards at $55 per cubic yard, a $75 delivery fee and 6% tax on material only, the subtotal is $220, tax is $13.20, and total is $308.20. A second quote at $50 per yard but with a $115 delivery charge would total $327 on the same tax assumption."
        ],
        "table": {
          "caption": "Illustrative invoice comparison for 4 yd³",
          "heads": [
            "Cost component",
            "Supplier A",
            "Supplier B"
          ],
          "rows": [
            [
              "Price per yard",
              "$55",
              "$50"
            ],
            [
              "Material subtotal",
              "$220",
              "$200"
            ],
            [
              "Delivery",
              "$75",
              "$115"
            ],
            [
              "Tax on material at 6%",
              "$13.20",
              "$12.00"
            ],
            [
              "Illustrative total",
              "$308.20",
              "$327.00"
            ]
          ]
        }
      },
      {
        "heading": "Find the real quantity before selecting a rate",
        "paragraphs": [
          "Price comparisons become misleading when a quote uses the wrong volume. Measure the actual project footprint and depth first. For a uniformly filled rectangular area, cubic yards = length in feet × width in feet × depth in inches ÷ 324. If you know only square footage, add the depth before converting.",
          "Some project quotes refer to loose delivery cubic yards, others to compacted quantities or the tonnage of a specific material. These are not interchangeable. A driveway stone supplier quoting in short tons requires a material-specific density conversion before comparison with a price per cubic yard.",
          "Use the [[main cubic yard calculator|/]] for volume and the [[cubic yards to tons calculator|/cubic-yards-to-tons/]] only when you have an appropriate density."
        ]
      },
      {
        "heading": "Delivery fees, minimums and short-load charges",
        "paragraphs": [
          "A bulk load's delivered cost may include a base transportation fee, mileage, a minimum order, waiting or unloading fees, and a charge for a partial truck. The fee structure can change which supplier is cheaper at a particular volume. An apparently inexpensive $40-per-yard product may not be economical for a one-yard job if delivery is expensive.",
          "For a small project, ask for a delivered total and a pickup alternative. For a larger project, ask whether the supplier can split loads and what quantity its trucks can safely carry. The [[dump truck load calculator|/dump-truck-load-calculator/]] helps explore truck-volume and payload constraints with hypothetical capacities."
        ]
      },
      {
        "heading": "What if the supplier charges per ton or bag?",
        "paragraphs": [
          "First bring both offers to the same comparable unit. A tonnage quote can be converted to a volume estimate only when the material's bulk density is known. Likewise, whole bag counts are based on cubic-foot volume or a stated mixed yield, not package weight alone.",
          "If two providers sell different grades or blends of material, the cheapest equivalent volume is not automatically the best value. Stone gradation, topsoil suitability and compost quality should be compared alongside pricing. See the [[cubic yards to bags tool|/cubic-yards-to-bags/]] or [[bulk versus bagged guide|/bulk-vs-bagged-materials/]]."
        ]
      },
      {
        "heading": "Budget allowances without overstating material",
        "paragraphs": [
          "An extra volume allowance can be useful for some jobs, but it should be chosen because of an identified factor such as uneven ground, known losses or supplier-defined yield. Adding arbitrary overage can be costly, and for compacted aggregates or fill soils a simple percentage is not necessarily an engineering-valid conversion.",
          "The cost calculator can price the amount you intend to order; it does not decide the right overage. Separate the measured geometric volume from the final order quantity and record why any adjustment was made. A simple project note with the dimensions and the supplier's assumptions can prevent confusion."
        ]
      },
      {
        "heading": "Quote checklist for homeowners and contractors",
        "paragraphs": [
          "Before approving a quote, write down the product name, exact quantity, unit, grade or specification, price, tax assumptions and delivery conditions. Confirm whether a load can be placed near the work area and whether access restrictions could require additional handling.",
          "Keep labor and equipment rental separate from the cost of the delivered material. A concrete slab's installed price cannot be calculated from raw concrete cubic-yard cost alone, because forms, reinforcement, base preparation, placement and finishing can be substantial parts of the work."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate the cost of 3 cubic yards?",
        "answer": "Multiply 3 by the actual price per cubic yard, then add any delivery, taxes and applicable charges. For example, 3 × $60 = $180 before fees."
      },
      {
        "question": "Does the calculator use live local prices?",
        "answer": "No. It uses the price you enter. Example rates in the article are hypothetical and must not be treated as current supplier quotes."
      },
      {
        "question": "Are delivery fees included automatically?",
        "answer": "Only when you enter a delivery charge. Real quotes may include mileage, partial-load fees or unloading costs."
      },
      {
        "question": "What if the supplier sells gravel by the ton?",
        "answer": "Use the supplier's material-specific bulk density to estimate the equivalent cubic-yard quantity or convert your volume into short tons before comparing rates."
      },
      {
        "question": "Should I add 10% before estimating cost?",
        "answer": "Only if a supported project allowance warrants it. A flat 10% is not appropriate for all materials or compaction states."
      },
      {
        "question": "Does cost per cubic yard include installation?",
        "answer": "Usually not unless a quote specifically says so. Confirm which services are included and record labor and site-preparation charges separately."
      }
    ],
    "sources": [
      [
        "NIST unit conversion factors",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ],
      [
        "FHWA earthwork hauling background",
        "https://highways.dot.gov/federal-lands/pddm/dpg/earthwork-design"
      ]
    ]
  },
  "cubic-inches-to-cubic-yards": {
    "category": "Exact measurement conversion",
    "readTime": "7 min read",
    "lead": "Cubic inches are useful for small boxes, molds and precise component dimensions, while cubic yards appear in bulk material estimates. The units can be converted exactly without using material density or an approximate construction factor.",
    "sections": [
      {
        "heading": "Exact conversion factor: 46,656 cubic inches per cubic yard",
        "paragraphs": [
          "An international yard is exactly 36 inches long. A cubic yard is therefore a three-dimensional space 36 inches long, 36 inches wide and 36 inches high. Multiply 36 × 36 × 36 to get <strong>46,656 cubic inches</strong> in one cubic yard. This conversion is exact under the international yard definition.",
          "To convert cubic inches to cubic yards, divide the cubic-inch volume by 46,656. To reverse the conversion, multiply the cubic-yard value by 46,656. Unlike weight conversion, the same arithmetic works for any material because both units describe volume."
        ]
      },
      {
        "heading": "Cubic inches to cubic yards reference table",
        "paragraphs": [
          "These examples demonstrate how small volumes become fractions of a cubic yard. The numbers are rounded for display, with full precision retained in the conversion tool."
        ],
        "table": {
          "caption": "Exact unit relationships, rounded for display",
          "heads": [
            "Cubic inches",
            "Cubic yards"
          ],
          "rows": [
            [
              "1 in³",
              "0.00002143 yd³"
            ],
            [
              "1,728 in³",
              "0.037037 yd³"
            ],
            [
              "4,665.6 in³",
              "0.1 yd³"
            ],
            [
              "11,664 in³",
              "0.25 yd³"
            ],
            [
              "23,328 in³",
              "0.5 yd³"
            ],
            [
              "46,656 in³",
              "1 yd³"
            ],
            [
              "93,312 in³",
              "2 yd³"
            ]
          ]
        }
      },
      {
        "heading": "Worked example using a box measured in inches",
        "paragraphs": [
          "Suppose a rectangular mold is 24 inches long, 18 inches wide and 12 inches deep. First find its cubic-inch volume: 24 × 18 × 12 = 5,184 cubic inches. Convert to cubic yards: 5,184 ÷ 46,656 ≈ 0.1111 cubic yard.",
          "Another way to verify the result is to convert the dimensions to feet: 2 ft × 1.5 ft × 1 ft = 3 cubic feet. Since one cubic yard contains 27 cubic feet, 3 ÷ 27 ≈ 0.1111 cubic yard. Both methods agree."
        ]
      },
      {
        "heading": "When cubic inches are the better starting unit",
        "paragraphs": [
          "Inches are practical for small containers, cavities, repair patches or components measured with a tape. A small retaining-wall void or molded box might have dimensions specified in inches, even when a supplier quotes the filling material by cubic yard.",
          "For wide landscape areas, calculating cubic inches directly becomes cumbersome. In that situation it is usually easier to use feet for length and width, inches for layer depth, and divide by 324. If your inputs are already in feet, the [[cubic feet to cubic yards converter|/cubic-feet-to-cubic-yards/]] gives the same unit relationship."
        ]
      },
      {
        "heading": "Cubic inches, square inches and linear inches are different",
        "paragraphs": [
          "A linear inch measures distance; a square inch measures surface area; and a cubic inch measures volume. A panel that is 200 square inches has no defined cubic-inch volume until its thickness is known. Multiply its area by its thickness in inches before converting.",
          "For example, 200 square inches with a 2-inch thickness creates 400 cubic inches, not 200 cubic yards. Keep units written with each intermediate result. The same dimensional reasoning explains why square feet cannot become cubic yards without depth."
        ]
      },
      {
        "heading": "Precision, rounding and practical material orders",
        "paragraphs": [
          "Many small volumes produce tiny decimal cubic-yard values. Avoid rounding to two decimal places too early: 0.004 yard displayed as 0.00 could misleadingly suggest no material at all. The tool shows additional decimal places for small quantities.",
          "When purchasing material, round only after checking product selling units, package yields and any job-specific allowance. For example, a small concrete repair may be better compared with bagged-mix yield than with a truck-sized cubic-yard delivery. Read the [[cubic yards to bags guide|/cubic-yards-to-bags/]] for that distinction."
        ]
      },
      {
        "heading": "Check your conversion before committing to an order",
        "paragraphs": [
          "Verify that all three dimensions were actually measured in inches, not a mixture of inches and feet. Multiply three linear dimensions to obtain volume; dividing a linear measurement alone by 46,656 does not give a valid cubic-yard calculation.",
          "The exact relationship follows the international yard length definition in the [[NIST Guide to SI|https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors]]. The calculator does not estimate the suitability, weight or yield of any particular material."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many cubic inches are in a cubic yard?",
        "answer": "Exactly 46,656 cubic inches."
      },
      {
        "question": "How do I convert 1,728 cubic inches into yards?",
        "answer": "1,728 ÷ 46,656 = 1/27 cubic yard, or about 0.037037 cubic yard. This is exactly one cubic foot."
      },
      {
        "question": "Is the conversion different for concrete?",
        "answer": "No. The cubic-inch-to-cubic-yard conversion is the same for concrete, soil, water or empty space."
      },
      {
        "question": "Why is my result a tiny decimal?",
        "answer": "A cubic yard is a large volume compared with one cubic inch, so many small cubic-inch measurements are less than 0.01 cubic yard."
      },
      {
        "question": "Can I convert square inches to cubic yards?",
        "answer": "Only after you know the depth or thickness, since area must be multiplied by a length to become volume."
      }
    ],
    "sources": [
      [
        "NIST SI conversion factors",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ]
    ]
  },
  "sand-cubic-yard-calculator": {
    "category": "Sand quantity & paver bedding",
    "readTime": "9 min read",
    "lead": "Estimate the cubic yards of sand for paver bedding, leveling or specified backfill without confusing the required layer volume with sand weight, grain size or supplier delivery units. This guide treats those decisions separately.",
    "sections": [
      {
        "heading": "How to calculate sand cubic yards from area and depth",
        "paragraphs": [
          "For a uniform sand layer, multiply its area in square feet by the required depth in inches and divide by 324. A 20-foot by 12-foot paver area covered with 1 inch of sand has 240 × 1 ÷ 324 = approximately <strong>0.74 cubic yard</strong> of geometric sand volume.",
          "Measure the area the sand actually occupies. A wide patio may have corners, inset planting beds or steps that should be deducted. If the sand depth changes across the project, calculate separate sections instead of assuming that every point has the same thickness.",
          "The calculator above accepts the footprint and depth and can estimate approximate weight if you provide a relevant bulk density. The displayed density, if prefilled, is an illustrative assumption rather than a certified property of the sand delivered to you."
        ]
      },
      {
        "heading": "Sand depth and coverage quick-reference chart",
        "paragraphs": [
          "One cubic yard is 27 cubic feet and covers 324 square feet at 1 inch deep. At 2 inches it covers 162 square feet; at 3 inches, 108. The table shows required geometric cubic yards for a 200-square-foot reference area at different depths.",
          "These thicknesses are arithmetic comparisons, not blanket recommendations for every sand application. Bedding sand for pavers, masonry sand and fill sand are specified for different purposes."
        ],
        "table": {
          "caption": "Sand volume for 200 square feet",
          "heads": [
            "Uniform depth",
            "Cubic yards",
            "Cubic feet"
          ],
          "rows": [
            [
              "0.5 inch",
              "0.31 yd³",
              "8.33 ft³"
            ],
            [
              "1 inch",
              "0.62 yd³",
              "16.67 ft³"
            ],
            [
              "1.5 inches",
              "0.93 yd³",
              "25 ft³"
            ],
            [
              "2 inches",
              "1.23 yd³",
              "33.33 ft³"
            ],
            [
              "3 inches",
              "1.85 yd³",
              "50 ft³"
            ]
          ]
        }
      },
      {
        "heading": "Paver bedding sand, masonry sand and fill sand",
        "paragraphs": [
          "Not every material labeled sand is appropriate for the same project. Paver systems often require a specific bedding or jointing product and a properly prepared base. Masonry sand is selected for mortar and related uses, while fill sand may be used in grading or utility applications when it meets the project requirements.",
          "Do not assume a common sand layer depth is correct for a particular paving system. Check the paver manufacturer's installation instructions and the project's base and drainage requirements. [[Lowe's paver installation overview|https://www.lowes.com/n/how-to/how-to-design-and-build-a-paver-patio]] distinguishes bedding, base and jointing materials, which should be estimated separately.",
          "Coarse, fine, washed and unwashed sands can handle and compact differently. A change in grain size or moisture can also affect bulk density. If the exact product is not confirmed, record the geometric volume and ask the supplier before converting it into tons."
        ]
      },
      {
        "heading": "Sand weight: why cubic yards are not a fixed number of tons",
        "paragraphs": [
          "Volume and weight are different properties. A cubic yard of damp sand can have a different bulk weight from the same bulk volume of dry sand. The relevant density also depends on the particle distribution and how tightly the material is packed.",
          "To estimate US short tons, multiply cubic yards by a supplier-specific density expressed in short tons per cubic yard. If the supplier provides pounds per cubic foot, convert with density × 27 ÷ 2,000. Do not assume that every cubic yard of sand has one universal weight.",
          "The [[cubic yards to tons calculator|/cubic-yards-to-tons/]] makes the density conversion explicit. If the quote is by the ton, ask whether it represents loose delivery material, compacted installed material or a specific moisture condition."
        ]
      },
      {
        "heading": "Worked example: sand under a rectangular patio",
        "paragraphs": [
          "Consider a 16-foot by 14-foot patio with a specified uniform 1-inch sand bedding layer. The area is 224 square feet, so the geometric volume is 224 × 1 ÷ 324 ≈ <strong>0.69 cubic yard</strong>. If the supplier quotes whole cubic yards, request its minimum order and rounding method rather than ordering an arbitrary larger amount.",
          "Do not confuse that sand layer with the crushed aggregate base under it. A different material and depth may be required for the base. The [[gravel calculator|/gravel-cubic-yard-calculator/]] handles the base's volume and density assumptions separately."
        ]
      },
      {
        "heading": "Bulk sand versus bagged sand and delivery",
        "paragraphs": [
          "Bulk deliveries can be convenient for a substantial bedding or fill job, but bagged sand may be easier to transport and keep clean for smaller tasks. Compare products using the cubic-foot quantity printed on a bag or the supplier's corresponding yield information, not just bag weight.",
          "For a 0.69-yard geometric need, there are about 18.67 cubic feet. If a hypothetical product has a confirmed one-cubic-foot yield per bag, the mathematical minimum is 19 whole bags. Real bag yields and compaction behavior should be checked against actual packaging.",
          "Include delivery minimums, truck access, unloading space and whether the contractor needs a product with a particular gradation. Do not mix material prices for different sand types without verifying suitability."
        ]
      },
      {
        "heading": "Sand calculation and site preparation mistakes",
        "paragraphs": [
          "Rounding the finished sand depth up or down can change the order appreciably across a broad surface. Likewise, treating sand bedding as a substitute for compacted base can undermine a paver installation. Measure each layer independently and confirm the specified materials.",
          "Uneven subgrade, moisture and compaction may change the delivered versus finished volume. The site-specific information is more valuable than a generic 10% wastage factor. The [[main cubic yard calculator|/]] can be used to check the basic geometric formula without a material assumption."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How much sand for 100 square feet at 1 inch?",
        "answer": "100 × 1 ÷ 324 = about 0.31 cubic yard of geometric volume."
      },
      {
        "question": "How much sand for a 12 × 20 paver patio?",
        "answer": "At a specified 1-inch sand layer, 12 × 20 × 1 ÷ 324 = about 0.74 cubic yard. Verify the paver system's actual bedding specification."
      },
      {
        "question": "How many tons of sand are in a cubic yard?",
        "answer": "The quantity depends on the bulk density, moisture and state of the sand. Ask the supplier for a product-specific short-ton-per-yard factor."
      },
      {
        "question": "Is paver sand the same as masonry sand?",
        "answer": "Not necessarily. These products can have different grading and application requirements. Follow the relevant manufacturer or project specification."
      },
      {
        "question": "Does the sand calculator account for compaction?",
        "answer": "The geometric volume does not establish a loose-to-compacted ratio. Use site-specific product information and an appropriate allowance if documented."
      },
      {
        "question": "How do I calculate sand for an irregular area?",
        "answer": "Measure the separate sections, apply each section's specified depth and sum the volumes."
      }
    ],
    "sources": [
      [
        "Lowe's paver installation guide",
        "https://www.lowes.com/n/how-to/how-to-design-and-build-a-paver-patio"
      ],
      [
        "NIST unit conversions",
        "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors"
      ]
    ]
  }
};
