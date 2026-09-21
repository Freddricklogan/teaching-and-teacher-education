/* Page widgets for teaching-and-teacher-education, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Tabs: high-leverage practice explorer ----
document.querySelectorAll('#hlptabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#hlptabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#hlp .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- Which learning theory fits this activity? (scored self-check) ----
const THEORY={
  behaviorism:'Behaviorism',
  cognitivism:'Cognitivism',
  constructivism:'Constructivism',
  social:'Social constructivism',
  connectivism:'Connectivism'
};
const TQ=[
  {q:'Students earn points and immediate feedback on a fluency drill of math facts until each set is mastered.',a:'behaviorism',
   why:'Reinforcement, practice, and immediate feedback to build automaticity is the behaviorist signature.'},
  {q:'Before a new procedure, the teacher presents a worked example and deliberately limits new information to avoid overloading working memory.',a:'cognitivism',
   why:'Managing cognitive load and using worked examples is cognitivist information-processing.'},
  {q:'Students design and run their own experiment, then revise their prior beliefs when the results surprise them.',a:'constructivism',
   why:'Learners actively constructing and revising their own understanding through experience is constructivism.'},
  {q:'A teacher scaffolds a task just beyond what students can do alone, having them work in pairs with prompts, then fades the support.',a:'social',
   why:'Working in the Zone of Proximal Development with scaffolding and peer support is social constructivism (Vygotsky).'},
  {q:'Students curate sources across blogs, experts, and online communities, learning to evaluate and connect a distributed network of information.',a:'connectivism',
   why:'Learning as navigating and cultivating networks of people and tools is connectivism.'}
];
const tqState={};
(function buildTQ(){
  const wrap=document.getElementById('tqWrap');
  if(!wrap) return;
  const keys=['behaviorism','cognitivism','constructivism','social','connectivism'];
  TQ.forEach((item,i)=>{
    const q=document.createElement('div'); q.className='q';
    const p=document.createElement('p'); p.textContent=(i+1)+' · '+item.q; q.appendChild(p);
    const opts=document.createElement('div'); opts.className='opts';
    keys.forEach(key=>{
      const b=document.createElement('button'); b.className='opt'; b.textContent=THEORY[key];
      b.onclick=()=>{
        if(tqState[i]!=null) return;
        tqState[i]=key;
        opts.querySelectorAll('.opt').forEach(x=>{x.style.pointerEvents='none';});
        if(key===item.a){ b.classList.add('sel'); b.style.borderColor='var(--lr-good)'; b.style.background='rgba(74,222,128,.16)'; }
        else{
          b.style.borderColor='var(--lr-bad)'; b.style.background='rgba(248,113,113,.16)';
          opts.querySelectorAll('.opt').forEach(x=>{ if(x.textContent===THEORY[item.a]){ x.style.borderColor='var(--lr-good)'; x.style.background='rgba(74,222,128,.16)'; } });
        }
        scoreTQ();
      };
      opts.appendChild(b);
    });
    q.appendChild(opts);
    const fb=document.createElement('p'); fb.className='kv'; fb.style.marginTop='8px'; fb.style.color='var(--lr-dim)';
    fb.id='tqWhy'+i; q.appendChild(fb);
    wrap.appendChild(q);
  });
})();
function scoreTQ(){
  const answered=Object.keys(tqState).length;
  let correct=0;
  for(const i in tqState){
    if(tqState[i]===TQ[i].a) correct++;
    const w=document.getElementById('tqWhy'+i);
    if(w) w.textContent=(tqState[i]===TQ[i].a?'Correct — ':'Not quite — ')+TQ[i].why;
  }
  document.getElementById('tqResult').classList.add('show');
  document.getElementById('tqScore').textContent=correct+' / '+TQ.length+' correct';
  let msg;
  if(answered<TQ.length) msg='Keep going — '+(TQ.length-answered)+' to go.';
  else if(correct===TQ.length) msg='Perfect — you can hear the theory behind the practice. That fluency is what turns activities into deliberate design.';
  else msg='Review the learning-theory cards above: attend to whether the activity is about reinforcement, memory, personal construction, social scaffolding, or networks.';
  document.getElementById('tqMsg').textContent=msg;
}

