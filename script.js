const nav = document.querySelector(".nav-links")

document.querySelector("nav .fa-bars").addEventListener("click", () => {
  nav.style.right = "0"
})

document.querySelector("nav .fa-times").addEventListener("click", () => {
  nav.style.right = "-55vw"
})
