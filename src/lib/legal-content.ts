export type LegalDocument={title:string;description:string;effective:string;sections:{h:string;p:string[]}[]};
export const legalDocuments:Record<string,LegalDocument>={
  "privacy-policy": {
    "title": "Privacy Policy",
    "description": "Learn how Cubic Yard Calculator Pro handles calculator inputs, site hosting data and third-party image or analytics requests.",
    "effective": "November 11, 2026",
    "sections": [
      {
        "h": "1. About this website",
        "p": [
          "Cubic Yard Calculator Pro provides free educational measurement tools and construction and landscaping quantity guides at cubicyardcalculatorpro.com. This policy describes the data handling associated with the current site implementation and the services that may be involved when you visit it. The legal identity and contact details of the site operator should be confirmed and published before the site is treated as legally complete."
        ]
      },
      {
        "h": "2. Calculator inputs",
        "p": [
          "Calculator values such as length, width, depth, selected material, density, allowance and entered price are processed in your browser using JavaScript. The current site code does not transmit those inputs to our own application server, store them in an account, or save them in a user profile. Browser tools or extensions may process website activity separately."
        ]
      },
      {
        "h": "3. Hosting and technical data",
        "p": [
          "The site is hosted on Cloudflare Pages. When a browser requests a page, Cloudflare or other network intermediaries may process IP addresses, request timestamps, user-agent information and security or diagnostic information needed for delivery, abuse prevention and troubleshooting. Cloudflare's policies govern its provider-level data processing. We do not control every technical log or retention period maintained by external infrastructure providers."
        ]
      },
      {
        "h": "4. Analytics, cookies and optional integrations",
        "p": [
          "The application source does not currently include a sign-in system, newsletter signup or first-party analytics integration. The Cloudflare Pages dashboard can enable Cloudflare Web Analytics independently of the source code. Cloudflare may inject a measurement script into pages when that feature is enabled. If advertising, Google Analytics, consent-management tools, or other analytics scripts are later added, this policy and any required consent mechanisms should be updated before use.",
          "Essential technical storage or protections may also be provided by the browser or hosting platform. We do not claim that no cookies or technical identifiers can ever be used by these third-party services."
        ]
      },
      {
        "h": "5. Featured photography and external links",
        "p": [
          "Some editorial featured images load from Pexels image-hosting servers. Loading an externally hosted image causes the visitor's browser to contact that third-party provider, which may receive the usual network request information. The site also links to educational and supplier resources; visiting those links is subject to the respective websites' privacy policies. We do not control their content or collection practices."
        ]
      },
      {
        "h": "6. How information is used and shared",
        "p": [
          "The site uses network and hosting services to deliver pages, maintain availability, and protect against abuse. It does not currently offer a user account or a purchase checkout. The website operator does not claim to sell calculator input data. Service providers may process technical data under their own terms, and legal disclosures may be required under applicable law."
        ]
      },
      {
        "h": "7. Your choices and privacy requests",
        "p": [
          "You can choose not to enter optional price or material values and can use standard browser controls for cookies, site data, extensions and external content. Privacy rights vary by jurisdiction and may include rights to request access, correction or deletion of personal data that a controller actually holds. A verified contact address for such requests must be added by the site operator; until then this document does not provide a working privacy-request channel."
        ]
      },
      {
        "h": "8. Children, international access and policy changes",
        "p": [
          "This calculator resource is intended for general audiences and does not knowingly solicit personal information from children. Visitors may access the website from different jurisdictions, and provider infrastructure may process requests in different locations. This policy may be updated if the site's tools, advertising, third-party providers or applicable obligations change."
        ]
      }
    ]
  },
  "terms-of-use": {
    "title": "Terms of Use",
    "description": "Terms governing use of Cubic Yard Calculator Pro, its calculators, educational material and external references.",
    "effective": "November 11, 2026",
    "sections": [
      {
        "h": "1. Acceptance and permitted use",
        "p": [
          "By using Cubic Yard Calculator Pro, you agree to use its free calculation tools and articles for lawful informational and planning purposes. Do not attempt to disrupt availability, exploit site functionality or misrepresent results as a professional certification. If you do not agree to these terms, discontinue using the site."
        ]
      },
      {
        "h": "2. Educational and estimating tools",
        "p": [
          "The calculators estimate geometric volume and, when selected, illustrative material weights, bags or costs. Accurate results depend on correct input units, measurements, product density and site conditions. These tools do not provide engineering services, professional construction design, building-code approval or supplier guarantees. You are responsible for verifying critical calculations with relevant qualified parties."
        ]
      },
      {
        "h": "3. No warranties",
        "p": [
          "The website is provided on an 'as available' and 'as is' basis to the extent permitted by applicable law. We work to provide useful formulas but cannot guarantee that every page, conversion, result or reference will be error-free, suitable for a particular project or continuously available. Nothing in these terms excludes rights that applicable law does not permit to be excluded."
        ]
      },
      {
        "h": "4. Your responsibility for decisions",
        "p": [
          "Material orders, excavations, structures, grading, transportation and installation carry real-world costs and risks. You must confirm dimensions, product specifications, legal requirements, site access and professional recommendations before acting. Decisions based on tool outputs are yours; no calculator can account for every field condition."
        ]
      },
      {
        "h": "5. Website content and attribution",
        "p": [
          "The site's original written articles, design and calculator presentation are provided for personal and reasonable reference use. You may cite the site with attribution and a link; do not republish the full site or present its content as your own without permission. Third-party images and quoted references remain subject to their own licenses and rights."
        ]
      },
      {
        "h": "6. Links and third-party services",
        "p": [
          "The site may link to government agencies, university extension services, construction suppliers and image providers. These links are offered for convenience and reference. The website does not control or endorse every third-party statement, policy or service."
        ]
      },
      {
        "h": "7. Changes and availability",
        "p": [
          "Site pages, tools and terms may be revised as formulas, sources and site operations develop. We may restrict abusive traffic or remove features, subject to applicable law. Continuing to use the site after a posted revision indicates acceptance to the extent legally permitted."
        ]
      },
      {
        "h": "8. Contact and applicable law",
        "p": [
          "Applicable consumer and privacy rights depend on your jurisdiction. The website owner must add a verified public contact method and determine whether jurisdiction-specific legal provisions are needed before treating these draft terms as a final legal instrument. No particular governing jurisdiction is asserted here."
        ]
      }
    ]
  },
  "disclaimer": {
    "title": "Disclaimer",
    "description": "Important limitations of Cubic Yard Calculator Pro estimates, material conversions, measurements and construction-related content.",
    "effective": "November 11, 2026",
    "sections": [
      {
        "h": "General information only",
        "p": [
          "Cubic Yard Calculator Pro provides informational tools, mathematical examples and practical project-planning guides. The calculations are intended to help users understand volume and compare quantities, not to replace qualified engineering, surveying, building, landscape or material-supply advice."
        ]
      },
      {
        "h": "Measurements and geometric volume",
        "p": [
          "Formulas assume that the entered measurements accurately represent the physical space. A uniform rectangular slab, circular area or level layer may be represented mathematically, but irregular excavations, slopes, differential thickness and hidden voids can cause actual material needs to differ from the model. Enter the correct units and check the measurement plan."
        ]
      },
      {
        "h": "Density, weight and compaction",
        "p": [
          "Cubic yards measure volume while tons measure weight. Material density can change with composition, moisture, particle size and compaction. Density presets are illustrative, editable planning assumptions and are not supplier-certified product properties. Loose, bank and compacted earthwork volumes are not necessarily interchangeable."
        ]
      },
      {
        "h": "Material yields, costs and deliveries",
        "p": [
          "Bag yield estimates depend on the specific manufacturer's stated mixed volume or package size. Material prices shown in worked examples are hypothetical unless explicitly sourced and dated. Supplier charges, minimum orders, local availability, transport restrictions, taxes and wastage can change total cost."
        ]
      },
      {
        "h": "Site safety, engineering and compliance",
        "p": [
          "The site does not determine structural adequacy, excavation stability, safe trench practices, stormwater drainage, ADA or building-code compliance, soil suitability or required compaction testing. Engineering and regulated construction activities require project-specific review and applicable professional or authority oversight."
        ]
      },
      {
        "h": "External references and updates",
        "p": [
          "Articles may link to technical references, extension guidance and manufacturer pages. Their availability and content can change. We endeavor to keep explanations accurate but do not warrant that all external resources remain current. Confirm important specifications with the original authoritative publication."
        ]
      },
      {
        "h": "Responsibility and professional verification",
        "p": [
          "Before ordering materials or performing work, verify dimensions, quantities and product suitability with your supplier, contractor, engineer or other appropriate specialist. Use estimates as preliminary decision aids, not certified quantities."
        ]
      }
    ]
  }
};
