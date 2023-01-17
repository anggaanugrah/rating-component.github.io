const rateContainer = document.querySelector(".main")
const thankContainer = document.querySelector(".thankyou")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("numRate")
const rates = document.querySelectorAll("label")

submitButton.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    rateContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})