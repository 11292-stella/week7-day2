let counter = 1

const numCont = document.getElementById("num")

setInterval(function () {
  const newDiv = document.createElement("div")
  numCont.innerText = counter
  numCont.appendChild(newDiv)
  counter++
}, 1000)
