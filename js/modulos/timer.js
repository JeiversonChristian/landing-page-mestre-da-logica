export function iniciarTimer() {
    const horasElemento = document.getElementById('horas');
    const minutosElemento = document.getElementById('minutos');
    const segundosElemento = document.getElementById('segundos');

    function atualizarTimer() {
        const agora = new Date();
        const fimDoDia = new Date();
        
        // Define o fim do dia para 23:59:59 de hoje
        fimDoDia.setHours(23, 59, 59, 999);

        // Calcula a diferença em milissegundos
        const diferenca = fimDoDia - agora;

        // Converte para horas, minutos e segundos
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza o HTML com zero à esquerda se for menor que 10 (ex: 09)
        if (horasElemento) horasElemento.textContent = horas < 10 ? '0' + horas : horas;
        if (minutosElemento) minutosElemento.textContent = minutos < 10 ? '0' + minutos : minutos;
        if (segundosElemento) segundosElemento.textContent = segundos < 10 ? '0' + segundos : segundos;
    }

    // Atualiza a cada 1 segundo (1000 milissegundos)
    setInterval(atualizarTimer, 1000);
    
    // Roda uma vez imediatamente para não esperar 1 segundo aparecer
    atualizarTimer();
}