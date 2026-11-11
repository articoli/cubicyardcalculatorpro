import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { FAQ, HubLinks } from "@/components/Sections";
import { SITE } from "@/lib/site";

const url = SITE.url + "/";

export const metadata: Metadata = {
  title: "Cubic Yard Calculator – Concrete, Gravel, Mulch & Soil",
  description: "Free cubic yard calculator for concrete, gravel, mulch and soil. Calculate yardage from feet, inches or square footage, with formulas and coverage charts.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url,
    siteName: SITE.name,
    title: "Cubic Yard Calculator | Free Material Volume Estimator",
    description: "Calculate cubic yards for construction and landscaping. Check volume formulas, coverage by depth, material ordering tips and worked examples.",
  },
};

const coverage = [
  { depth: 1, one: 324, two: 648, label: "Thin layer" },
  { depth: 2, one: 162, two: 324, label: "Common landscape layer" },
  { depth: 3, one: 108, two: 216, label: "Common mulch reference" },
  { depth: 4, one: 81, two: 162, label: "Thicker material layer" },
  { depth: 6, one: 54, two: 108, label: "Deeper fill" },
  { depth: 12, one: 27, two: 54, label: "One-foot depth" },
];

const areaRows = [100, 200, 300, 500, 1000];
const areaDepths = [2, 3, 4, 6];
const format = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

const materialItems = [
  {
    label: "Concrete",
    category: "SLABS & POURS",
    icon: "▤",
    url: "/concrete-cubic-yard-calculator/",
    title: "Concrete Cubic Yard Calculator",
    copy: "Estimate ready-mix concrete for a patio, slab or pad from its footprint and thickness. Footings, thickened edges and post holes need separate measurements; bagged concrete requires the yield on the product label.",
    related: "Slab thickness · ready-mix · footings",
  },
  {
    label: "Gravel",
    category: "DRIVEWAYS & BASES",
    icon: "◈",
    url: "/gravel-cubic-yard-calculator/",
    title: "Gravel Cubic Yard Calculator",
    copy: "Plan a gravel driveway, pathway or stone base using the required finished depth. If your supplier quotes crushed stone by the ton, convert volume using that specific aggregate's bulk density.",
    related: "Crushed stone · aggregate · compaction",
  },
  {
    label: "Mulch",
    category: "LANDSCAPE BEDS",
    icon: "❋",
    url: "/mulch-cubic-yard-calculator/",
    title: "Mulch Cubic Yard Calculator",
    copy: "Calculate bark or wood mulch for rectangular and circular planting beds. Compare bulk deliveries with bags labeled in cubic feet, and account for the existing layer when topping up.",
    related: "Coverage depth · garden beds · bags",
  },
  {
    label: "Topsoil",
    category: "GARDENS & LAWNS",
    icon: "♣",
    url: "/topsoil-cubic-yard-calculator/",
    title: "Topsoil Cubic Yard Calculator",
    copy: "Estimate soil for new planting beds, raised lawn areas or topdressing. The finished depth and soil blend matter, and loose delivered soil may settle after placement.",
    related: "Soil depth · lawn leveling · settling",
  },
  {
    label: "Fill dirt",
    category: "BACKFILL & GRADING",
    icon: "▦",
    url: "/fill-dirt-cubic-yard-calculator/",
    title: "Fill Dirt Cubic Yard Calculator",
    copy: "Estimate backfill volume for a measured space or a change in grade. Distinguish the finished compacted volume from loose truck-delivered fill when planning larger earthwork jobs.",
    related: "Backfill · excavation · compacted volume",
  },
];

