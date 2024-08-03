export default function initValidaForm() {
  // selecionando o botão
  const button = document.querySelector("[data-button]");

  function validaForm(event) {
    // previne o padrão para não enviar o formulário
    event.preventDefault();

    // seleciona os elementos do formulário
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");
    const aviso = document.querySelector(".contato-aviso");
    const avisotexto = document.querySelector("[data-aviso]");

    // verifica se todos os campos estão preenchidos
    if (!nome.value && !email.value && !mensagem.value) {
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Altera o conteúdo do elemento
      avisotexto.innerHTML =
        "Preencha o campo <strong>nome, email e mensagem</strong>";
    } else if (!nome.value) {
      // verifica se o campo nome está preenchido
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Altera o conteúdo do elemento
      avisotexto.innerHTML = "Preencha o campo <strong>nome</strong>";
    } else if (!email.value) {
      // verifica se o campo email está preenchido
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Altera o conteúdo do elemento
      avisotexto.innerHTML = "Preencha o campo <strong>email</strong>";
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      // verifica se contem o @ e . no email
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Altera o conteúdo do elemento
      avisotexto.innerHTML = "O email digitado é <strong>inválido</strong>";
    } else if (!mensagem.value) {
      // verifica se o campo mensagem está preenchido
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Altera o conteúdo do elemento
      avisotexto.innerHTML = "Preencha o campo <strong>mensagem</strong>";
    } else {
      // caso todas as condições sejam falsas
      // adiciona a classe ativo ao elemento para mudar o display
      aviso.classList.add("ativo");
      // Mostra uma mensagem de sucesso
      avisotexto.innerHTML =
        "<strong>Mensagem enviada com sucesso</strong><br>Nossa equipe está trabalhando para responder o mais rápido possível";
    }
  }

  // adicionando evento
  button.addEventListener("click", validaForm);
}