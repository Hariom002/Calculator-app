let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".btn")

let result = false
for (let btn of buttons) {
    btn.addEventListener("click", (e) => {
        var btnText = e.target.innerHTML
        if (btnText === "AC") {
            screen.innerHTML = ""
        }
        else if (btnText === "=") {
            let screenValue = screen.innerHTML
            screen.innerHTML = eval(screenValue)
            result = true
        }
        else {
            if (result) {
                screen.innerHTML = ""
                result = false
            }
            screen.innerHTML += btnText
        }
    })

}