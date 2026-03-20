 function limpaFormulario() {
            document.getElementById('rua').value = "";
            document.getElementById('bairro').value = "";
            document.getElementById('cidade').value = "";
            document.getElementById('uf').value = "";
        }

        function buscarCEP() {
            // Pega o valor e remove tudo que não for número
            let cep = document.getElementById('cep').value.replace(/\D/g, '');

            if (cep !== "") {
                // Expressão regular para validar o formato do CEP
                let validacep = /^[0-9]{8}$/;

                if(validacep.test(cep)) {
                    // Preenche os campos com "..." enquanto consulta a API
                    document.getElementById('rua').value = "...";
                    document.getElementById('bairro').value = "...";
                    document.getElementById('cidade').value = "...";
                    document.getElementById('uf').value = "...";

                    fetch(`https://viacep.com.br/ws/${cep}/json/`)
                        .then(response => response.json())
                        .then(data => {
                            if (!data.erro) {
                                // Atualiza os campos com os valores da API
                                document.getElementById('rua').value = data.logradouro;
                                document.getElementById('bairro').value = data.bairro;
                                document.getElementById('cidade').value = data.localidade;
                                document.getElementById('uf').value = data.uf;
                            } else {
                                limpaFormulario();
                                alert("CEP não encontrado.");
                            }
                        })
                        .catch(error => {
                            limpaFormulario();
                            console.error('Erro na requisição:', error);
                            alert("Erro ao buscar o CEP. Verifique sua conexão.");
                        });
                } else {
                    limpaFormulario();
                    alert("Formato de CEP inválido.");
                }
            } else {
                limpaFormulario();
            }
        }