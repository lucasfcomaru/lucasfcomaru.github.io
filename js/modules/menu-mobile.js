import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const button = document.querySelector('[data-menu="button"]');
  const list = document.querySelector('[data-menu="list"]');
  const eventos = ["click"]; // array com os eventos caso queira adicionar mais de um tipo

  // verifica se o botão existe
  if (button) {
    function openMenu(event) {
      // adicionando classes dos elementos
      button.classList.add("ativo");
      list.classList.add("ativo");
      //   passando o elemento, os eventos e a função
      //   de callback como argumentos
      outsideClick(list, eventos, () => {
        // removendo classes dos elementos
        button.classList.remove("ativo");
        list.classList.remove("ativo");
      });
    }

    // adiciona todos os eventos definidos no array eventos ao botão
    eventos.forEach((userEvent) => {
      button.addEventListener(userEvent, openMenu);
    });
  }
}
