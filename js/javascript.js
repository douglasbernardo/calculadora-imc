
var pesoUsuario = document.getElementById("peso")
var alturaUsuario = document.getElementById("altura")
var icone = document.getElementById("igual")
var resultadoImcUsuario = document.getElementById("resultado")


const calculaIMC = () => {
    icone.addEventListener("click",function(){
        let calculo = pesoUsuario.value/(alturaUsuario.value*alturaUsuario.value)
        validaValores(pesoUsuario.value,alturaUsuario.value)
        resultadoImcUsuario.value = calculo.toFixed(1)
        window.onload = ()=>{
            pesoUsuario.value = ''
            alturaUsuario = ''
            resultadoImcUsuario.value = ''
        }
    })
}

const validaValores = (pesoUsuario,alturaUsuario)=>{

    if (pesoUsuario || alturaUsuario != '') calculaIMC()

}