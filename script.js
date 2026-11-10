const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Barra de progresso de leitura
const progress = document.querySelector('#progress');
window.addEventListener('scroll', () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = available > 0 ? (window.scrollY / available) * 100 : 0;
  progress.style.width = `${percentage}%`;
});

// Conteúdo dos estudos de caso
const projectDetails = {
  lighting: {
    kicker: 'ESTUDO DE UX/UI · CIDADE',
    title: 'Monitoramento de iluminação pública',
    text: 'A proposta é ajudar moradores a consultar a situação da iluminação pública em um mapa do Recife. O desafio de UX é apresentar informações geográficas de forma simples, destacar postes ligados ou desligados e facilitar a identificação de pontos que precisam de manutenção. O trabalho explora hierarquia visual, navegação mobile e uso de cores para diferenciar estados.'
  },
  inclusion: {
    kicker: 'ESTUDO DE UX/UI · ACESSIBILIDADE',
    title: 'Aplicativo de inclusão digital',
    text: 'A ideia é apoiar pessoas idosas no uso cotidiano da tecnologia, começando por tarefas como utilizar o WhatsApp e reconhecer possíveis golpes. A experiência considera textos maiores, ícones familiares, instruções em etapas curtas e orientação por áudio, reduzindo barreiras e tornando o aprendizado mais acolhedor.'
  }
};

const dialog = document.querySelector('#projectDialog');
document.querySelectorAll('.details-button').forEach(button => {
  button.addEventListener('click', () => {
    const detail = projectDetails[button.dataset.project];
    document.querySelector('#dialogKicker').textContent = detail.kicker;
    document.querySelector('#dialogTitle').textContent = detail.title;
    document.querySelector('#dialogText').textContent = detail.text;
    dialog.showModal();
  });
});
document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
