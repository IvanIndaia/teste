
function starter() {
    // let jogador1 = prompt("Digite o nome do Jogador 1")
    // let jogador2 = prompt("Digite o nome do Jogador 2")

    // let jog1 = document.getElementById("j1")
    // let jog2 = document.getElementById("j2")

    // jog1.innerHTML = `${jogador1}`
    // jog2.innerHTML = `${jogador2}`

    document.getElementById("startTempera").style.display = 'none'
}

const btn = document.querySelector('#send')

btn.addEventListener("click", function(e){
    e.preventDefault()
    const question1 = document.getElementsByName('q1')
    let que1 = question1.value
    console.log(que1)
})