// Utils
const $ = (s, el=document)=>el.querySelector(s)
const $$ = (s, el=document)=>Array.from(el.querySelectorAll(s))
const wait = (ms)=>new Promise(r=>setTimeout(r, ms))

function showToast(msg, ms=2000){
  const t = $('.toast'); if(!t) return
  t.textContent = msg; t.hidden = false
  setTimeout(()=>{ t.hidden = true }, ms)
}

function moveCard(card, colSel){
  const col = $(colSel); if(!col) return
  const list = $('.kanban-list', col)
  list.appendChild(card)
  const limit = parseInt(col.dataset.wip || '999', 10)
  const count = $$('.kanban-card', list).length
  if(count > limit){
    col.classList.add('wip-breached')
    showToast(`WIP excedido em "${$('h3', col).textContent}" (${count}/${limit})`)
    setTimeout(()=>col.classList.remove('wip-breached'), 1200)
  }
}

async function simulate(){
  const card = $('.card-simular'); if(!card) return
  const btn = $('#simularFluxo'); if(btn){ btn.disabled = true; btn.textContent = 'Simulando...' }

  const steps = [
    '.kanban [data-col="a-fazer"]',
    '.kanban [data-col="em-andamento"]',
    '.kanban [data-col="em-teste"]',
    '.kanban [data-col="concluido"]',
  ]
  await wait(500)
  for(const s of steps){ moveCard(card, s); await wait(900) }

  if(btn){ btn.disabled = false; btn.textContent = 'Simular fluxo de uma tarefa' }
  showToast('Simulação concluída ✅', 2000)
}

document.addEventListener('DOMContentLoaded', ()=>{
  $('#imprimir')?.addEventListener('click', ()=>window.print())
  $('#simularFluxo')?.addEventListener('click', simulate)
})