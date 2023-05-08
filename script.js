const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){

  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage= "none"
}

function btnCopiar(){
  const texto = mensaje.value || textArea.value;
  navigator.clipboard.writeText(texto)
    .catch(err => alert(`¡No se pudo copiar "${texto}" en el portapapeles: ${err}`));
}

function encriptar (stringEncriptar){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
   stringEncriptar = stringEncriptar.toLowerCase()

   for(i = 0; i < matrizCodigo.length; i++){

    if(stringEncriptar.includes(matrizCodigo[i][0])){

        stringEncriptar =  stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]) 
      }
   }

   return stringEncriptar

}

function btnDesencriptar(){

  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
}

function desencriptar (stringDesencriptar){

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
 stringDesencriptar = stringDesencriptar.toLowerCase()

 for(i = 0; i < matrizCodigo.length; i++){

  if(stringDesencriptar.includes(matrizCodigo[i][0])){

      stringDesencriptar =  stringDesencriptar.replaceAll(matrizCodigo [i][1], matrizCodigo[i][0]) 
 }

 }
 return stringDesencriptar
}