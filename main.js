let luzes = document.getElementsByClassName('luzes')
let temporizador = ms => new Promise(res => setTimeout(res, ms))

async function cores() {

    for (let i = 0; i < luzes.length; i++) {
        luzes[i].style.backgroundColor = "green"
        await temporizador(1000)
    }


    // setInterval(() => {
    // for (luz of luzes) {
    //         luz.style.backgroundColor = "green"
    //     }
    // }, 1000);
    console.log(luzes)
}
