import Link from "next/link";
import { materialGuideMap } from "@/lib/material-guides";

export function MaterialEditorial({slug}:{slug:string}) {
  const guide=materialGuideMap[slug];
  if(!guide)return null;
  return <div className="material-playbook">
    <section className="material-answer content-block" aria-labelledby="material-quick-answer">
      <div className="section-label">{guide.category.toUpperCase()}</div>
      <h2 id="material-quick-answer">{guide.headline}</h2>
      <p className="material-answer-main">{guide.answer}</p>
      <p className="material-answer-note"><strong>Important distinction:</strong> {guide.answerNote}</p>
    </section>
    <section className="material-examples content-block" aria-labelledby="material-example-heading">
      <div className="section-label">MEASURED PROJECT SCENARIOS</div>
      <h2 id="material-example-heading">{guide.practicalTitle}</h2>
      <p>{guide.practicalIntro}</p>
      <div className="material-scenario-grid">{guide.scenarios.map(s=><article key={s.name} className="material-scenario">
        <h3>{s.name}</h3><div className="material-scenario-measure">{s.measure}</div>
        <div className="material-scenario-result">{s.result}</div>
        <p>{s.reason}</p>
      </article>)}</div>
    </section>
    <section className="material-choices content-block" aria-labelledby="material-decision-heading">
      <div className="section-label">CHOOSE THE CORRECT ESTIMATE</div>
      <h2 id="material-decision-heading">{guide.decisionTitle}</h2>
      <p>{guide.decisionIntro}</p>
      <div className="table-scroll material-choice-table"><table>
        <thead><tr><th scope="col">Your project / question</th><th scope="col">Use this method / material</th><th scope="col">Verify</th></tr></thead>
        <tbody>{guide.choices.map(c=><tr key={c.need}><th scope="row">{c.need}</th><td>{c.use}</td><td>{c.check}</td></tr>)}</tbody>
      </table></div>
    </section>
    <section className="material-ordering content-block" aria-labelledby="material-order-heading">
      <div className="section-label">BEFORE YOU BUY</div>
      <h2 id="material-order-heading">{guide.stepsTitle}</h2>
      <ol className="material-order-steps">{guide.orderSteps.map((s,i)=><li key={s.title}><span className="material-step-index">{String(i+1).padStart(2,"0")}</span><div><strong>{s.title}</strong><p>{s.detail}</p></div></li>)}</ol>
      <p className="material-takeaway"><strong>Do not confuse:</strong> {guide.distinction}</p>
    </section>
    <section className="material-references content-block" aria-labelledby="material-reference-heading">
      <div className="section-label">PUBLISHED REFERENCES</div>
      <h2 id="material-reference-heading">Sources and calculation boundaries</h2>
      <p>Formulas and examples describe measurable volumes. Product yields, recommended applications and material-specific assumptions should be checked against the exact source and the local project requirements.</p>
      <ul>{guide.refs.map(ref=><li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.label} ↗</a><span>{ref.use}</span></li>)}</ul>
      <p>For exact unit definitions and the limits of adjustable material-density presets, review our <Link href="/calculation-methodology/">calculation methodology</Link>. For a neutral volume-only estimate, return to the <Link href="/">main cubic yard calculator</Link>.</p>
    </section>
  </div>;
}
