var d = prompt ('Antes de mais nada. Quanto está a cotação do doólar agora?')

    function converter() {
        var r = prompt ('Quantos R$ você tem na carteira?')
        var res = Number (r*d)
            res.innerHTML = (`De acordo com a cotação do dia, você comprará ${res} em dolares.`)
        

        
    }

