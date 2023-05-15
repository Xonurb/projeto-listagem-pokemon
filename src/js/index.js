// passo 1 pegar Mo JS o elemento HTML correspondente ao botao de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 dar um jeito de pegar o JS o elemento HTML corresponde ao body

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".image-botao")

// passo 3 dar um jeito de indentifcar o clique do usuario no botao de trocar de tema

botaoAlterarTema.addEventListener("click", () => {

    // passo 6 verificar se o body tem classe modo-escuro 

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

    
    // passo 7 - remover a classe do modo-escuro do body 
    

   

    //passo 8 trocar a imagem do botao de alterar tema para sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

} else {


    // passo 4 adicionar a classe modo-escuro no body 
    
    // passo 5 trocar a imagem do botao de alterar tema pra lua

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
}

})