const examples = [
  {
    category: "GARDEN BED",
    title: "Mulch for a 12 × 10 ft bed",
    dimensions: "12 ft × 10 ft × 3 in",
    arithmetic: "(12 × 10 × 3) ÷ 324",
    volume: "1.11 yd³",
    interpretation: "That is 30 cubic feet of mulch. It equals fifteen 2-cubic-foot bags by labeled volume, before any extra allowance.",
    link: "/mulch-cubic-yard-calculator/",
    linkLabel: "Estimate mulch",
  },
  {
    category: "DRIVEWAY",
    title: "Gravel for a 40 × 10 ft driveway",
    dimensions: "40 ft × 10 ft × 4 in",
    arithmetic: "(40 × 10 × 4) ÷ 324",
    volume: "4.94 yd³",
    interpretation: "This is the geometric volume at a uniform 4-inch depth, not a guaranteed loose delivery quantity or weight.",
    link: "/gravel-cubic-yard-calculator/",
    linkLabel: "Estimate gravel",
  },
  {
    category: "PATIO",
    title: "Concrete for a 15 × 12 ft patio",
    dimensions: "15 ft × 12 ft × 4 in",
    arithmetic: "(15 × 12 × 4) ÷ 324",
    volume: "2.22 yd³",
    interpretation: "Check slab thickness, edges and subgrade before choosing a ready-mix order quantity.",
    link: "/concrete-cubic-yard-calculator/",
    linkLabel: "Estimate concrete",
  },
  {
    category: "TOPSOIL",
    title: "Soil for a 25 × 20 ft lawn area",
    dimensions: "25 ft × 20 ft × 2 in",
    arithmetic: "(25 × 20 × 2) ÷ 324",
    volume: "3.09 yd³",
    interpretation: "A uniform 2-inch soil layer has this volume before settling, contouring or supplier recommendations.",
    link: "/topsoil-cubic-yard-calculator/",
    linkLabel: "Estimate topsoil",
  },
];

