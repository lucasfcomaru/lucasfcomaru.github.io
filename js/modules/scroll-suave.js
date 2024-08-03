export default function initScrollSuave() {
  // seleção de todos os elementos do menu
  const linkMenu = document.querySelectorAll('[data-menu="list"] a[href^="#"]');
  // seleção de todos os elementos do footer
  const linkFooter = document.querySelectorAll('.footer-menu a[href^="#"]');

  function scrollSuave(event) {
    // verificação para executar o scroll suave somente
    // na página principal e quando o suário retornar para
    // página principal através do menu na página de formação
    // utilizando um link interno da página principal
    // e continuar funcionando normalmente
    if (location.pathname == "/" || location.hash.startsWith("#")) {
      // previne a ação padrão do link
      event.preventDefault();
    }
    // retorna o atributo href do elemento clicado
    const href = event.currentTarget.getAttribute("href");
    // seleciona o elemento pelo atrbuto
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(href);
  }

  // adiciona um evento a cada elemento do menu principal
  linkMenu.forEach((element) => {
    element.addEventListener("click", scrollSuave);
  });
  // adiciona um evento a cada elemento do menu footer
  linkFooter.forEach((element) => {
    element.addEventListener("click", scrollSuave);
  });
}