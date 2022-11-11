var d = prompt ('Antes de mais nada. Quanto está a cotação do dólar agora?')
if(d <= 0) {
    alert('Não é possivel converter um valor zerado ou negativo!')
} else {
var r = prompt ('Quantos R$ você tem na carteira?')
} if(r <= 0) {
    alert('Não é possivel converter um valor zerado ou negativo!')
} else {
    function converter() {
        var re = parseFloat (r/d).toFixed(2).replace('.', ',')
            res.innerHTML = (`<strong>De acordo com a cotação do dia, você comprará US$ ${re} dolares.</strong>`)
    }
}