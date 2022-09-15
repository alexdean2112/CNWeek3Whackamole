const mole1 = document.getElementById("mole1")
const mole2 = document.getElementById("mole2")
const mole3 = document.getElementById("mole3")
const mole4 = document.getElementById("mole4")
const mole5 = document.getElementById("mole5")
const mole6 = document.getElementById("mole6")
const moles = document.getElementsByClassName("moles")
const startBut = document.getElementById("startbut")
const start = document.getElementById("start")
const score = document.getElementById("score")
let timer; 

function allMolesDown() {
    for (i = 0; i < 6; i++) {
        moles[i].classList.remove("mole-visible")
}}

function spawnMole() {
    let num = Math.ceil(Math.random() * 6)        
    setTimeout(moleCheck, (1500 - ( parseInt(score.textContent) * 50 ))) 
    if (num === 1) {
        mole1.classList.add("mole-visible") 
    }
    else if (num === 2) {
        mole2.classList.add("mole-visible")
    }
    else if (num === 3) {
        mole3.classList.add("mole-visible")
    }
    else if (num === 4) {
        mole4.classList.add("mole-visible")
    }
    else if (num === 5) {
        mole5.classList.add("mole-visible")
    }
    else if (num === 6) {
        mole6.classList.add("mole-visible")
    }
}

function moleCheck() {
    if (mole1.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else if (mole2.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else if (mole3.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else if (mole4.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else if (mole5.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else if (mole6.classList[mole1.classList.length -1] === "mole-visible") {
        console.log("Mole is up")
        clearInterval(timer)
        allMolesDown()
        alert(`Your final score is ${score.textContent}`)
    }
    else {
        return 
    }
}

function startTheMoles() {
    timer = setInterval(spawnMole, (1500 - ( parseInt(score.textContent) * 50 )))
}

start.addEventListener("click", () => {
    startTheMoles()
})

mole1.addEventListener("click", () => {
    mole1.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})
mole2.addEventListener("click", () => {
    mole2.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})
mole3.addEventListener("click", () => {
    mole3.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})
mole4.addEventListener("click", () => {
    mole4.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})
mole5.addEventListener("click", () => {
    mole5.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})
mole6.addEventListener("click", () => {
    mole6.classList.toggle("mole-visible")
    score.textContent = parseInt(score.textContent) + 1
})