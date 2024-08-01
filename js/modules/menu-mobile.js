export default function initMenuMobile() {}

const button = document.querySelector('[data-menu="button"]');
const list = document.querySelector('[data-menu="list"]');

function menuMobile() {
  if (!button.classList.contains("ativo")) {
    // adicionando classes dos elementos
    button.classList.add("ativo");
    list.classList.add("ativo");
  } else if (button.classList.contains("ativo")) {
    // removendo classes dos elementos
    button.classList.remove("ativo");
    list.classList.remove("ativo");
  }
}

button.addEventListener("click", menuMobile);
