 // Variável global
    let cotacaoDolar = 5.00; // Valor padrão de segurança

    // 1. Ao carregar a página, busca a cotação do Dólar
    window.onload = async function() {
        try {
            const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
            const data = await response.json();
            cotacaoDolar = parseFloat(data.USDBRL.bid);
            
            // Atualiza na tela
            document.getElementById('cotacao-display').innerText = 
                `R$ ${cotacaoDolar.toFixed(2).replace('.', ',')}`;
        } catch (error) {
            console.error("Erro na API de cotação", error);
        }
    };

    // 2. Função quando clica em "Comprar"
    function selecionarProduto(nome, precoDolar) {
        // Exibe a área de checkout (carrinho)
        document.getElementById('area-checkout').classList.remove('hidden');

        // Calcula conversão
        let valorProdutoReais = precoDolar * cotacaoDolar;

        // Preenche os dados na tela
        document.getElementById('prod-nome').innerText = nome;
        document.getElementById('prod-usd').innerText = `$ ${precoDolar.toFixed(2)}`;
        
        // Formata para Real Brasileiro
        document.getElementById('prod-brl').innerText = 
            valorProdutoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }