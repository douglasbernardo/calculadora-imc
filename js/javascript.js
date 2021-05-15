
var pesoUsuario = document.getElementById("peso")
var alturaUsuario = document.getElementById("altura")
var icone = document.getElementById("igual")
var resultadoImcUsuario = document.getElementById("resultado")

icone.addEventListener("click",function(){
    let calculo = pesoUsuario.value/(alturaUsuario.value*alturaUsuario.value)
    resultadoImcUsuario.value = calculo.toFixed(1)
    setTimeout(()=>{
        resultadoImcUsuario.value = ''
    },8000)
})
