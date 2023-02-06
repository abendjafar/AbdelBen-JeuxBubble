
//Creation du Compteur
const counterDisplay = document.querySelector("h3")
let counter = 0


//La logique du Jeux

const bubbleMaker = () => {
    // Creation des element dans le html
    const bubble = document.createElement("span");
    bubble.classList.add("bubble")
    document.body.appendChild(bubble)

    // Taille des bubble
    const size = Math.random() * 200 + 100 + "px"

    //Direction des bubble
    bubble.style.height = size
    bubble.style.width = size

    bubble.style.top = Math.random() * 100 + 50 + "%"
    bubble.style.left = Math.random() * 100 + 50 + "%"

    const plusMinus = Math.random() > 0.5 ? 1 : -1
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%")

    //Creation du click de disparition des Bubbles
    bubble.addEventListener("click", () => {
        counter++
        counterDisplay.textContent = counter
        bubble.remove()



    })

    setTimeout(() => {
        bubble.remove()
    }, 8000)

}

 //setInterval(bubbleMaker, 300)



