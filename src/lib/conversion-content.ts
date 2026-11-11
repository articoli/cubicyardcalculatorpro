export type ConversionExtra={kind:string;summary:string;sections:{heading:string;paragraphs:string[];table?:{caption:string;headers:string[];rows:(string|number)[][]}}[]};
export const conversionArticles:Record<string,ConversionExtra>={
  "cubic-feet-to-cubic-yards": {
    "kind": "Exact volume conversion",
    "summary": "Cubic feet and cubic yards both describe volume; the conversion factor is exact and does not depend on the material.",
    "sections": [
      {
        "heading": "When is ft³ to yd³ useful?",
        "paragraphs": [
          "Building plans, storage capacities and product yields can be specified in cubic feet, while bulk suppliers may quote cubic yards. Convert first so the quantities can be compared in the same unit. A cubic yard always contains exactly 27 cubic feet, regardless of whether the space contains gravel, mulch, concrete or air.",
          "If your dimensions are already in feet, multiply length × width × depth to obtain cubic feet before dividing by 27. When the depth is in inches, convert it to feet first or use the combined divisor of 324 for the finished cubic-yard result."
        ]
      },
      {
        "heading": "Quick cubic feet to cubic yards table",
        "paragraphs": [
          "Each value below is volume only. Multiplying or dividing by the fixed conversion factor is not a prediction of material weight or purchase cost."
        ],
        "table": {
          "caption": "Exact examples converting cubic feet to cubic yards",
          "headers": [
            "Cubic feet",
            "Cubic yards"
          ],
          "rows": [
            [
              "13.5 ft³",
              "0.5 yd³"
            ],
            [
              "27 ft³",
              "1 yd³"
            ],
            [
              "54 ft³",
              "2 yd³"
            ],
            [
              "81 ft³",
              "3 yd³"
            ],
            [
              "135 ft³",
              "5 yd³"
            ],
            [
              "270 ft³",
              "10 yd³"
            ]
          ]
        }
      },
      {
        "heading": "Worked conversion from a rectangular volume",
        "paragraphs": [
          "A box 6 feet long, 3 feet wide and 3 feet deep contains 6 × 3 × 3 = 54 cubic feet. Divide 54 by 27 to get 2 cubic yards. Reversing the calculation, 2 cubic yards × 27 = 54 cubic feet. That round-trip check is a useful way to catch a misplaced decimal or wrong unit.",
          "Use the [[main cubic yard calculator|/]] if you have dimensions instead of a known cubic-foot total. For bagged materials, compare the final cubic-foot requirement with the package's labeled volume or mixed yield."
        ]
      },
      {
        "heading": "Common mistakes when converting cubic feet",
        "paragraphs": [
          "Do not confuse cubic feet (ft³) with square feet (ft²). A project with only 200 square feet of area cannot be converted to cubic yards until the depth is known. Do not confuse a linear foot or a length in feet with a cubic-foot volume. Finally, do not apply a tons-per-yard factor to this exact unit conversion; weight is a separate material-dependent estimate."
        ]
      }
    ]
  },
  "square-feet-to-cubic-yards": {
    "kind": "Area + thickness conversion",
    "summary": "Square feet measure flat area. To calculate cubic yards from them, you must supply a material depth or thickness.",
    "sections": [
      {
        "heading": "Why square feet alone cannot become cubic yards",
        "paragraphs": [
          "You are converting an area into a three-dimensional volume, so an extra measurement is required. A 500-square-foot patio at 2 inches and a 500-square-foot patio at 6 inches have the same footprint but require three times different volume. Use the planned depth in inches to complete the calculation.",
          "The correct shortcut is cubic yards = area (sq ft) × depth (inches) ÷ 324. If depth is in feet instead, calculate area × depth ÷ 27."
        ]
      },
      {
        "heading": "Square footage to cubic yards reference table",
        "paragraphs": [
          "This table uses measured area and uniform thickness. It is a geometric planning chart; any installation waste or compaction adjustment must be evaluated separately."
        ],
        "table": {
          "caption": "Cubic yards required by area and thickness",
          "headers": [
            "Area",
            "2 in deep",
            "3 in deep",
            "4 in deep",
            "6 in deep"
          ],
          "rows": [
            [
              100,
              "0.62",
              "0.93",
              "1.23",
              "1.85"
            ],
            [
              200,
              "1.23",
              "1.85",
              "2.47",
              "3.70"
            ],
            [
              500,
              "3.09",
              "4.63",
              "6.17",
              "9.26"
            ],
            [
              1000,
              "6.17",
              "9.26",
              "12.35",
              "18.52"
            ]
          ]
        }
      },
      {
        "heading": "Example: calculate volume from a known area",
        "paragraphs": [
          "Suppose a lawn preparation plan calls for covering 350 square feet with 2 inches of new soil. Multiply 350 × 2 = 700; divide by 324 for approximately 2.16 cubic yards of geometric soil volume. If a different portion needs 4 inches, calculate that section separately.",
          "For mulch, gravel and topsoil, the target depth should reflect actual site requirements, not a universal recommendation. See the [[cubic yard coverage chart|/cubic-yard-coverage-chart/]] for reverse coverage calculations."
        ]
      },
      {
        "heading": "Area measurement mistakes to avoid",
        "paragraphs": [
          "Subtract any meaningful regions that do not receive material. If the footprint is irregular, divide it into measurable shapes. Always label depth units; entering 4 feet instead of 4 inches increases the result twelvefold. If the material is quoted by ton, calculate volume first and then apply the relevant bulk density using the [[cubic yards to tons calculator|/cubic-yards-to-tons/]]."
        ]
      }
    ]
  },
  "cubic-yards-to-tons": {
    "kind": "Material density conversion",
    "summary": "Unlike exact volume conversions, converting cubic yards to US short tons requires a material-specific bulk density.",
    "sections": [
      {
        "heading": "The formula for converting cubic yards to US short tons",
        "paragraphs": [
          "US short tons = cubic yards × bulk density (US short tons per cubic yard). A US short ton is 2,000 pounds. When a density is given in pounds per cubic foot, multiply by 27 and divide by 2,000 to convert it to short tons per cubic yard. Always check whether the source uses short tons, metric tonnes or long tons.",
          "A conversion based on bulk density is an estimate until the supplier identifies the exact product and its measured state. Moisture content, aggregate gradation, void ratio and compaction can change the result."
        ]
      },
      {
        "heading": "Illustrative density-based calculations",
        "paragraphs": [
          "The table shows how a 5-cubic-yard quantity changes with the density entered. The density values are arithmetic examples, not published guaranteed weights for named materials."
        ],
        "table": {
          "caption": "Five cubic yards converted using different assumed densities",
          "headers": [
            "Assumed density",
            "Volume",
            "Estimated short tons"
          ],
          "rows": [
            [
              "0.3 short tons/yd³",
              "5 yd³",
              "1.5 tons"
            ],
            [
              "1.0 short tons/yd³",
              "5 yd³",
              "5 tons"
            ],
            [
              "1.25 short tons/yd³",
              "5 yd³",
              "6.25 tons"
            ],
            [
              "1.4 short tons/yd³",
              "5 yd³",
              "7 tons"
            ],
            [
              "1.6 short tons/yd³",
              "5 yd³",
              "8 tons"
            ]
          ]
        }
      },
      {
        "heading": "Loose, bank and compacted material are not equivalent",
        "paragraphs": [
          "Soil and aggregate bulk density depends on the volume state. A compacted finished layer may have a different bulk density from the same material in a loose delivery truck. Mixing a compacted density with loose cubic yards gives an inconsistent estimate even when the arithmetic is correct.",
          "Ask the supplier which state its tons-per-yard figure represents, and use the volume from the same state. For excavations or engineered fill, review the [[fill dirt calculator|/fill-dirt-cubic-yard-calculator/]] for bank, loose and compacted terminology."
        ]
      },
      {
        "heading": "Example of supplier-specific gravel tonnage",
        "paragraphs": [
          "If a supplier specifies 1.47 US short tons per loose cubic yard for a product, 6 loose cubic yards are estimated at 6 × 1.47 = 8.82 short tons. This is a hypothetical supplier figure for demonstrating the formula. The result should not be used for a different product or compacted volume without verification.",
          "When ordering, confirm density, billing units, legal truck payload and delivery charges. For a driveway, use the [[gravel calculator|/gravel-cubic-yard-calculator/]] to determine the geometric layer quantity before planning tonnage."
        ]
      }
    ]
  },
  "cubic-meters-to-cubic-yards": {
    "kind": "Metric–US volume conversion",
    "summary": "The cubic meter to cubic yard relationship is fixed by the international yard definition and does not require material density.",
    "sections": [
      {
        "heading": "Exact cubic meter to cubic yard relationship",
        "paragraphs": [
          "One international yard is exactly 0.9144 meter. Cubing this gives 1 yd³ = 0.764554857984 m³. Therefore, cubic yards = cubic meters ÷ 0.764554857984. The reverse operation is cubic meters = cubic yards × 0.764554857984.",
          "A cubic meter is slightly larger than a cubic yard. Preserve full precision in intermediate steps and round only when displaying the result or complying with a supplier's ordering increments."
        ]
      },
      {
        "heading": "Cubic meters and cubic yards conversion examples",
        "paragraphs": [
          "These are volume-only equivalences. The density of soil or concrete is not relevant to converting one volume unit into the other."
        ],
        "table": {
          "caption": "Metric cubic meters to US cubic yards, rounded",
          "headers": [
            "Cubic meters",
            "Cubic yards"
          ],
          "rows": [
            [
              "0.5 m³",
              "0.65 yd³"
            ],
            [
              "1 m³",
              "1.31 yd³"
            ],
            [
              "2 m³",
              "2.62 yd³"
            ],
            [
              "3 m³",
              "3.92 yd³"
            ],
            [
              "5 m³",
              "6.54 yd³"
            ],
            [
              "10 m³",
              "13.08 yd³"
            ]
          ]
        }
      },
      {
        "heading": "Example: converting a metric slab volume",
        "paragraphs": [
          "Suppose a project drawing specifies 4.5 cubic meters of concrete. Divide by 0.764554857984 to get approximately 5.89 cubic yards of geometric volume. This does not establish how much a supplier will deliver after project-specific allowances or ordering increments.",
          "If you have metric dimensions rather than a calculated volume, multiply length × width × depth in meters to get m³ first. Then use this converter to express the result in cubic yards."
        ]
      },
      {
        "heading": "Why a metric conversion does not change an order estimate",
        "paragraphs": [
          "Converting 4.5 m³ to yd³ changes the unit label and number, but not the physical volume of concrete, gravel or soil. If the same project also needs compaction or settlement adjustments, apply them separately based on the correct material specifications.",
          "NIST publishes definitions of the international yard and related conversion factors. See our [[calculation methodology|/calculation-methodology/]] for the exact relationship used by the calculator."
        ]
      }
    ]
  }
};
