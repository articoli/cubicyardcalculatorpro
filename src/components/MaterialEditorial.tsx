import {materialGuideMap} from "@/lib/material-guides";
/**
 * Complement the detailed material guide with project takeoffs and product
 * decisions; avoid repeating its instructions, order checklist and FAQs.
 */
export function MaterialEditorial({slug}:{slug:string}){
 const guide=materialGuideMap[slug];
 if(!guide)return null;
 return <div className="material-playbook">
  <aside className="material-answer" aria-label="Material calculator quick answer">
   <div className="section-label">{guide.category.toUpperCase()}</div>
   <p className="material-answer-main">{guide.answer}</p>
   <p className="material-answer-note"><strong>Important:</strong> {guide.answerNote}</p>
  </aside>
  <section className="material-examples content-block" aria-labelledby="material-example-heading">
   <div className="section-label">REAL-WORLD QUANTITY EXAMPLES</div>
   <h2 id="material-example-heading">{guide.practicalTitle}</h2>
   <p>{guide.practicalIntro}</p>
   <div className="material-scenario-grid">{guide.scenarios.map(s=><article className="material-scenario" key={s.name}>
    <h3>{s.name}</h3>
    <div className="material-scenario-measure">{s.measure}</div>
    <div className="material-scenario-result">{s.result}</div>
    <p>{s.reason}</p>
   </article>)}</div>
  </section>
  <section className="material-choices content-block" aria-labelledby="material-decision-heading">
   <div className="section-label">CHOOSING THE RIGHT METHOD</div>
   <h2 id="material-decision-heading">{guide.decisionTitle}</h2>
   <p>{guide.decisionIntro}</p>
   <div className="table-scroll material-choice-table"><table>
    <thead><tr><th scope="col">Situation</th><th scope="col">Method or material</th><th scope="col">Verify before purchasing</th></tr></thead>
    <tbody>{guide.choices.map(choice=><tr key={choice.need}>
     <th scope="row">{choice.need}</th><td>{choice.use}</td><td>{choice.check}</td>
    </tr>)}</tbody>
   </table></div>
  </section>
 </div>;
}
