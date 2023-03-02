const emailInput = document.getElementById("email")
const emailError = document.querySelector("#email + .error-msg")

const zipCodeInput = document.getElementById("zip-code")
const zipCodeError = document.querySelector("#zip-code + .error-msg")

const passwordInput = document.getElementById("password")
const passwordError = document.querySelector("#password + error-msg")

const form = document.querySelector(".basic-form")

emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error-msg"
    } else {
        if (emailInput.validity.typeMismatch) {
            emailError.textContent = "Entered value needs to be an email address."
        }

        emailError.className = "error-msg active"
    }
})

zipCodeInput.addEventListener("input", () => {
    if (zipCodeInput.validity.valid) {
        zipCodeError.textContent = ""
        zipCodeError.className = "error-msg"
    }
    else {
        if (zipCodeInput.validity.patternMismatch) {
            zipCodeError.textContent = "Please type a 5 digit zip code (e.g., 12345)."
        }
        zipCodeError.className = "error-msg active"
    }
})

form.addEventListener("submit", (e) => {
    if (!emailInput.validity.valid) {
        e.preventDefault()
    }
})
