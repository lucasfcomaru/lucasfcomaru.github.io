export default function initAnimacao() {}

const sections = document.querySelectorAll(".scroll");

// verifica se a section existe baseada no seu tamanho
if (sections.length) {
  // pega o tamanho da janela do navegador
  const windowMetade = window.innerHeight * 0.5;

  function animaScroll() {
    sections.forEach((section) => {
      // pega a posição relativa do elemento na tela
      const sectionTop = section.getBoundingClientRect().top - windowMetade;

      if (sectionTop < 0) {
        section.classList.add("ativo");
      } 
    });
  }
  // inicia a animação a primeira vez para começar
  // com a primeira seção animada
  animaScroll();

  // adiciona evento de scroll ao navegador
  window.addEventListener("scroll", animaScroll);
}
