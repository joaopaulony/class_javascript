function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>"
}

function redirecionar(){
    window.open("https://github.com/joaopaulony");
    /* window.location.href = "https://github.com/joaopaulony";           ... para abrir na mesma janela */   
}

function trocar(){
    /* alert("trocar texto");   */
    document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse.</b>"
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>"
}


function funcaoChange(elemento){
    console.log(elemento.value)
}







/* function botao(){
    alert("Obrigado por clicar");
    
} */



/*
 alert("Meu Primeiro js");
*/
