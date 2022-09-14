const mole1 = document.getElementById("mole1")
const mole2 = document.getElementById("mole2")
const mole3 = document.getElementById("mole3")
const mole4 = document.getElementById("mole4")
const mole5 = document.getElementById("mole5")
const mole6 = document.getElementById("mole6")
const startBut = document.getElementById("startbut")
const start = document.getElementById("start")

function spawnMole() {
    let num = Math.ceil(Math.random() * 6)
    console.log(num)
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

start.addEventListener("click", () => {
    spawnMole()

})

mole1.addEventListener("click", () => {
    mole1.classList.remove("mole-visible")
    spawnMole()
})
mole2.addEventListener("click", () => {
    mole2.classList.remove("mole-visible")
    spawnMole()
})
mole3.addEventListener("click", () => {
    mole3.classList.remove("mole-visible")
    spawnMole()
})
mole4.addEventListener("click", () => {
    mole4.classList.remove("mole-visible")
    spawnMole()
})
mole5.addEventListener("click", () => {
    mole5.classList.remove("mole-visible")
    spawnMole()
})
mole6.addEventListener("click", () => {
    mole6.classList.remove("mole-visible")
    spawnMole()
})
