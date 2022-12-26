function encriptar() {
    let frase = document.getElementById("original").value;
    frase.toLowerCase();
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
    console.log(encriptada);
}
function desencriptar() {
    let frase = document.getElementById("original").value;
    frase.toLowerCase();
    let desencriptada = frase.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    console.log(desencriptada);
}
function copiar() {
    console.log("copia")
}

