var hora = new Date
var agora = hora.getHours()

//var agora = 23

function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    
    msg.innerText = `Agora são ${agora} horas`
}

if (agora >= 0 && agora < 12){
    imagem.src = "manhapequeno.png"       // é body.style --> precisa dizer onde está o background-color
    window.document.body.style.backgroundColor = "#ffdd7fc4" // As cores precisam de aspas
}
else if(agora <= 18){
    imagem.src = "tardepq.png"
    window.document.body.style.backgroundColor = "#bad654"
    
} else {
    imagem.src = "noitepq.png"
    window.document.body.style.backgroundColor = "#566d9ad0"
}