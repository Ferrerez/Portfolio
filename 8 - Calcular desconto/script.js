function desconto () {
    var pro = prompt('Qual é o produto que você está comprando?')
    var pre = prompt(`Qual o preço de ${pro} ?`)
    var des = parseFloat(10/100*pre).toFixed(2)
    var pagar = pre-des
    res.innerHTML = (`<strong>O preço original era R$ ${pre}.<br>
    Você acaba de ganhar R$ ${des} de desconto (-10%). <br>
    No fim, você vai pagar R$ ${pagar} no produto ${pro}. </strong>`)
} 
    