function separarNomeSobrenome() {
            // Obtém o valor do campo "nome completo"
            var nomeCompleto = document.getElementById('nomeCompleto').value;

            // Divide o nome completo em partes usando o espaço como separador
            var partesNome = nomeCompleto.split(' ');

            // Verifica se há pelo menos duas partes (nome e sobrenome)
            if (partesNome.length >= 2) {
                // Define o valor dos campos "nome" e "sobrenome"
                document.getElementById('nome').value = partesNome[0];
                document.getElementById('sobrenome').value = partesNome.slice(1).join(' ');
            } else {
                alert("Digite um nome completo válido (com pelo menos nome e sobrenome).");
            }
        }
