const nameInput = document.getElementById("textName")

// Pulsante Salva

const btSave = document.getElementById("salva")
btSave.addEventListener("click", function () {
  const veryName = nameInput.value
  localStorage.setItem("veryName", veryName)
  console.log(localStorage.getItem("veryName"))
})
