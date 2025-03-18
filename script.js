let counter = 1

const numCont = document.getElementById("num")

setInterval(function () {
  const newDiv = document.createElement("div")
  numCont.innerText = counter
  numCont.appendChild(newDiv)
  counter++
}, 1000)

let startTime = Date.now()

function piutime() {
  const elTime = Math.floor(Date.now() - startTime / 1000)
  const nDiv = document.createElement("div")
  nDiv.innerText = counter + " (tempo trascorso:" + elTime + "secondi)"
  numCont.appendChild(nDiv)

  sessionStorage.setItem("counter", counter)
  counter++
}
document.getElementById("updateButton").addEventListener("click", piutime)
