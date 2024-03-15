let textOrigen = document.getElementById("textOrigen");
let textSalida = document.querySelector(".textSalida");
let verMensajeSalida = document.querySelector(".salida-mensaje");
let verSalidaCodificado = document.querySelector(".salida-codificado");

function btnEncriptar(){
    let encriptado = textOrigen.value.toLowerCase();
    const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++){
        if(encriptado.includes(matrizCodigo[i][0])){
            encriptado = encriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    textSalida.value = encriptado;
    textOrigen.value = "";
    verMensajeSalida.style.display = "none";
    verSalidaCodificado.style.display = "flex";
};

function btnDesencriptar(){
    let encriptado = textOrigen.value.toLowerCase();
    const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++){
        if(encriptado.includes(matrizCodigo[i][1])){
            encriptado = encriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    textSalida.value = encriptado;
    textOrigen.value = "";
    verMensajeSalida.style.display = "none";
    verSalidaCodificado.style.display = "flex";
};

function btncopiar(){
    textOrigen.value = textSalida.value;
    
    textSalida.value = "";
    verMensajeSalida.style.display = "flex";
    verSalidaCodificado.style.display = "none";
};