function verificar () {
    var m = prompt(`Digite um distância em metros (m):`)
    var val = parseFloat (m)
    if(val <= 0) {
        alert('Não é possivel converter um valor zerado ou negativo!')
    } else 
        res.innerHTML += (`A distância de ${val} metros, corresponde a...<br><br>
        ${val/1000} quilômetros (Km)<br>
        ${val/100} hectômetros (Hm)<br>
        ${val/10} decâmetros (Dam)<br>
        ${val*10} decímetros (dm)<br>
        ${val*100} centímetros (cm)<br>
        ${val*1000} milímetros (mm)`)
   
}