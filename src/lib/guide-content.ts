export type GuideParagraphSection={heading:string;paragraphs:string[];table?:{caption:string;headers:string[];rows:string[][]}};
export type GuideArticle={category:string;published:string;readTime:string;image:string;imageAlt:string;imageCredit:string;imageCreditUrl:string;excerpt:string;lead:string;sections:GuideParagraphSection[];faqs:{question:string;answer:string}[]};
export const guideArticles:Record<string,GuideArticle>={
  "how-to-calculate-cubic-yards": {
    "category": "Measurement Methods",
    "published": "2026-11-11",
    "readTime": "8 min read",
    "image": "https://images.pexels.com/photos/5493676/pexels-photo-5493676.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "imageAlt": "Builder checking building dimensions using a tape measure before construction",
    "imageCredit": "Antoni Shkraba / Pexels",
    "imageCreditUrl": "https://www.pexels.com/photo/a-construction-worker-holding-a-pencil-and-measuring-tape-5493676/",
    "excerpt": "Understand the cubic yard formulas for feet, inches, circular areas and irregular spaces, with transparent worked examples and unit checks.",
    "lead": "A reliable cubic-yard calculation starts with three dimensions, compatible units and a clear understanding of the shape being filled. This practical guide walks through the arithmetic, units and mistakes that cause material takeoffs to go wrong.",
    "sections": [
      {
        "heading": "Start with volume, not just area",
        "paragraphs": [
          "A cubic yard measures three-dimensional space. The area of a surface tells you how much ground it covers, but not how much concrete, gravel or soil is needed to fill it. The missing measurement is the layer's depth, height or thickness. In building and landscape projects, lengths are often measured in feet while depth is recorded in inches.",
          "Before using any formula, sketch the space and label every measurement with its unit. Decide whether the dimensions represent the inside of a form, the actual excavated void or the final finished layer. These can differ, especially around raised edges or sloped sites. For a project that has several depths, a single rectangle is unlikely to describe it accurately."
        ]
      },
      {
        "heading": "Formula when length, width and depth are in feet",
        "paragraphs": [
          "For a rectangular box, multiply length × width × depth to obtain cubic feet, then divide by 27 to convert to cubic yards. This works because one yard is exactly three feet, so a cube measuring one yard on each side contains 3 × 3 × 3 = 27 cubic feet.",
          "For example, a rectangular volume measuring 9 feet long, 6 feet wide and 1.5 feet deep contains 81 cubic feet. Dividing by 27 gives exactly 3 cubic yards. A 5-foot by 5-foot by 2-foot excavation contains 50 cubic feet, equivalent to approximately 1.85 cubic yards. The same formula describes an empty space or filled space; the material changes the weight, not the geometry."
        ],
        "table": {
          "headers": [
            "Length",
            "Width",
            "Depth",
            "Volume"
          ],
          "rows": [
            [
              "9 ft",
              "6 ft",
              "1.5 ft",
              "3.00 yd³"
            ],
            [
              "5 ft",
              "5 ft",
              "2 ft",
              "1.85 yd³"
            ],
            [
              "12 ft",
              "8 ft",
              "0.5 ft",
              "1.78 yd³"
            ]
          ],
          "caption": "Rectangular cubic-yard examples with all three dimensions in feet."
        }
      },
      {
        "heading": "Shortcut for depth in inches: divide by 324",
        "paragraphs": [
          "It is common to measure a patio or bed in feet and its finished depth in inches. Convert depth into feet by dividing inches by 12, then divide cubic feet by 27. Combining these steps creates the shortcut: cubic yards = length (ft) × width (ft) × depth (in) ÷ 324.",
          "Consider a bed that is 12 feet by 10 feet with a new 3-inch layer. The area is 120 square feet, the resulting volume is 30 cubic feet and the equivalent cubic-yard quantity is 30 ÷ 27 = 1.111... yd³. Both the full conversion and the shortcut produce the same result. An error occurs if the inches are accidentally entered as feet, which would make the result twelve times too large."
        ]
      },
      {
        "heading": "Already know square footage? Add the thickness",
        "paragraphs": [
          "For a rectangular project with known square footage, the calculation is square feet × depth (in) ÷ 324. If you have 500 square feet and plan a 4-inch layer, the volume is 500 × 4 ÷ 324 = approximately 6.17 cubic yards. That is a volume, not a purchase recommendation.",
          "Two projects can have identical square footage but different yardage. A 500-square-foot layer at 2 inches needs about 3.09 yd³; at 6 inches it needs about 9.26 yd³. Use the [[square feet to cubic yards calculator|/square-feet-to-cubic-yards/]] to model the depth without re-entering length and width."
        ]
      },
      {
        "heading": "Calculate circles and round planting beds",
        "paragraphs": [
          "The volume of a circular layer is its surface area multiplied by depth. Find the radius by dividing the diameter by two. Area in square feet is π × radius², using the radius in feet. Multiply that area by depth in inches and divide by 324 for cubic yards.",
          "For a circular bed 10 feet across with a 3-inch layer, the radius is 5 feet. Area is approximately 78.54 square feet. Volume is 78.54 × 3 ÷ 324 = approximately 0.73 cubic yard. If you accidentally use the 10-foot diameter as the radius, the calculated area becomes four times too large. For an annular bed, such as a tree ring, subtract the central unfilled area first."
        ]
      },
      {
        "heading": "Irregular areas, triangles and varying depths",
        "paragraphs": [
          "Irregular spaces become manageable when divided into simpler measured sections. Calculate each rectangular or triangular footprint individually, apply its actual depth and add the resulting volumes. For a triangular area, find surface area as one-half of base × perpendicular height. For a trapezoid with parallel sides, area is the average of the two parallel sides multiplied by their perpendicular distance.",
          "Depth variation needs more care. A genuinely linear slope across a rectangle can be estimated using the average of two end depths; irregular ground usually needs more measured points or cross sections. Do not use an arithmetic average of randomly chosen depths for earthwork with complex geometry. The aim is to model the actual three-dimensional space, not just create one plausible-looking number."
        ]
      },
      {
        "heading": "How to move from geometric yardage to an order",
        "paragraphs": [
          "Once you know volume, ask how the product is sold. Ready-mix concrete is commonly quoted in cubic yards; bagged products use stated yields; some stone suppliers quote by US short ton. A ton is a unit of weight, so a volume-to-tonnage calculation requires material density. This is a separate calculation from geometry.",
          "Also distinguish a finished layer from loose delivered volume. Aggregate compacted to a specified thickness may need a different loose quantity; soils can swell during excavation and settle after placement. Project-specific specifications and supplier information are more reliable than a universal allowance. For targeted takeoffs, see the [[concrete calculator|/concrete-cubic-yard-calculator/]], [[gravel calculator|/gravel-cubic-yard-calculator/]] or [[fill dirt calculator|/fill-dirt-cubic-yard-calculator/]]."
        ]
      },
      {
        "heading": "Quick measurement and formula checklist",
        "paragraphs": [
          "Check whether you have measured the right space, whether every horizontal dimension is in feet, and whether depth is in feet or inches. Make sure circular dimensions use radius rather than diameter. Identify any sections that overlap or that won't receive material. Keep unrounded results through intermediate calculations, then round according to the actual selling unit.",
          "Recheck dimensions at multiple points on uneven work. The calculator is particularly useful for preliminary planning, but footing design, graded earthwork, drainage and other engineered applications may require field measurements and qualified review. Consult [[NIST measurement definitions|https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors]] for unit definitions."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the fastest cubic yard formula?",
        "answer": "If length and width are in feet and depth is in inches, use length × width × depth ÷ 324. If all dimensions are in feet, divide the product by 27."
      },
      {
        "question": "Why is the divisor 324?",
        "answer": "It combines 12 inches per foot with 27 cubic feet per cubic yard: 12 × 27 = 324."
      },
      {
        "question": "Can I calculate cubic yards using only square feet?",
        "answer": "No. Square feet measure area, so you must also provide depth or thickness to obtain volume."
      },
      {
        "question": "What if the area has several depths?",
        "answer": "Divide the area into measured sections with distinct depths and total their volumes. For a genuine linear taper, the mean of the two end depths may represent the geometric average."
      },
      {
        "question": "Should I always add 10% to cubic yardage?",
        "answer": "No. Extra material requirements differ among concrete, soil, mulch and compacted aggregate. Use site conditions and supplier specifications rather than assuming a universal allowance."
      },
      {
        "question": "Does changing materials change the cubic-yard formula?",
        "answer": "No. Geometry determines volume. Material type becomes important when converting volume to weight, choosing an ordering unit or planning settlement and compaction."
      }
    ]
  },
  "what-is-a-cubic-yard": {
    "category": "Measurement Basics",
    "published": "2026-11-11",
    "readTime": "7 min read",
    "image": "https://images.pexels.com/photos/32254873/pexels-photo-32254873/free-photo-of-wheelbarrow-filled-with-soil-in-garden-setting.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "imageAlt": "A wheelbarrow loaded with soil in a green garden, illustrating bulk landscaping volume",
    "imageCredit": "Nadin Sh / Pexels",
    "imageCreditUrl": "https://www.pexels.com/photo/wheelbarrow-filled-with-soil-in-garden-setting-32254873/",
    "excerpt": "See what one cubic yard actually means, how big it is, its equivalents and the difference between cubic feet, square yards and bulk-material weight.",
    "lead": "A cubic yard is a unit of space, not a pile size or a guaranteed material weight. Understanding that distinction makes it much easier to compare bulk landscaping deliveries, bags, truck capacities and the dimensions on a project drawing.",
    "sections": [
      {
        "heading": "The exact size of one cubic yard",
        "paragraphs": [
          "A cubic yard (written yd³) is the space inside a cube with edges measuring one yard each. Since one yard is exactly 3 feet, a cubic-yard box measures 3 ft × 3 ft × 3 ft. Its volume is exactly 27 cubic feet, or 46,656 cubic inches. These are fixed unit relationships rather than estimates.",
          "A familiar way to visualize it is as an imaginary square box, three feet across, three feet from front to back and three feet high. However, an actual delivery of gravel or soil does not arrive in a tidy cube. A loose mound's shape depends on how the material settles, so the mound's height and apparent width alone do not tell you its exact cubic yards."
        ]
      },
      {
        "heading": "Cubic yard versus cubic foot and cubic meter",
        "paragraphs": [
          "A cubic foot is a cube measuring one foot along each edge. Twenty-seven such cubes fill a cubic-yard cube. A cubic meter is a metric volume measuring one meter along each edge and is slightly larger than a cubic yard. The international yard is defined as exactly 0.9144 meter, so one cubic yard equals exactly 0.764554857984 cubic meter.",
          "Convert cubic feet to cubic yards by dividing by 27. Convert cubic yards to cubic meters by multiplying by 0.764554857984. Reverse either operation to convert back. These are unit conversions and work for any substance because the measurement describes the occupied space."
        ],
        "table": {
          "caption": "Common volume references for one cubic yard",
          "headers": [
            "Unit or comparison",
            "Equivalent"
          ],
          "rows": [
            [
              "Cubic feet",
              "27 ft³"
            ],
            [
              "Cubic inches",
              "46,656 in³"
            ],
            [
              "Cubic meters",
              "0.764554857984 m³"
            ],
            [
              "Liters",
              "764.554857984 L"
            ],
            [
              "Cube with 3-foot edges",
              "3 ft × 3 ft × 3 ft"
            ]
          ]
        }
      },
      {
        "heading": "Why a cubic yard is not a square yard",
        "paragraphs": [
          "A linear yard measures distance, a square yard measures area and a cubic yard measures volume. A square yard is a flat square that measures 3 feet by 3 feet, covering 9 square feet. It does not specify how tall or deep the space is, so you cannot directly convert it into cubic yards.",
          "If one square yard of ground is covered to a depth of 3 feet, the space is one cubic yard. If that same 9-square-foot area has a 3-inch layer, the volume is only 9 × 3 ÷ 324 = 0.0833 cubic yard. That illustrates why the missing dimension matters. For calculations from known area, use the [[square feet to cubic yards calculator|/square-feet-to-cubic-yards/]]."
        ]
      },
      {
        "heading": "How many wheelbarrows make one cubic yard?",
        "paragraphs": [
          "There is no fixed wheelbarrow count because wheelbarrow capacities differ and the usable load is constrained by weight, shape and safe handling. If a wheelbarrow safely carries 3 cubic feet, one cubic yard is the equivalent of nine level 3-cubic-foot loads. A 6-cubic-foot capacity would mathematically require 4.5 loads if the full rated volume is usable.",
          "Do not assume the bin's rated volume is the same as a safe working load. Dense wet soil or rock may exceed a practical lifting limit long before the bin is full. Check the manufacturer capacity and follow safe loading practices rather than making wheelbarrow trips an exact delivery measure."
        ]
      },
      {
        "heading": "How many bags make one cubic yard?",
        "paragraphs": [
          "Bag counts are determined from the volume printed on the package. One cubic yard equals 27 cubic feet. Therefore, a cubic yard is equivalent to 13.5 bags labeled 2 cubic feet, which requires purchasing 14 whole bags if bags cannot be split. Nine 3-cubic-foot bags equal one cubic yard exactly by labeled volume.",
          "Some products are packaged by weight, particularly concrete or dense aggregates. A 40-, 60- or 80-pound concrete bag does not automatically equate to a fixed cubic-foot volume across every mix. Use the product's mixed yield when calculating bag counts. For landscape mulch, use [[the mulch calculator|/mulch-cubic-yard-calculator/]] to plan area coverage and compare packaging."
        ]
      },
      {
        "heading": "Does one cubic yard have a fixed weight?",
        "paragraphs": [
          "No. The weight of a cubic yard is determined by bulk density, which can differ greatly across materials and change with moisture, particle size and packing. One cubic yard of wood mulch, wet topsoil and crushed stone occupy equal space but will not weigh the same. That is why a volume-only measurement cannot be accurately converted to tons without material information.",
          "For a supplier quotation in US short tons, multiply cubic yards by a density expressed in US short tons per cubic yard. The [[cubic yards to tons calculator|/cubic-yards-to-tons/]] allows that density to be supplied or edited. Do not use a universal 'one cubic yard = one ton' rule for materials that have different densities."
        ]
      },
      {
        "heading": "What bulk materials are commonly sold by cubic yard?",
        "paragraphs": [
          "Ready-mix concrete, screened topsoil, mulch, sand, compost and some gravel products are commonly priced or described by volume. Yardage makes it possible to calculate a material quantity from the footprint and thickness of a job. The size of the job determines geometric volume; the material determines whether you need additional delivery or product-specific planning.",
          "Cubic yards are also used in earthwork estimating. A bank cubic yard measures undisturbed material; loose cubic yards measure excavated material; compacted cubic yards measure installed fill in a compacted state. Those states are not guaranteed to contain equal bulk volume and should be distinguished when estimating trucking."
        ]
      },
      {
        "heading": "How large an area does one cubic yard cover?",
        "paragraphs": [
          "Coverage depends entirely on thickness. Spread uniformly 1 inch deep, a cubic yard covers 324 square feet. At 2 inches it covers 162 square feet; at 3 inches, 108 square feet; and at 6 inches, 54 square feet. Double the thickness and the area covered by the same material volume is cut in half.",
          "These are geometric reference values, not guarantees of how loose material will settle or compact. For more depths and quantities, use the [[cubic yard coverage chart|/cubic-yard-coverage-chart/]]. If you have actual project dimensions, the [[main cubic yard calculator|/]] can estimate volume directly."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is one cubic yard exactly 27 cubic feet?",
        "answer": "Yes. A yard equals three feet, so one cubic yard is 3 × 3 × 3 = 27 cubic feet."
      },
      {
        "question": "How many cubic yards is one cubic meter?",
        "answer": "One cubic meter is approximately 1.30795 cubic yards."
      },
      {
        "question": "Is a cubic yard the same as a yard?",
        "answer": "No. A yard measures length, while a cubic yard measures three-dimensional volume."
      },
      {
        "question": "How much soil is one cubic yard?",
        "answer": "One cubic yard of soil occupies exactly 27 cubic feet of space, but its weight and settled volume vary according to soil type, moisture and how it is handled."
      },
      {
        "question": "How many wheelbarrows are in one cubic yard?",
        "answer": "Nine level 3-cubic-foot loads equal 27 cubic feet mathematically, but the practical number depends on wheelbarrow capacity and safe loading."
      },
      {
        "question": "How much area does one yard of mulch cover?",
        "answer": "At a uniform depth of 3 inches, one cubic yard covers about 108 square feet. The area changes with layer thickness."
      }
    ]
  },
  "cubic-yard-coverage-chart": {
    "category": "Coverage & Planning",
    "published": "2026-11-11",
    "readTime": "8 min read",
    "image": "https://images.pexels.com/photos/17312060/pexels-photo-17312060.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "imageAlt": "Gravel path through a green landscaped garden, illustrating surface coverage by depth",
    "imageCredit": "Marian Florinel Condruz / Pexels",
    "imageCreditUrl": "https://www.pexels.com/photo/gravel-park-path-17312060/",
    "excerpt": "Use square-foot coverage tables for 1–10 cubic yards at common depths, plus examples for mulch, gravel and topsoil layers.",
    "lead": "A cubic-yard coverage chart connects the volume you already have with the area it can cover at a chosen depth. Use the tables to estimate uniform layers; use a project-specific calculator when the depth varies or the material will be compacted.",
    "sections": [
      {
        "heading": "Coverage formula: cubic yards to square feet",
        "paragraphs": [
          "Coverage = cubic yards × 324 ÷ depth in inches. This formula follows directly from one cubic yard being equal to 27 cubic feet. Spread that volume one inch (one-twelfth foot) deep and it covers 27 ÷ (1/12) = 324 square feet.",
          "For example, 2 cubic yards spread 3 inches deep cover 2 × 324 ÷ 3 = 216 square feet. At 4 inches deep, the same volume covers 162 square feet. Depth must be positive and measured in inches for this version of the formula. The result assumes a flat, uniform finished layer."
        ]
      },
      {
        "heading": "Coverage table for one cubic yard",
        "paragraphs": [
          "The following values show the geometric coverage of exactly one cubic yard at common depths. It is useful for comparing a shallow mulch layer with a deeper gravel or soil layer, but it does not recommend a particular application thickness. Appropriate depth depends on the material and project."
        ],
        "table": {
          "caption": "Area covered by one cubic yard at uniform depths",
          "headers": [
            "Depth",
            "Coverage"
          ],
          "rows": [
            [
              "1 inch",
              "324 sq ft"
            ],
            [
              "1.5 inches",
              "216 sq ft"
            ],
            [
              "2 inches",
              "162 sq ft"
            ],
            [
              "3 inches",
              "108 sq ft"
            ],
            [
              "4 inches",
              "81 sq ft"
            ],
            [
              "5 inches",
              "64.8 sq ft"
            ],
            [
              "6 inches",
              "54 sq ft"
            ],
            [
              "8 inches",
              "40.5 sq ft"
            ],
            [
              "12 inches",
              "27 sq ft"
            ]
          ]
        }
      },
      {
        "heading": "How many square feet can 2, 3, 5 or 10 yards cover?",
        "paragraphs": [
          "To scale coverage for a larger delivery, multiply the one-yard figure by the number of cubic yards. For instance, five cubic yards at a uniform 3-inch depth cover 5 × 108 = 540 square feet. The following reference table is intended for quick volume-to-area comparisons before buying materials."
        ],
        "table": {
          "caption": "Coverage in square feet for different volumes and depths",
          "headers": [
            "Volume",
            "2 inches deep",
            "3 inches deep",
            "4 inches deep",
            "6 inches deep"
          ],
          "rows": [
            [
              "1 yd³",
              "162",
              "108",
              "81",
              "54"
            ],
            [
              "2 yd³",
              "324",
              "216",
              "162",
              "108"
            ],
            [
              "3 yd³",
              "486",
              "324",
              "243",
              "162"
            ],
            [
              "5 yd³",
              "810",
              "540",
              "405",
              "270"
            ],
            [
              "10 yd³",
              "1,620",
              "1,080",
              "810",
              "540"
            ]
          ]
        }
      },
      {
        "heading": "Reverse the chart: how many yards are needed for a known area?",
        "paragraphs": [
          "If area and depth are known, calculate cubic yards = area in square feet × depth in inches ÷ 324. A 500-square-foot area at 3 inches deep requires 500 × 3 ÷ 324 = approximately 4.63 cubic yards. This is the inverse of the coverage formula, not a different method.",
          "A 1,000-square-foot area at 2 inches deep takes about 6.17 cubic yards. At 4 inches it takes about 12.35. These calculations describe geometric space and should not be treated as supplier delivery quantities unless the delivery is measured in the same state."
        ]
      },
      {
        "heading": "Coverage examples for mulch, gravel and topsoil",
        "paragraphs": [
          "A bed covered in bark mulch at a specified depth is a classic volume-and-area calculation. With 3 cubic yards of mulch at 3 inches deep, the theoretical coverage is 324 square feet. For a gravel path at 4 inches, 3 cubic yards cover about 243 square feet, before aggregate-specific compaction adjustment.",
          "For a topsoil layer 2 inches deep, 3 cubic yards cover 486 square feet geometrically. But loose screened topsoil can settle, and a finished compacted base is different from the loose volume delivered by truck. Use dedicated material pages, such as the [[mulch calculator|/mulch-cubic-yard-calculator/]], [[gravel calculator|/gravel-cubic-yard-calculator/]] and [[topsoil calculator|/topsoil-cubic-yard-calculator/]], to check practical requirements."
        ]
      },
      {
        "heading": "How to calculate coverage for irregular beds",
        "paragraphs": [
          "Split a curved bed into measurable sections or calculate the area of geometric shapes. A circular bed has an area of π × radius². A triangular region has an area of one-half base × perpendicular height. If there are holes or planting zones you will not cover, subtract those areas from the total before applying depth.",
          "For a garden with a rectangular section and a circular section, calculate each square-foot area, add them together if the depths are identical, and convert to cubic yards. When depth differs, calculate the volume of each section separately. This avoids hiding meaningful differences in an unsupported average."
        ]
      },
      {
        "heading": "When the coverage chart is not a reliable order estimate",
        "paragraphs": [
          "Actual coverage can differ because of uneven surfaces, installation waste, material settlement and compaction. A 4-inch-deep finished gravel base may need a larger loose quantity, but there is no universal conversion percentage for every aggregate. Wet soil and dry soil can also behave differently in delivery and placement.",
          "Measure the actual finished depth required, ask whether the material is sold by loose cubic yard, compacted cubic yard or weight, and check supplier minimums. Do not interpret an approximate coverage chart as a site survey, engineering recommendation or guaranteed yield."
        ]
      },
      {
        "heading": "How the chart is calculated and checked",
        "paragraphs": [
          "Every reference value is derived from the exact relationship of 27 cubic feet per cubic yard and 12 inches per foot. The general equation can also be written as area = cubic feet ÷ depth in feet. Both produce the same numerical answer when the units match.",
          "Keep full numeric precision until the final displayed number. We document these measurement definitions in the [[calculation methodology|/calculation-methodology/]], with the underlying unit standards in the [[NIST Guide to SI|https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors]]."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many square feet will one cubic yard cover at 2 inches?",
        "answer": "One cubic yard covers 162 square feet at a uniform 2-inch depth."
      },
      {
        "question": "How many square feet will two cubic yards cover at 3 inches?",
        "answer": "Two cubic yards cover about 216 square feet at a uniform 3-inch layer."
      },
      {
        "question": "How much area does five yards cover at 4 inches?",
        "answer": "At 4 inches, 5 cubic yards cover 405 square feet mathematically."
      },
      {
        "question": "How many yards do I need for 200 square feet at 3 inches?",
        "answer": "200 × 3 ÷ 324 = about 1.85 cubic yards before any material-specific adjustment."
      },
      {
        "question": "Does coverage change for mulch versus gravel?",
        "answer": "The geometric coverage formula is identical, but real-world finished coverage can differ if the materials settle, compact or spread unevenly."
      },
      {
        "question": "Can I use this chart for a sloped yard?",
        "answer": "Only when the finished thickness is uniform and the area is measured correctly. Irregular topography or changing depth may require separate volume calculations or field survey data."
      }
    ]
  }
};
