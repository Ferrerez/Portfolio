function verificar () {
    var pro = prompt ('Que produto você está comprando?')
    var pre = prompt (`Quanto custa ${pro} que você está comprando?`)
    var v = prompt (`Qual foi o valor que você deu para comprar ${pro}?`)
    var t = Number (v-pre)
    alert (`Você comprou ${pro} que custou R$${pre}.\nDeu R$${v} em dinheiro e vai receber R$${t} de troco.\nVolte sempre!`)
}