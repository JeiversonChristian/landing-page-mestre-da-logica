import { iniciarTimer } from './modulos/timer.js';
import { iniciarFAQ } from './modulos/faq.js';

// Função que inicia tudo quando o site carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicia o Timer
    iniciarTimer();

    // Inicia o comportamento do FAQ
    iniciarFAQ();

    console.log('Sistema Mestre da Lógica: ONLINE 🚀');
});