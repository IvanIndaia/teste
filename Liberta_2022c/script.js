const inpute = document.querySelectorAll('input')

// console.log(inpute.length)
for (var i = 0; i < inpute.length; i++ ){
    inpute[i].setAttribute('min','0')
}





function apostar() {
    // console.log(placarE.value)
    // placarE.value[1]

    // console.log(pls[5].value)
    // console.log(pls)

    for (var i = 0; i < pls1.length; i++) {
        // console.log(pls[i].textContent)
        console.log(pls1[i].value)
    }


    let input0 = $("input")
    let pls1 = $("#pl1")
    let pls2 = $("#pl2").val()
    let pls3 = $("#pl3").val()
    let pls4 = $("#pl4").val()

    input0.min(0)

    if (pls1.val() == 7) {
        alert("OK")
    }

    if (pls1.value != null) {
        pls1.css({ "background-color": "yellow" })
    }


}
