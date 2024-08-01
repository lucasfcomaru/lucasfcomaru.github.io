export default function outsideClick(element, events, callback) {
    // seleção dos ementos;
    const html = document.documentElement;
    const outside = 'data-outside'; // atributo que vai servir para verificação

    // verifica se o elemento não tem o atributo
    if (!element.hasAttribute(outside)){
        events.forEach((userEvent) => {
            // adiciona os eventos ao documento inteiro
            // para ser ativado quando o usuário clicar em
            // qualquer elemento
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsideClick);
            });
            // adiciona o atributo ao elemento
            element.setAttribute(outside, '');
        });
    }

    function handleOutsideClick(event) {
        // verifica se o o alvo clicado não
        // está dentro do elemento
        if (!element.contains(event.target)) {
            // remove o atributo do elemento
            element.removeAttribute(outside);
            // remove os eventos
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            // função anônima que deve ser passada como argumento para remover as classes
            callback();
        }
    }
}