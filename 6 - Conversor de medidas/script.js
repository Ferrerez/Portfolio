function verificar () {
    var m = parseFloat(prompt(`Digite um distância em metros (m): `))
    m.toFixed(2).replace('.', ',')
    if(m <= 0) {
        alert('Não é possivel converter um valor zerado ou negativo!')
    } else {
        res.innerHTML = (`A distância de ${m} metros, corresponde a...<br><br>
        ${m/1000} quilômetros (Km)<br>
        ${m/100} hectômetros (Hm)<br>
        ${m/10} decâmetros (Dam)<br>
        ${m*10} decímetros (dm)<br>
        ${m*100} centímetros (cm)<br>
        ${m*1000} milímetros (mm)`)
    }
   
}