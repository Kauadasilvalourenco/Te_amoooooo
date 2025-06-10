var musica = document.querySelector("audio#musica")
var apareca = document.querySelector("main#apareca")
var botaoClique = document.querySelector("input#botao_clique")
botaoClique.addEventListener("click", clicar)

function clicar() {
    musica.setAttribute("src", "audio/damiano-david-the-first-time-lyrics_mOET3wcM.mp3")
    musica.play()
    apareca.style.display = "block"
    botaoClique.style.display = "none"
}