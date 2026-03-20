//api

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = "R$ " + economia.USDBRL.bid
})

// 2. A MÁGICA: Função que calcula
        function calcular(caixa, precoOriginal) {
            if (cotacao == 0) return alert("Espere o dólar carregar...");

            // Procura o H1 dentro da caixa que foi clicada
            let textoH1 = caixa.querySelector("h1");

            // Se tiver o cifrão ($), converte para Real
            if (textoH1.innerText.includes("$")) {
                let emReais = precoOriginal * cotacao;
                // Mostra o valor calculado
                textoH1.innerText = "R$ " + emReais; 
                textoH1.style.color = "#00bfff"; // Muda cor pra azul (destaque)
            } 
            // Se clicar de novo, volta para Dólar
            else {
                textoH1.innerText = "$ " + precoOriginal + ".00";
                textoH1.style.color = "#4caf50"; // Volta pra verde
            }
        }