const faqs = [
  {
    question: "How do you calculate cubic yards from feet and inches?",
    answer: "Multiply length in feet by width in feet by depth in inches, then divide by 324. For a 20-foot by 10-foot area at 4 inches deep, 20 × 10 × 4 ÷ 324 = about 2.47 cubic yards. If all three dimensions are in feet, divide their product by 27 instead. Keep measurement units consistent.",
  },
  {
    question: "How many cubic feet are in one cubic yard?",
    answer: "Exactly 27 cubic feet. One yard is three feet, so a cube measuring 3 feet by 3 feet by 3 feet has 27 cubic feet of volume. To change cubic feet into cubic yards, divide by 27; to convert cubic yards into cubic feet, multiply by 27.",
  },
  {
    question: "How many square feet does one cubic yard cover?",
    answer: "Coverage depends on thickness. One cubic yard covers 324 square feet at 1 inch deep, 162 at 2 inches, 108 at 3 inches, or 81 at 4 inches. The formula is 324 ÷ depth in inches. These are mathematical coverage values and do not include settling, spillage or compaction.",
  },
  {
    question: "How many cubic yards do I need for a 10 × 10 foot area?",
    answer: "A 10 × 10 foot area is 100 square feet, but you still need a depth. At 2 inches deep it needs about 0.62 cubic yard; at 3 inches, about 0.93; and at 4 inches, about 1.23. Multiply 100 by the depth in inches and divide by 324.",
  },
  {
    question: "Can I convert square feet to cubic yards without a depth?",
    answer: "No. Square feet describe a flat area; cubic yards describe three-dimensional volume. To convert, supply a thickness or fill depth. For example, 500 square feet covered 3 inches deep equals (500 × 3) ÷ 324, or approximately 4.63 cubic yards.",
  },
  {
    question: "How many 2-cubic-foot bags are in a cubic yard?",
    answer: "One cubic yard equals 27 cubic feet, so 27 ÷ 2 = 13.5 bags by labeled volume. Since bags are generally sold whole, you would purchase 14 two-cubic-foot bags to meet at least one cubic yard before any added allowance. Check the package volume, not only its weight.",
  },
  {
    question: "How many tons are in a cubic yard of gravel or dirt?",
    answer: "There is no universal answer. Cubic yards measure volume and US short tons measure weight. You need the specific material's bulk density, which varies with gradation, moisture and how tightly it is packed. Ask your supplier for tons per cubic yard and use that factor for a reliable order estimate.",
  },
  {
    question: "How do I calculate cubic yards for a circular area?",
    answer: "Measure the circle's diameter in feet and divide it by two to find the radius. Multiply π by radius squared to find square feet, then multiply by the material depth in inches and divide by 324. For a 10-foot-diameter circle at 3 inches deep, the volume is about 0.73 cubic yard.",
  },
  {
    question: "Are cubic yards, square yards and linear yards the same?",
    answer: "No. A linear yard measures length, a square yard measures area, and a cubic yard measures volume. One cubic yard can be visualized as a three-foot cube. You cannot convert an area or length directly to cubic yards without enough additional dimensions to calculate volume.",
  },
  {
    question: "Should I add 10% extra material to my cubic yard estimate?",
    answer: "Not automatically. A simple percentage may help with some installation waste, but it is not a universal compaction or settlement factor. Concrete, decorative mulch, gravel base and structural fill require different planning assumptions. Check finished depth, surface irregularities, material state, supplier rounding and any project specification before choosing an allowance.",
  },
  {
    question: "Is it cheaper to buy bulk material or bags?",
    answer: "It depends on the total quantity, bag size, price per bag, bulk price per cubic yard, delivery charges and unloading requirements. Convert both options to the same volume before comparing. A large bulk load can have a lower material price but still cost more for a small project after delivery fees.",
  },
  {
    question: "Why does my delivered soil or gravel volume differ from my calculation?",
    answer: "Your calculation describes a geometric space at a specified depth. The delivery may be measured in a loose state, and soil or aggregate can settle or compact after placement. Uneven grade, excavated voids, moisture and supplier measurement methods also affect the result. Confirm which volume state the supplier quotes.",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": url + "#webpage",
      url,
      name: "Cubic Yard Calculator – Concrete, Gravel, Mulch & Soil",
      description: "A free cubic yard volume calculator and guide to measuring dimensions, estimating material quantities and converting units for construction and landscaping.",
      inLanguage: "en-US",
      isPartOf: { "@id": url + "#website" },
      mainEntity: { "@id": url + "#calculator" },
      about: [
        { "@type": "Thing", name: "Cubic yard" },
        { "@type": "Thing", name: "Volume measurement" },
        { "@type": "Thing", name: "Construction material estimation" },
        { "@type": "Thing", name: "Landscaping material estimation" },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": url + "#calculator",
      url,
      name: "Cubic Yard Calculator Pro",
      description: "Free browser-based cubic yard calculator for rectangular and circular areas, material volume, approximate weight and cost estimates.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any modern web browser",
      browserRequirements: "Requires JavaScript for interactive calculations",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Cubic yard calculation from length, width and depth",
        "Rectangle and circle volume calculations",
        "Cubic feet equivalents",
        "Editable material density estimates",
        "Optional allowance and material price estimation",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">FREE VOLUME & MATERIAL ESTIMATOR</span>
            <h1>Cubic Yard <span>Calculator</span></h1>
            <p className="hero-lead">
              Calculate cubic yards for concrete, gravel, mulch, topsoil and fill dirt. Enter
              your length, width and depth to estimate the volume of a driveway, slab,
              garden bed or other project in seconds.
            </p>
            <div className="hero-points">
              <span>✓ Feet and inches</span><span>✓ Rectangles and circles</span><span>✓ Material estimates</span>
            </div>
            <a className="hero-btn" href="#calculator">Calculate cubic yards <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="cube-top" /><div className="cube-left" /><div className="cube-right" />
            <div className="visual-measure visual-height">3 ft</div>
            <div className="visual-measure visual-width">3 ft</div>
            <div className="visual-tag"><strong>1 yd³</strong><span>= 27 cubic feet</span></div>
          </div>
        </div>
      </section>

      <div className="container main-content home-content">
        <div className="calculator-anchor" id="calculator">
          <Calculator initialMaterial="gravel" />
        </div>

        <div className="trust-strip" aria-label="Calculator highlights">
          <span>Free online tool</span><span>Transparent formulas</span>
          <span>Editable density</span><span>No signup</span>
        </div>

        <nav className="hub-jump-nav" aria-label="On this page">
          <strong>Jump to:</strong>
          <a href="#how-to-use">How to use</a>
          <a href="#formula">Formula</a>
          <a href="#coverage">Coverage chart</a>
          <a href="#materials">Materials</a>
          <a href="#examples">Examples</a>
          <a href="#faqs">FAQs</a>
        </nav>

        <section id="how-to-use" className="content-block home-intro">
          <div className="section-label">START WITH YOUR MEASUREMENTS</div>
          <h2>How to Use the Cubic Yard Calculator</h2>
          <p>
            Our <strong>cubic yardage calculator</strong> determines how much three-dimensional
            space a project occupies. The most common inputs are length and width in feet
            and material thickness in inches. It then expresses the result in cubic yards
            (yd³) and cubic feet (ft³), helping you check quantities before ordering bulk
            construction or landscaping materials.
          </p>
          <ol className="hub-steps">
            <li><span>1</span><div><strong>Measure the footprint.</strong><p>Enter the length and width in feet. For a circular bed, select the circle option and enter its diameter.</p></div></li>
            <li><span>2</span><div><strong>Choose the required depth.</strong><p>Use the actual thickness you need in inches, such as a 3-inch mulch layer or a 4-inch slab. Do not confuse inches with feet.</p></div></li>
            <li><span>3</span><div><strong>Review the volume.</strong><p>The tool calculates cubic yards and cubic feet. These are measures of volume, not weight or surface area.</p></div></li>
            <li><span>4</span><div><strong>Plan your order.</strong><p>Select a material for an illustrative tonnage estimate, edit the density if your supplier provides one, and enter a price per cubic yard if needed.</p></div></li>
          </ol>
          <p>
            An optional allowance can be added for planning, but <strong>the calculated
            space and the purchased quantity are not always identical</strong>.
            Ground irregularities, installation waste, delivery units and compaction may
            need separate consideration. For projects measured only in square feet, try
            the <Link href="/square-feet-to-cubic-yards/">square feet to cubic yards calculator</Link>.
          </p>
        </section>

        <section id="formula" className="content-block">
          <div className="section-label">CUBIC YARD FORMULA</div>
          <h2>How to Calculate Cubic Yards</h2>
          <p>
            A cubic yard is a unit of <strong>volume</strong>. To calculate cubic yards,
            first find the volume of the space in a consistent set of measurement units,
            then convert that volume into cubic yards. For rectangular spaces, the
            calculation begins with <strong>length × width × height or depth</strong>.
            The correct divisor depends on how the depth is recorded.
          </p>
          <div className="formula-grid hub-formulas">
            <div className="formula-card">
              <span>All dimensions in feet</span>
              <strong>Cubic yards = (L × W × D) ÷ 27</strong>
              <small>Example: 9 ft × 6 ft × 1.5 ft ÷ 27 = 3 yd³</small>
            </div>
            <div className="formula-card">
              <span>Length and width in feet, depth in inches</span>
              <strong>Cubic yards = (L × W × D) ÷ 324</strong>
              <small>Example: 12 ft × 10 ft × 3 in ÷ 324 = 1.11 yd³</small>
            </div>
          </div>
          <h3>Why divide by 27 or 324?</h3>
          <p>
            One yard equals three feet. A cube that is three feet on each edge contains
            3 × 3 × 3 = <strong>27 cubic feet</strong>. Therefore, dividing cubic feet by
            27 gives cubic yards. If the depth is in inches, the divisor becomes 27 × 12,
            or <strong>324</strong>, because there are twelve inches in a foot.
          </p>
          <h3>How to find cubic yards from square footage</h3>
          <p>
            If you already know the surface area, use
            <strong> cubic yards = square feet × depth in inches ÷ 324</strong>.
            For example, a 200-square-foot area covered 4 inches deep requires
            (200 × 4) ÷ 324 = <strong>2.47 cubic yards</strong>, before any additional
            material allowance. Area by itself cannot be converted to cubic yards:
            you also need the depth.
          </p>
          <p>
            For additional shapes, unit handling and step-by-step examples,
            see <Link href="/how-to-calculate-cubic-yards/">how to calculate cubic yards</Link>.
          </p>
        </section>

        <section id="definition" className="content-block">
          <div className="section-label">MEASUREMENT BASICS</div>
          <h2>What Is a Cubic Yard?</h2>
          <p>
            A <strong>cubic yard (yd³)</strong> is the volume inside a cube that is one
            yard long, one yard wide and one yard high. Each edge measures three feet,
            so the entire cube contains 27 cubic feet. Cubic yards are used in the
            United States for bulk quantities of concrete, gravel, crushed stone,
            mulch, topsoil, sand and fill material.
          </p>
          <p>
            Cubic yards describe <em>how much space</em> a material occupies. They do not
            tell you how heavy it is. One cubic yard of wood mulch and one cubic yard
            of gravel occupy the same volume, but their weights differ because their
            bulk densities differ. Likewise, a <strong>square yard</strong> measures a
            flat surface and a <strong>linear yard</strong> measures length; neither is
            interchangeable with a cubic yard without additional dimensions.
          </p>
          <div className="hub-facts" aria-label="Cubic yard key facts">
            <div><strong>27</strong><span>cubic feet (ft³)</span></div>
            <div><strong>46,656</strong><span>cubic inches (in³)</span></div>
            <div><strong>0.7646</strong><span>cubic meters (m³), rounded</span></div>
          </div>
          <p>
            Read <Link href="/what-is-a-cubic-yard/">what is a cubic yard?</Link> for
            more visual examples and an explanation of volume versus area.
          </p>
        </section>

        <section id="conversions" className="content-block">
          <div className="section-label">UNITS & EQUIVALENTS</div>
          <h2>Cubic Yard Conversion Chart</h2>
          <p>
            These are standard volume conversions, so they remain the same whether
            you are measuring soil, water, stone or an empty container. Use the
            reference table to compare supplier quotes, metric drawings or material
            packaging. Weight conversion is different and requires density.
          </p>
          <div className="table-scroll">
            <table>
              <caption className="hub-table-caption">Volume equivalents for exactly one cubic yard</caption>
              <thead><tr><th scope="col">Measurement</th><th scope="col">Equivalent to 1 yd³</th></tr></thead>
              <tbody>
                <tr><td>Cubic feet</td><td>27 ft³</td></tr>
                <tr><td>Cubic inches</td><td>46,656 in³</td></tr>
                <tr><td>Cubic meters</td><td>0.764554857984 m³</td></tr>
                <tr><td>Liters</td><td>764.554857984 L</td></tr>
                <tr><td>Cube dimensions</td><td>3 ft × 3 ft × 3 ft</td></tr>
              </tbody>
            </table>
          </div>
          <div className="hub-link-grid" aria-label="Volume conversion tools">
            <Link href="/cubic-feet-to-cubic-yards/"><span><b>Cubic feet to cubic yards</b><small>Convert ft³ and yd³ both ways</small></span><span aria-hidden="true">↗</span></Link>
            <Link href="/square-feet-to-cubic-yards/"><span><b>Square feet to cubic yards</b><small>Calculate volume from area and depth</small></span><span aria-hidden="true">↗</span></Link>
            <Link href="/cubic-meters-to-cubic-yards/"><span><b>Cubic meters to cubic yards</b><small>Convert between m³ and yd³</small></span><span aria-hidden="true">↗</span></Link>
            <Link href="/cubic-yards-to-tons/"><span><b>Cubic yards to tons</b><small>Estimate weight with material density</small></span><span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section id="coverage" className="content-block">
          <div className="section-label">COVERAGE BY THICKNESS</div>
          <h2>How Much Area Does One Cubic Yard Cover?</h2>
          <p>
            The square footage covered by one cubic yard depends entirely on the
            <strong> spreading depth</strong>. A thin layer covers more ground than
            a thick one. For any uniform layer,
            <strong> coverage in square feet = cubic yards × 324 ÷ depth in inches</strong>.
          </p>
          <div className="hub-note"><strong>Quick answer:</strong> One cubic yard covers <b>108 square feet at 3 inches deep</b>, 162 square feet at 2 inches, or 81 square feet at 4 inches. These are geometric quantities before waste or settlement.</div>
          <div className="table-scroll">
            <table>
              <caption className="hub-table-caption">Theoretical area covered by 1 or 2 cubic yards at a uniform depth</caption>
              <thead>
                <tr><th scope="col">Material depth</th><th scope="col">1 yd³ covers</th><th scope="col">2 yd³ cover</th></tr>
              </thead>
              <tbody>
                {coverage.map(row => <tr key={row.depth}>
                  <td>{row.depth} {row.depth === 1 ? "inch" : "inches"}</td>
                  <td>{row.one.toLocaleString("en-US")} sq ft</td>
                  <td>{row.two.toLocaleString("en-US")} sq ft</td>
                </tr>)}
              </tbody>
            </table>
          </div>
          <p>
            For landscaping, spread depth is especially important: the
            <a href="https://gardeningsolutions.ifas.ufl.edu/care/planting/mulch/" target="_blank" rel="noopener noreferrer"> University of Florida IFAS Extension mulch guide</a> explains how
            coverage changes with thickness. A recommended mulch depth for
            one application does not establish the proper thickness for gravel
            bases, soil grading or concrete slabs.
          </p>
          <h3>How many cubic yards do I need for 100, 200 or 500 square feet?</h3>
          <p>
            Use the following yardage table when you know an area in square feet
            but still need to choose the fill depth. Values are rounded to
            hundredths of a cubic yard and exclude ordering allowances.
          </p>
          <div className="table-scroll">
            <table>
              <caption className="hub-table-caption">Cubic yards required by area and layer depth</caption>
              <thead>
                <tr><th scope="col">Area</th>{areaDepths.map(depth => <th scope="col" key={depth}>{depth} in deep</th>)}</tr>
              </thead>
              <tbody>
                {areaRows.map(area => <tr key={area}>
                  <td>{area.toLocaleString("en-US")} sq ft</td>
                  {areaDepths.map(depth => <td key={depth}>{format(area * depth / 324)} yd³</td>)}
                </tr>)}
              </tbody>
            </table>
          </div>
          <p>
            The detailed <Link href="/cubic-yard-coverage-chart/">cubic yard coverage chart</Link> covers
            additional depths and practical applications.
          </p>
        </section>

        <section id="materials" className="content-block hub-wide">
          <div className="section-label">CONSTRUCTION & LANDSCAPING</div>
          <h2>Calculate Cubic Yards for Different Materials</h2>
          <p className="hub-narrow">
            The <strong>volume formula</strong> is the same regardless of material,
            but the correct ordering method changes. Concrete is generally quoted
            in cubic yards, crushed stone may be sold by the ton, mulch often comes
            in bulk or cubic-foot bags, and soil or fill dirt can settle or compact.
            The dedicated tools below address these material-specific questions.
          </p>
          <div className="hub-material-grid">
            {materialItems.map((material, index) => <article className="hub-material-card" key={material.url}>
              <div className={"material-symbol material-" + index} aria-hidden="true">{material.icon}</div>
              <div>
                <span className="hub-card-kicker">{material.category}</span>
                <h3>{material.label} Yardage</h3>
                <p>{material.copy}</p>
                <div className="hub-related">{material.related}</div>
                <Link href={material.url} aria-label={"Open " + material.title}>{material.title} <span aria-hidden="true">↗</span></Link>
              </div>
            </article>)}
          </div>
          <div className="hub-inline-aside">
            <strong>What about sand, compost or landscape rock?</strong>
            <p>Calculate their geometric volume with the main tool. For weight, use a supplier-specific bulk density; bags and loads must be compared by their labeled units. Specialized calculators for these materials can be added as the resource expands.</p>
          </div>
        </section>

        <section id="shapes" className="content-block">
          <div className="section-label">RECTANGLES, CIRCLES & IRREGULAR AREAS</div>
          <h2>How to Calculate Yardage for Different Shapes</h2>
          <p>
            A standard length × width × depth calculation works for rectangular
            spaces with reasonably uniform thickness. For other layouts,
            calculate the surface area of the shape first, then multiply by depth
            to obtain volume. Use consistent units throughout.
          </p>
          <div className="hub-shapes">
            <div><span>01</span><h3>Rectangles and squares</h3><p>Surface area = length × width. Multiply by depth in inches and divide by 324. Use this for slab pads, straight paths and rectangular beds.</p></div>
            <div><span>02</span><h3>Circles and round beds</h3><p>Surface area = π × radius². The radius is half the measured diameter. Multiply by depth in inches and divide by 324.</p></div>
            <div><span>03</span><h3>Triangles and wedges</h3><p>Area = ½ × base × perpendicular height. Multiply that area by a uniform material depth and convert to cubic yards.</p></div>
            <div><span>04</span><h3>Irregular or sloped areas</h3><p>Break a complex space into measured sections and sum their volumes. For variable depth or significant grading, take multiple elevation measurements rather than assuming one thickness.</p></div>
          </div>
          <p>
            If your project includes an excavation, tapered fill or changing grades,
            this basic calculator is a starting point only. Excavated <em>bank</em>,
            <em> loose</em> and <em>compacted</em> volumes should not be treated as
            identical.
          </p>
        </section>

        <section id="examples" className="content-block hub-wide">
          <div className="section-label">WORKED CALCULATIONS</div>
          <h2>Real-World Cubic Yard Calculation Examples</h2>
          <p className="hub-narrow">
            The examples below demonstrate the same formula applied to four
            common projects. Their results represent the measured geometric volume,
            not a guaranteed delivery size. Each project can have different
            allowance, density and purchasing considerations.
          </p>
          <div className="hub-examples">
            {examples.map(example => <article className="hub-example" key={example.title}>
              <div className="hub-card-kicker">{example.category}</div>
              <h3>{example.title}</h3>
              <span className="hub-example-dims">{example.dimensions}</span>
              <div className="hub-example-result">{example.volume}</div>
              <div className="hub-example-math">{example.arithmetic}</div>
              <p>{example.interpretation}</p>
              <Link href={example.link}>{example.linkLabel} <span aria-hidden="true">↗</span></Link>
            </article>)}
          </div>
        </section>

        <section id="ordering" className="content-block">
          <div className="section-label">FROM MEASUREMENT TO PURCHASE</div>
          <h2>How Much Material Should You Actually Order?</h2>
          <p>
            Calculating cubic yards gives you a <strong>geometric volume</strong>.
            Purchasing material can involve extra variables: the depth after
            installation, uneven ground, waste, delivery measurements and the
            supplier's order increments. The most useful estimate separates these
            factors instead of hiding them inside a single default percentage.
          </p>
          <div className="hub-order-list">
            <div><strong>Volume</strong><p>Measure the space and calculate yardage. For a uniform layer, square footage multiplied by depth determines cubic volume.</p></div>
            <div><strong>Weight</strong><p>When a supplier quotes by US short ton, multiply cubic yards by the relevant bulk density in short tons per cubic yard. Density depends on the material, moisture and state.</p></div>
            <div><strong>Bags or truckloads</strong><p>Compare cubic feet per bag against 27 cubic feet per cubic yard. Truck capacities may be limited by both volume and permitted payload weight.</p></div>
            <div><strong>Price and delivery</strong><p>Compare the price of equivalent material quantities, then include delivery, minimum orders and unloading costs. An apparent bulk bargain may not suit a very small project.</p></div>
          </div>
          <h3>Example: estimating material cost from cubic yards</h3>
          <p>
            Suppose a calculated project requires 4.94 cubic yards and the supplier
            quotes <strong>$65 per cubic yard</strong>. The arithmetic gives an
            illustrative material cost of 4.94 × $65 ≈ <strong>$321</strong>.
            This is a worked example, <em>not a current local price quote</em>.
            Delivery charges, taxes, rounding to purchasable increments and
            any appropriate allowance are additional.
          </p>
          <p>
            If the supplier charges by weight, use our
            {" "}<Link href="/cubic-yards-to-tons/">cubic yards to tons converter</Link>
            {" "}with the material's documented bulk density before comparing prices.
          </p>
        </section>

        <section id="mistakes" className="content-block">
          <div className="section-label">ACCURACY CHECKLIST</div>
          <h2>Common Cubic Yard Calculator Mistakes to Avoid</h2>
          <ul className="hub-checklist">
            <li><strong>Confusing area with volume.</strong> Square feet describe a surface; a material depth is required to calculate cubic yards.</li>
            <li><strong>Mixing inches and feet.</strong> Use the divisor 324 when the horizontal dimensions are in feet and depth is in inches. Use 27 when all are in feet.</li>
            <li><strong>Using the diameter as the radius.</strong> Circular area uses the radius squared, so a diameter mix-up can overestimate dramatically.</li>
            <li><strong>Assuming all cubic yards weigh the same.</strong> Weight requires a bulk-density factor for the actual material.</li>
            <li><strong>Applying a universal 10% allowance.</strong> Waste, swell, shrinkage, settling and compaction represent different conditions; use project-specific information.</li>
            <li><strong>Ignoring uneven or multi-level areas.</strong> Break a job into sections when depths vary and total the individual cubic volumes.</li>
            <li><strong>Rounding before the final calculation.</strong> Keep precision while multiplying and converting, then round to the supplier's actual selling increments.</li>
          </ul>
        </section>

        <section id="faqs" className="hub-faq-wrap">
          <FAQ items={faqs} />
        </section>

        <section id="methodology" className="content-block hub-methodology">
          <div className="section-label">FORMULAS & SOURCE TRANSPARENCY</div>
          <h2>How Our Cubic Yard Estimates Are Calculated</h2>
          <p>
            Our calculator uses standard geometric formulas and the defined
            relationship <strong>1 yd³ = 27 ft³ = 46,656 in³</strong>.
            The exact international yard is 0.9144 meters, giving
            0.764554857984 cubic meters per cubic yard. Calculations retain
            precision internally and round only the displayed results.
          </p>
          <p>
            Material weight estimates use editable, illustrative densities,
            not fixed universal conversions. The optional extra allowance
            changes the planned quantity but does not calculate a validated
            compaction factor. The tool is intended for planning; verify
            structural work, significant earthwork and order quantities with
            the relevant supplier or project professional.
          </p>
          <div className="hub-source-list">
            <strong>Measurement references and further reading</strong>
            <ul>
              <li><a href="https://www.nist.gov/pml/owm" target="_blank" rel="noopener noreferrer">NIST Office of Weights and Measures</a> — measurement definitions and standards.</li>
              <li><a href="https://gardeningsolutions.ifas.ufl.edu/care/planting/mulch/" target="_blank" rel="noopener noreferrer">University of Florida IFAS Extension</a> — mulch coverage and depth guidance.</li>
              <li><Link href="/calculation-methodology/">Our calculation methodology</Link> — formulas, material density assumptions, rounding and limitations.</li>
            </ul>
          </div>
        </section>

        <HubLinks />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
