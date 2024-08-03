export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      // armazena o valor total
      const total = +numero.innerText;
      // garante que o incremento nunca seja menor que 1
      const incremento = Math.max(Math.floor(total / 100), 1);
      let start = 0; // contador

      const timer = setInterval(() => {
        start += incremento; // atualiza o valor
        numero.innerText = start; // adiciona o valor novo ao elemento;

        if (start >= total) {
          // garante que o valor final é exatamente o total
          numero.innerText = total;
          clearInterval(timer); // encerra a função
        }
      }, 50 * Math.random()); // todos os elementos são animados em tempo aleatório
    });
  }

  // observador
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".experiencia-container");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
