var j = prompt(`Digite um distância em metros (m): `)
if(j <= 0) {
    alert('Não é possivel converter um valor zerado ou negativo!')
} else {
    function converter () {
        var m = parseFloat (j).toFixed(2).replace('.', ',')
            res.innerHTML = (`<strong>A distância de ${m} metros, corresponde a...<br><br>
            ${m/1000} quilômetros (Km)<br>
            ${m/100} hectômetros (Hm)<br>
            ${m/10} decâmetros (Dam)<br>
            ${m*10} decímetros (dm)<br>
            ${m*100} centímetros (cm)<br>
            ${m*1000} milímetros (mm)</strong>`)
    }
        
}
    
