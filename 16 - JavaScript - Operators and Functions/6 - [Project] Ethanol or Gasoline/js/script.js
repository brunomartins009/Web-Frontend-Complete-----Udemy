function calcularMelhorPreco() {
    
    // validar os campos
    let precoAlcool = document.getElementById('alcool').value;
    let precoGasolina = document.getElementById('gasolina').value;

    if (precoAlcool != "") {
        if (precoGasolina != ""){

            /* Calcular se é melhor abastecer com álcool ou gasolina
                * se precoAlcool / precoGasolina >= 0.7
                    Utilizar gasolina
                * senão
                    Utilizar álcool
            */
            
            if (precoAlcool / precoGasolina >= 0.7) {
                document.getElementById('resultado').innerHTML = 'Melhor utilizar Gasolina!';
            } else {
                document.getElementById('resultado').innerHTML = 'Melhor utilizar Álcool!';
            }
        } else {
            alert('O preço da gasolina deve ser preenchido!');
        }
    } else {
        alert('O preço do álcool deve ser preenchido!');
    }
}