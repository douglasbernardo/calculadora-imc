
let icone= document.getElementById("igual")

const mostraIMC = () => {

    let pesoUsuario = document.getElementById("peso").value
    let alturaUsuario = document.getElementById("altura").value
    let resultadoImcUsuario = document.getElementById("resultado")

    pesoValido = validaPeso(pesoUsuario);
    alturaValida = validaAltura(alturaUsuario);

    if(!pesoValido){
        let peso = document.getElementById("peso");
        pesoValido = false;
        peso.value = "Peso Invalido";
    }

    if(!alturaValida){
        let altura = document.getElementById("altura");
        alturaValida = false;
        altura.value = "Altura Inválida";

    }

    if(alturaValida && pesoValido){
        let resultadoImc = calculaIMC(pesoUsuario,alturaUsuario);
        resultadoImcUsuario.value = resultadoImc
        
    }
    window.onload = ()=>{
        pesoUsuario.value = ''
        alturaUsuario = ''
        resultadoImcUsuario.value = ''
    }
}

const calculaIMC = (pesoUsuario,alturaUsuario) =>{
    let calculo = 0
    calculo = pesoUsuario / (alturaUsuario * alturaUsuario)
    return calculo.toFixed(1)
}

function validaAltura(alturaUsuario){
    if(alturaUsuario > 0  && alturaUsuario <= 2.80){
        return true;
    }else{
        return false;
    }
}

function validaPeso(pesoUsuario){
    if(pesoUsuario >= 0 && pesoUsuario < 400){
        return true;
    }else{
        return false;
    }
}

icone.addEventListener('click',mostraIMC)