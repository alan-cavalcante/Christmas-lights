let luzes = document.getElementsByClassName('luzes')
let temporizador = ms => new Promise(res => setTimeout(res, ms))

function showDisplay(valor) {
    let display = document.getElementById("displayIntervalo")
    display.textContent = valor
}

/*Inserir e Remover fileira de luzes*/
function inserirLinhas(qtd) {
    let containerMaiorLuzes = document.getElementById("containerMaiorLuzes")
    let luzinhas = document.getElementById("container-luzes")
    let novaLuz = luzinhas.cloneNode(true)
    for (let i = 0; i <= qtd; i++) {
        if (containerMaiorLuzes.childElementCount > qtd) {
            containerMaiorLuzes.querySelector("#container-luzes").remove()
        } else if (containerMaiorLuzes.childElementCount < qtd) {
            containerMaiorLuzes.appendChild(novaLuz)
        }
    }
}

/*Iniciar e parar o escalonamento das bolinhas*/
async function cores() {
    let slider = document.getElementById('slider').value
    for (let i = 0; i < luzes.length; i++) {
        luzes[i].style.transform = "scale(2,2)"
        await temporizador(slider)
        luzes[i].style.transform = "scale(1,1)"
    }
}

/* Escolher cor da bolinha */

function mudarCor(valor, id) {
    let bolinha = document.getElementById(id)
    bolinha.style.backgroundColor = valor
}