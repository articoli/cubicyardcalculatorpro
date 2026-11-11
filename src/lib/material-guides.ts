export type MaterialScenario = {name:string;measure:string;result:string;reason:string};
export type MaterialGuide = {
  slug:string;
  category:string;
  headline:string;
  answer:string;
  answerNote:string;
  practicalTitle:string;
  practicalIntro:string;
  scenarios:MaterialScenario[];
  decisionTitle:string;
  decisionIntro:string;
  choices:{ need:string; use:string; check:string }[];
  stepsTitle:string;
  orderSteps:{title:string;detail:string}[];
  distinction:string;
  refs:{label:string;url:string;use:string}[];
};
export const materialGuideMap:Record<string,MaterialGuide>={
  "concrete-cubic-yard-calculator":{
    slug:"concrete-cubic-yard-calculator",
    category:"Concrete quantity planning",
    headline:"How much concrete is needed for a pour?",
    answer:"For a uniform rectangular slab, multiply its length and width in feet by its thickness in inches, then divide by 324. The answer is the geometric cubic yards of concrete in that slab.",
    answerNote:"Do not include a footing twice: if the slab formula already includes the first 4 inches of an edge, measure only the edge depth below those 4 inches as additional concrete. Specify strength, reinforcement and slab design separately.",
    practicalTitle:"Concrete takeoff examples beyond a simple patio",
    practicalIntro:"Each example assumes the stated shape is completely filled with concrete. These are independent examples, not extra concrete to add to the same slab.",
    scenarios:[
      {name:"Rectangular slab",measure:"12 × 16 ft × 5 in",result:"2.96 yd³",reason:"192 sq ft × 5 in ÷ 324. Check forms and uneven thickness before deciding on a delivery quantity."},
      {name:"Straight continuous footing",measure:"36 ft long × 2 ft wide × 1 ft deep",result:"2.67 yd³",reason:"36 × 2 × 1 ÷ 27. Deduct known overlaps where footings intersect."},
      {name:"Four round piers",measure:"4 holes, each 12 in diameter × 3 ft deep",result:"0.35 yd³",reason:"4 × π × (0.5 ft)² × 3 ft ÷ 27. This is gross hole volume before any displaced space."}
    ],
    decisionTitle:"Which concrete quantity method should you use?",
    decisionIntro:"First identify the part of the pour; a single rectangle formula does not cover every form or vertical element.",
    choices:[
      {need:"Flat slab, pad or patio",use:"Length × width × thickness",check:"Actual formed thickness and edge details"},
      {need:"Continuous rectangular footing",use:"Total run × width × depth",check:"Corners, intersections and slab overlap"},
      {need:"Round pier or post hole",use:"π × radius² × depth",check:"Measured hole diameter, hole count and any displacement"},
      {need:"Bagged mix",use:"Total cubic feet ÷ labeled yield per bag",check:"Exact product and yield on its technical data sheet"}
    ],
    stepsTitle:"Questions to answer before ordering concrete",
    orderSteps:[
      {title:"Are all parts of the pour on the takeoff?",detail:"Confirm forms, grade beams, thickened edges, steps and separate footings, not just the main footprint."},
      {title:"Is this ready-mix or packaged material?",detail:"Ready-mix quantities are commonly quoted by cubic yard. For bags, use the specified product's mixed yield rather than the dry bag weight."},
      {title:"What delivery constraints apply?",detail:"Ask about minimums, short-load fees, available placement time, access, pumping and supplier rounding."},
      {title:"Who verified the project specification?",detail:"Volume arithmetic is not a structural design. Concrete strength, reinforcement and required slab thickness must follow project requirements."}
    ],
    distinction:"A ready-mix order volume, a dry bag's weight and the cubic feet produced after mixing are three different quantities. Compare purchases only after converting them to the same volume basis.",
    refs:[
      {label:"QUIKRETE Concrete Mix data sheet",url:"https://www.quikrete.com/pdfs/data_sheet-concrete%20mix%201101.pdf",use:"Published yields of standard 40-, 60- and 80-pound Concrete Mix bags"},
      {label:"NIST Guide to SI conversions",url:"https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors",use:"Exact international foot and yard definitions"}
    ]
  },
  "gravel-cubic-yard-calculator":{
    slug:"gravel-cubic-yard-calculator",
    category:"Aggregate selection & ordering",
    headline:"How many yards of gravel do I need?",
    answer:"Find the finished gravel layer's surface area and depth. Multiply square feet by depth in inches, then divide by 324. Convert the resulting cubic yards into tons only if you have a density that applies to that particular aggregate and volume state.",
    answerNote:"A compacted base layer is not the same thing as a loose truckload. The difference depends on the chosen gradation, moisture content and project compaction requirement.",
    practicalTitle:"Gravel takeoff scenarios for different surfaces",
    practicalIntro:"These examples distinguish volume calculation from aggregate selection. They do not prescribe a suitable base thickness or material for every site.",
    scenarios:[
      {name:"Straight driveway",measure:"60 × 12 ft × 4 in",result:"8.89 yd³",reason:"720 sq ft × 4 in ÷ 324. Confirm whether the 4-inch requirement describes finished compacted thickness."},
      {name:"Walking path",measure:"35 × 3 ft × 3 in",result:"0.97 yd³",reason:"105 sq ft × 3 in ÷ 324. An open-graded path stone may behave differently from dense-graded base."},
      {name:"Drainage strip",measure:"50 × 2 ft × 8 in",result:"2.47 yd³",reason:"100 sq ft × 8 in ÷ 324. Verify that the chosen clean aggregate is appropriate for the drainage design."}
    ],
    decisionTitle:"Which gravel or crushed-stone product is suitable?",
    decisionIntro:"Volume alone cannot establish whether a product will compact, drain or remain stable under traffic.",
    choices:[
      {need:"Compacted driveway base",use:"Specified dense-graded aggregate",check:"Gradation, lift thickness, drainage and required compaction"},
      {need:"Free-draining stone layer",use:"Specified clean/open-graded stone",check:"Void space, separator fabric, surrounding soils and outlet"},
      {need:"Decorative walk or bed",use:"Selected pea gravel, river rock or angular chip",check:"Walking comfort, containment and stability"},
      {need:"Supplier quotes in tons",use:"Cubic yards × product-specific short tons/yd³",check:"Density measured in the correct loose or compacted state"}
    ],
    stepsTitle:"What to verify on a gravel quotation",
    orderSteps:[
      {title:"Name the exact aggregate",detail:"Ask for gradation and stone size; 'gravel' alone may not describe a consistent product."},
      {title:"Confirm finished depth versus delivery state",detail:"The specified layer might be compacted; the truck may supply loose stone. Obtain the applicable project conversion."},
      {title:"Identify the billing unit",detail:"A short ton is 2,000 pounds. Ask whether the quote is per cubic yard, per short ton or per truck."},
      {title:"Check haul limitations",detail:"Truck payload, weight limits, access and minimum delivery fees can change the practical number of loads."}
    ],
    distinction:"Dense-graded aggregate can contain fines for stability; clean open-graded stone is selected for other applications such as drainage. Do not swap the products merely because both are sold by the cubic yard.",
    refs:[
      {label:"FHWA Granular Base guidance",url:"https://www.fhwa.dot.gov/publications/research/infrastructure/structures/97148/app3.cfm",use:"Aggregate gradation, particle shape, stability and drainage properties"},
      {label:"NIST conversion factors",url:"https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors",use:"Measurement reference for cubic yards"}
    ]
  },
  "mulch-cubic-yard-calculator":{
    slug:"mulch-cubic-yard-calculator",
    category:"Beds, rings & bag counts",
    headline:"How much mulch should you buy for garden beds?",
    answer:"Measure the area that will actually receive mulch, multiply square feet by the additional depth in inches and divide by 324. For an existing bed, use the depth you are adding, not the total target depth, after checking the current layer.",
    answerNote:"One cubic yard equals 27 cubic feet. You can compare it with two-cubic-foot or three-cubic-foot bag labels, but don't assume every bed needs a completely new layer each season.",
    practicalTitle:"Three mulch estimates for common landscape jobs",
    practicalIntro:"Notice how the desired new depth, a tree-ring opening and bag rounding change the material order.",
    scenarios:[
      {name:"Top up an existing bed",measure:"14 × 8 ft; add 1 in",result:"0.35 yd³",reason:"112 sq ft × 1 in ÷ 324. That is 9.33 ft³, or five whole 2-ft³ bags by labeled volume."},
      {name:"Circular bed",measure:"10 ft diameter; 2 in deep",result:"0.48 yd³",reason:"π × 5² sq ft × 2 in ÷ 324. Measure the diameter, not the radius, at the outer edge."},
      {name:"Tree ring with open center",measure:"Outer radius 6 ft, inner radius 1 ft; 2.5 in",result:"0.85 yd³",reason:"π × (6² − 1²) × 2.5 ÷ 324. The inner circle is excluded; root flare must remain clear."}
    ],
    decisionTitle:"Bulk mulch or bags: compare the same volume",
    decisionIntro:"The cheapest quoted bag price is not necessarily the cheapest price per cubic yard. Start with a common volume unit.",
    choices:[
      {need:"Small, scattered beds",use:"Whole bags labeled by cubic feet",check:"Number of bags and carrying distance"},
      {need:"Large connected beds",use:"Bulk cubic-yard delivery",check:"Delivery minimum, dump location and access"},
      {need:"Fresh mulch layer",use:"Full area × intended new depth",check:"Plant-appropriate depth and clear trunks"},
      {need:"Seasonal top-up",use:"Only the depth missing",check:"Measure existing material in several spots"}
    ],
    stepsTitle:"How to keep a mulch estimate practical",
    orderSteps:[
      {title:"Exclude unmulched features",detail:"Subtract paving stones, bed openings and circular areas you will leave clear."},
      {title:"Measure what already exists",detail:"Top up to the appropriate final depth rather than automatically adding a full new 3-inch layer."},
      {title:"Convert to bags only at the end",detail:"Multiply cubic yards by 27 to obtain cubic feet, divide by the package volume and round up whole bags."},
      {title:"Protect stems and root flares",detail:"Do not pile fresh mulch against trunks; use plant-specific guidance for safe placement."}
    ],
    distinction:"Mulch coverage describes a surface layer; it does not tell you the soil volume needed to create a planting bed. For growing medium, use the topsoil estimator instead.",
    refs:[
      {label:"University of Minnesota mulch guide",url:"https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/mulching-for-soil-and-garden-health",use:"General mulch depth and application practices"},
      {label:"University of Minnesota tree care",url:"https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/watering-newly-planted-trees-and-shrubs",use:"Root-flare clearance and avoiding excess mulch around newly planted trees"}
    ]
  },
  "topsoil-cubic-yard-calculator":{
    slug:"topsoil-cubic-yard-calculator",
    category:"Growing soil & lawn preparation",
    headline:"How much topsoil is needed for a lawn or garden?",
    answer:"Measure the area to receive topsoil and specify the new layer's finished depth. Multiply square feet by depth in inches and divide by 324. Choose the depth based on whether you are preparing a new growing area, lightly topdressing existing turf or filling a raised bed.",
    answerNote:"Topsoil is a growing medium, not necessarily suitable engineered fill. Its texture, organic matter, moisture and settled thickness affect both how it performs and how much loose product you need delivered.",
    practicalTitle:"Topsoil examples for three different objectives",
    practicalIntro:"These jobs are not interchangeable: a full new-lawn layer is substantially larger than an established-lawn topdressing.",
    scenarios:[
      {name:"New lawn soil layer",measure:"40 × 25 ft × 4 in",result:"12.35 yd³",reason:"1,000 sq ft × 4 in ÷ 324. A desired firmed/settled depth can require supplier-specific allowance."},
      {name:"Light topdressing calculation",measure:"500 sq ft × 0.25 in",result:"0.39 yd³",reason:"500 × 0.25 ÷ 324. This is a math example only; verify whether this application depth is suitable for your turf."},
      {name:"Unfilled raised bed",measure:"Inside 4 × 8 ft × 10 in",result:"0.99 yd³",reason:"4 × 8 × 10 ÷ 324. Subtract space already occupied by soil or other planned layers."}
    ],
    decisionTitle:"Topsoil, compost or fill: select by the job",
    decisionIntro:"A product's name alone does not establish whether it is suitable for growing plants, grade changes or an engineered base.",
    choices:[
      {need:"New turf or planting surface",use:"Suitable topsoil or specified planting blend",check:"Texture, drainage, screened debris and soil tests"},
      {need:"Established-lawn topdressing",use:"Compatible material applied in a shallow layer",check:"Grass exposure, turf type and maintenance guidance"},
      {need:"Raised vegetable or flower bed",use:"Plant-appropriate growing mix",check:"Inside dimensions, final fill depth and components"},
      {need:"Structural grade increase",use:"Specified suitable fill material",check:"Engineering requirements, not generic topsoil"}
    ],
    stepsTitle:"What to check before buying topsoil",
    orderSteps:[
      {title:"Match the application",detail:"Distinguish a new lawn, topdressing, a vegetable bed and a grade correction before choosing depth and product."},
      {title:"Request a representative product description",detail:"Ask about screening, soil texture, organic matter, debris and testing where available."},
      {title:"Determine the volume state",detail:"Find out if the seller quotes loose delivered yards, and how the product might settle to the desired finished depth."},
      {title:"Review the existing soil",detail:"Soil testing and site drainage can be more useful than purchasing more material without a clear need."}
    ],
    distinction:"A planting bed may benefit from soil blending or amendments, but replacing soil and adding compost are different calculations. Don't multiply the site area by an arbitrary depth without first defining the work.",
    refs:[
      {label:"Penn State Extension lawn establishment",url:"https://extension.psu.edu/lawn-establishment",use:"New lawn topsoil depth, soil preparation and drainage guidance"},
      {label:"NIST volume conversion reference",url:"https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors",use:"Exact volume measurement relationship"}
    ]
  },
  "fill-dirt-cubic-yard-calculator":{
    slug:"fill-dirt-cubic-yard-calculator",
    category:"Earthwork volumes & backfill",
    headline:"How much fill dirt do I need for grading or a trench?",
    answer:"Calculate the volume of the void or finished fill in cubic yards, using measured dimensions or cross sections. A level rectangular space uses length × width × depth in inches ÷ 324. Before ordering loose material, determine whether the planned quantity is bank, loose or compacted volume.",
    answerNote:"A geometric fill quantity is not an earthwork mass-balance report. Soil swell, shrinkage, loss, reuse suitability and specified compaction must be determined from site-specific information.",
    practicalTitle:"Fill dirt estimates for three kinds of earthwork",
    practicalIntro:"The physical spaces below are distinct; they illustrate why backfill cannot always be calculated as one uniform rectangular layer.",
    scenarios:[
      {name:"Level area raised",measure:"30 × 18 ft × 8 in",result:"13.33 yd³",reason:"540 sq ft × 8 in ÷ 324. This is geometric finished fill space, not automatically loose delivered yards."},
      {name:"Linearly tapered fill",measure:"40 × 20 ft; depth 0–9 in",result:"11.11 yd³",reason:"For a true linear taper, average depth is 4.5 in. Volume = 800 × 4.5 ÷ 324."},
      {name:"Gross trench void",measure:"45 ft × 2 ft × 2.5 ft",result:"8.33 yd³",reason:"45 × 2 × 2.5 ÷ 27. Subtract pipes, structures, specified bedding and other occupied space for net soil backfill."}
    ],
    decisionTitle:"Bank, loose and compacted: choose the right volume state",
    decisionIntro:"These terms refer to how the same material is measured at different stages; they cannot be converted with one universally valid factor.",
    choices:[
      {need:"Undisturbed cut volume",use:"Bank cubic yards (BCY)",check:"Original surveyed in-place earth"},
      {need:"Excavated stockpile or delivery",use:"Loose cubic yards (LCY)",check:"Swell and the supplier's load measurement"},
      {need:"Finished placed fill",use:"Compacted cubic yards (CCY)",check:"Target grade and specified field density"},
      {need:"Cut-and-fill balance",use:"Project-adjusted BCY to CCY relationship",check:"Geotechnical shrink/swell factor and unsuitable losses"}
    ],
    stepsTitle:"Questions before ordering fill material",
    orderSteps:[
      {title:"Is the target quantity geometric, bank, loose or compacted?",detail:"Use the right volume state when interpreting supplier truckloads and engineering plans."},
      {title:"Will the soil be reused or imported?",detail:"Verify suitability and any segregation or disposal needs for excavated material."},
      {title:"Have pipes, structures and bedding been deducted?",detail:"Backfill is the remaining void, not automatically the gross trench excavation."},
      {title:"Does the project require engineered grading?",detail:"Significant earthwork, structural pads, retaining walls or utility trenches may require qualified design, testing and safety procedures."}
    ],
    distinction:"Growing topsoil and structural fill serve different purposes. The fill-dirt calculator estimates a volume, but it cannot establish material suitability, stability or a safe trench design.",
    refs:[
      {label:"FHWA Earthwork Representation Guidelines",url:"https://highways.fhwa.dot.gov/federal-lands/design/tools/cfl/earthwork-representation-guide.pdf",use:"Bank-to-compacted calculations and geotechnical shrink/swell recommendations"},
      {label:"NIST measurement definitions",url:"https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors",use:"Standard unit-conversion reference"}
    ]
  }
};
