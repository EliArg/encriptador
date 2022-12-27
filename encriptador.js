function encriptar() {
    let frase = document.getElementById("original").value.toLowerCase();
    const letras = frase.split("");
    let encriptando = [];
    for (i = 0; i < letras.length; i++) {
        switch(letras[i]) {
            case "a":
                encriptando.push("ai");
                break;
            case "e":
                encriptando.push("enter");
                break;
            case "i":
                encriptando.push("imes");
                break;
            case "o":
                encriptando.push("ober");
                break;
            case "u":
                encriptando.push("ufat");
                break;
            default:
                encriptando.push(letras[i]);
                break;
            }}
    let encriptada = encriptando.toString();
    encriptada = encriptada.replaceAll(",", "");
    document.getElementById("resultado").innerHTML = encriptada;
}
function desencriptar() {
    let frase = document.getElementById("original").value.toLowerCase();
    let desencriptada = frase.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    document.getElementById("resultado").innerHTML = desencriptada;
}
function copiar() {
    let copia = document.getElementById("resultado").innerHTML;
    navigator.clipboard.writeText(copia);
}
function borrar() {
    document.getElementById("resultado").innerHTML = ""
}

