//Variáveis
const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#closedCookie")
const btnReset = document.querySelector("#btnReset")

const motivationalMessages = [
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Acredite em você mesmo e tudo será possível.",
    "Você é mais forte do que pensa.",
    "A jornada de mil milhas começa com um único passo.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "Quanto maior o obstáculo, maior a glória de superá-lo.",
    "A persistência é o caminho do êxito.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Nada é impossível para um coração determinado.",
    "O único fracasso real é aquele do qual não se aprende nada."
]

let randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]

//Eventos
btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        handleOpenClick()
    }
})

//Funções
function handleOpenClick() {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document
        .querySelector("#message")
        .innerText = `${randomMessage}`
}

function handleResetClick() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
}