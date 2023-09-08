var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var setaDireita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")

function rolarparadireita(){
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
    samantha.style = "display:none"
    leonardo.style = "display:flex"
}

function rolarparaesquerda(){
    leonardo.style = "display:none"
    samantha.style = "display: flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}