export function iniciarFAQ() {
    const perguntas = document.querySelectorAll('.faq-item');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('toggle', (evento) => {
            // Só faz algo se a pergunta estiver sendo ABERTA
            if (pergunta.open) {
                
                // Fecha todas as outras
                perguntas.forEach(outraPergunta => {
                    if (outraPergunta !== pergunta) {
                        outraPergunta.removeAttribute('open');
                    }
                });
            }
        });
    });
}