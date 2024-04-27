const gera_numero_rdm = geraaleatorio
const menor_vlr = 1
const maior = 1000
const mn_val =document.getElementById('menor')
const maio =document.getElementById('maior')

function geraaleatorio(){
    return parseInt(Math.random()*maior +1)
}
mn_val.innerHTML=menor_vlr
maio.innerHTML= maior