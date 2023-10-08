function separarNomeSobrenome() {
            
            var nomeCompleto = document.getElementById('nomeCompleto').value;

            var partesNome = nomeCompleto.split(' ');

            if (partesNome.length >= 2) {

                document.getElementById('nome').value = partesNome[0];
                document.getElementById('sobrenome').value = partesNome.slice(1).join(' ');
            } else {
                alert("Digite um nome completo válido (com pelo menos nome e sobrenome).");
            }
        }
