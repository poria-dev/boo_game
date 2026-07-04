const record = document.getElementById("record")
const target = document.getElementById("target")
const startstatus = document.getElementById("startstatus")
const buttons = document.querySelectorAll(".box2>button")
const h4 = document.getElementById("h4")
const h5 = document.getElementById("h5")
const btn = document.getElementById("btn")
const boo = new Audio("audio/1629287207_W1hP8.mp3")
const sound = new Audio("audio/Correct_Answer__2.mp3")

let ran1 = parseInt(Math.random() * 10)
console.log(ran1);

let truee = 0

buttons.forEach((val, index) => {

    val.addEventListener("click", () => {

        startstatus.innerHTML = "🟢 Playing"

        if (index == ran1) {

            setTimeout(() => {

                console.log("equal");

                val.innerHTML = "💥"
                val.style.background = "#dc2626"

                h4.innerHTML = "💥 BOOM! Game Over"
                h4.style.color = "#ef4444"

                h5.innerHTML = "⭐ Final Score : " + truee

            }, 500);

            boo.play()
            boo.currentTime = 0

            buttons.forEach((val) => {
                val.setAttribute("disabled", "disabled")
            })

            record.innerHTML = truee

        } else {

            sound.play()
            sound.currentTime = 0

            val.innerHTML = "✅"
            val.style.background = "#22c55e"

            h4.innerHTML = "🎉 Great! Safe Choice"
            h4.style.color = "#22c55e"

            truee++

            val.setAttribute("disabled", "disabled")

            target.innerHTML = truee
            h5.innerHTML = "⭐ Score : " + truee

            console.log(truee);

            if (truee == 9) {

                alert("🏆 Congratulations! You Won The Game!")

                location.reload()

            }

        }

    })

})

btn.addEventListener("click", () => {

    location.reload()

})
