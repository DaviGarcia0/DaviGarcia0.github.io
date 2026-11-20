'use strict';

// Edite este cadastro para atualizar os cards. Use somente imagens e links confirmados.
const projects = [
  {
    "title": "Memory Clock",
    "context": "GAME JAM PLUS · EQUIPE · 48 HORAS",
    "image": "assets/images/memory-clock-gameplay.jpg",
    "alt": "Captura real do Memory Clock: Michelle explora a cozinha e interage com a geladeira, com inventário na tela",
    "description": "Mistério e viagem no tempo, desenvolvidos em equipe na Game Jam Plus. Participei como programador em uma experiência de criação em 48 horas, integrando aprendizado, colaboração e entrega.",
    "tags": [
      "C#",
      "Unity",
      "Programação em equipe"
    ],
    "demo": "https://hf-games-studio.itch.io/memory-clock",
    "demoLabel": "Página e download",
    "details": "memory-clock.html"
  },
  {
    "title": "Nebula",
    "context": "PROJETO DE EQUIPE",
    "art": "nebula",
    "description": "Projeto colaborativo em C# e Unity. O histórico registra minhas contribuições em coletáveis, cenário contínuo e correções, em uma base de código compartilhada com a equipe.",
    "tags": [
      "C#",
      "Unity",
      "Colaboração"
    ],
    "url": "https://gitlab.com/Carnevaless/nebula",
    "details": "nebula.html",
    "svg": "<rect x=\"12\" y=\"20\" width=\"42\" height=\"26\" rx=\"3\"/><rect x=\"76\" y=\"20\" width=\"42\" height=\"26\" rx=\"3\"/><rect x=\"44\" y=\"67\" width=\"42\" height=\"26\" rx=\"3\"/><path d=\"M33 46v11h64V46 M65 57v10 M24 33h18 M88 33h18 M55 80h20\"/>"
  },
  {
    "title": "Arena Survivor",
    "context": "PROJETO TÉCNICO · SOBREVIVÊNCIA",
    "art": "arena",
    "description": "Uma arena, três ondas e sistemas conectados. Protótipo 2D com combate, inimigos, pontuação, vitória e reinício de partida.",
    "tags": [
      "C#",
      "Unity",
      "Estados de jogo"
    ],
    "url": "https://github.com/DaviGarcia0/Arena-Survivor-Project",
    "details": "arena-survivor.html",
    "svg": "<path d=\"M20 18h90v64H20z M28 26h74v48H28z\"/><path d=\"M56 42h18v18H56z M65 33v9 M65 60v9 M47 51h9 M74 51h9\"/><path d=\"M32 33h8v8h-8z M90 61h7v7h-7z\"/>"
  }
];

const grid = document.querySelector('#project-grid');
if (grid) {
  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    const visual = project.image
      ? `<div class="project-photo"><img src="${project.image}" alt="${project.alt}" width="1440" height="810" loading="lazy"><span class="image-label">CAPTURA REAL DO PROJETO</span></div>`
      : `<div class="project-art art-${project.art}" role="img" aria-label="Composição gráfica sobre ${project.title}; não é uma captura do projeto"><svg viewBox="0 0 130 100" aria-hidden="true">${project.svg}</svg><span class="art-label">C# / UNITY · COMPOSIÇÃO GRÁFICA</span></div>`;
    const code = project.url ? `<a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver repositório de ${project.title}">Ver código-fonte</a>` : '';
    const demo = project.demo ? `<a class="text-link" href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Página e download de ${project.title}">${project.demoLabel}</a>` : '';
    card.innerHTML = `<a class="project-visual" href="${project.details}" aria-label="Conhecer ${project.title}">${visual}</a><div class="project-body"><span class="project-context">${project.context}</span><h3><a href="${project.details}">${project.title}</a></h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="card-actions"><a class="text-link" href="${project.details}" aria-label="Ver detalhes de ${project.title}">Conhecer projeto</a>${code}${demo}</div></div>`;
    grid.append(card);
  });
}

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); }
toggle?.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); navigation.classList.toggle('open', !expanded); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation?.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

if ('IntersectionObserver' in window) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navigation?.querySelectorAll('a').forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }), { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

document.querySelector('.copy-email')?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('davigarcia.f08@gmail.com'); status.textContent = 'E-mail copiado.'; }
  catch { status.textContent = 'Selecione o endereço acima para copiar ou clique para abrir seu aplicativo de e-mail.'; }
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
