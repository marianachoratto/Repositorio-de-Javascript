function clicar(){
    var anoDeNascimento = window.document.getElementById('Ano')
    var resposta = window.document.getElementById('resposta')
    var sexo = window.document.getElementsByName('radsex')
    var foto = window.document.getElementById('imagem')

    var data = new Date()
    var ano = data.getFullYear()

    if(anoDeNascimento.value.length == 0 || anoDeNascimento > ano){ 
        window.alert('Digite o ano, por favor')
    }

    var idade = ano - anoDeNascimento.value
    
    var genero = ""

    if (sexo[0].checked){ 
        genero = "homem"
    } else if (sexo[1].checked){
        genero = "mulher"
    }
   
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    if(idade <= 14 && sexo[1].checked ){
        foto.src = 'meninapequena.jpg'
    } else if (idade <= 14 && sexo[0].checked ) {
        foto.src = 'meninopequeno.jpg'

    } else if (idade > 14 && idade <= 21 && sexo[1].checked ){
        foto.src = 'adolescentemulher.jpg'
    } else if (idade > 14 && idade <= 21 && sexo[0].checked){
        foto.src = 'adolescentehomem.jpg'

    } else if (idade > 21 && idade <= 60 && sexo[1].checked ){
        foto.src = 'mulher.jpg'
    } else if (idade > 21 && idade <= 60 && sexo[0].checked ){
        foto.src = 'homem.jpg'

    } else if (idade > 60 && sexo[1].checked ){
        foto.src = 'mulheridosa.jpg'
    } else if (idade > 60 && sexo[0].checked ){
        foto.src = 'homemidoso.jpg'
    }
}

