'use strict';
const bank = window.QUESTIONS;
const byId = new Map(bank.map(q => [q.id, q]));
const domains = [...new Set(bank.map(q => q.domain))];
const key = 'cis-service-mapping.practice.v1';
const panel = document.querySelector('#paper');
const warning = document.querySelector('#warning');
const fresh = () => ({current:bank[0].id, answers:{}, draft:null, finished:false, started:false});
let state = fresh();
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (!saved || !saved.started) return;
    const answers = {};
    for (const q of bank) {
      const value = saved.answers?.[q.id];
      if (q.options.includes(value)) answers[q.id] = value;
    }
    const pending = bank.find(q => !(q.id in answers));
    const current = byId.get(saved.current);
    const next = saved.finished && pending ? pending : (current || pending || bank[0]);
    state = {answers, current:next.id, draft:next.id === saved.current && next.options.includes(saved.draft) ? saved.draft : null,
      started:true, finished:Boolean(saved.finished && !pending)};
  } catch { warning.textContent = 'Saved progress could not be read in this browser.'; }
}
function save() {
  try { localStorage.setItem(key, JSON.stringify(state)); }
  catch { warning.textContent = 'Browser storage is unavailable. Progress will last for this visit only.'; }
}
function node(tag, text, css) {
  const el = document.createElement(tag);
  if (text !== undefined) el.textContent = text;
  if (css) el.className = css;
  return el;
}
function button(label, action, css) {
  const el = node('button',label,css); el.type='button'; el.onclick=action; return el;
}
function title(text) {
  const el=node('h2',text,'qtitle'); el.tabIndex=-1; return el;
}
function stats() {
  const done = Object.keys(state.answers).length;
  const score = bank.filter(q => state.answers[q.id] === q.options[q.answer]).length;
  return {done,score};
}
function outline() {
  document.querySelector('#bankCount').textContent = bank.length+' questions across '+domains.length+' domains';
  for (const name of domains) {
    const li=node('li');
    li.append(node('span',name),node('span',String(bank.filter(q=>q.domain===name).length)));
    document.querySelector('#domains').append(li);
  }
}
function restart() {
  if (!confirm('Clear this attempt and start again at question 1?')) return;
  state=fresh(); begin();
}
function begin() {
  state.started=true; save(); if (state.finished) results(); else question();
}
function home() {
  panel.replaceChildren(); const {done}=stats();
  panel.append(node('p','Practice session','meta'),node('h2',state.finished?'Practice complete':state.started?'Continue your practice':'Begin your practice'));
  panel.append(node('p',state.started ? done+' of '+bank.length+' answers submitted. Your place and answers are saved in this browser.' :
    'Work through one question at a time. Submit your answer to see the explanation, then move on when you’re ready.','lead'));
  const actions=node('div',undefined,'actions');
  actions.append(button(state.finished?'View results':state.started?'Continue practice':'Start practice',begin));
  if(state.started) actions.append(button('Start over',restart,'quiet'));
  panel.append(actions);
  if(!state.started) panel.append(node('p','Your place is saved on this device in this browser.','muted'));
}
function question() {
  const q=byId.get(state.current), index=bank.indexOf(q);
  const submitted=q.id in state.answers;
  panel.replaceChildren();
  panel.append(node('p',q.domain,'meta'),node('p','Question '+(index+1)+' of '+bank.length,'stat'));
  const track=node('div',undefined,'track'), fill=node('div'); fill.style.width=(stats().done/bank.length*100)+'%'; track.append(fill); panel.append(track);
  const heading=title(q.question); heading.id='question'; panel.append(heading);
  const form=node('form'), group=node('fieldset'); group.setAttribute('aria-labelledby','question');
  const submit=node('button','Submit answer'); submit.type='submit'; submit.disabled=state.draft===null;
  q.options.forEach((choice,i)=>{
    const label=node('label',undefined,'option'),radio=node('input'); radio.type='radio';radio.name='answer';radio.value=choice;
    radio.disabled=submitted;radio.checked=(submitted?state.answers[q.id]:state.draft)===choice;
    radio.onchange=()=>{ if(q.id in state.answers)return; state.draft=choice;submit.disabled=false;save(); };
    label.append(radio,node('span',String.fromCharCode(65+i)+'.','letter'),node('span',choice));group.append(label);
  });
  form.append(group);panel.append(form);
  const actions=node('div',undefined,'actions');
  if(!submitted){
    actions.append(submit); form.append(actions);
    form.onsubmit=e=>{
      e.preventDefault();
      if(q.id in state.answers || !q.options.includes(state.draft))return;
      state.answers[q.id]=state.draft;state.draft=null;save();question();panel.querySelector('.feedback').focus();
    };
  }else{
    form.onsubmit=e=>e.preventDefault();
    const right=state.answers[q.id]===q.options[q.answer];
    const feedback=node('div',undefined,'feedback'+(right?'':' miss'));feedback.tabIndex=-1;
    feedback.append(node('h3',right?'Correct':'Incorrect'),node('p','Correct answer: '+q.options[q.answer]),node('p',q.explanation));
    const link=node('a','Read the source');link.href=q.source;link.target='_blank';link.rel='noopener';feedback.append(link);panel.append(feedback);
    const next=bank.slice(index+1).find(x=>!(x.id in state.answers)) || bank.find(x=>!(x.id in state.answers));
    const forward=button(next?'Next question':'View results',()=>{
      if(!(q.id in state.answers))return;
      if(!next){state.finished=true;save();results();return;}
      state.current=next.id;state.draft=null;save();question();
    });
    const arrow=node('span','→','arrow');arrow.setAttribute('aria-hidden','true');forward.append(arrow);actions.append(forward);panel.append(actions);
  }
  heading.focus();
}
function results(){
  const {score,done}=stats();panel.replaceChildren();
  const heading=title('Practice results');panel.append(heading,node('p',score+' correct out of '+done+' submitted.','lead'));
  const table=node('table'), header=table.createTHead().insertRow();
  header.append(node('th','Domain'),node('th','Correct'));
  const body=table.createTBody();
  for(const domain of domains){
    const qs=bank.filter(q=>q.domain===domain), row=body.insertRow();
    row.insertCell().textContent=domain;row.insertCell().textContent=qs.filter(q=>state.answers[q.id]===q.options[q.answer]).length+' / '+qs.length;
  }
  panel.append(table);const actions=node('div',undefined,'actions');actions.append(button('Start over',restart,'quiet'));panel.append(actions);heading.focus();
}
load();outline();home();
