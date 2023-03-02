const emailInput = document.getElementById("email")
const emailError = document.querySelector("#email + .error-msg")

const zipCodeInput = document.getElementById("zip-code")
const zipCodeError = document.querySelector("#zip-code + .error-msg")

const passwordInput = document.getElementById("password")
const passwordError = document.querySelector("#password + .error-msg")

const passwordConfirmInput = document.getElementById("password-confirmation")
const passwordConfirmError = document.querySelector("#password-confirmation + .error-msg")

const form = document.querySelector(".basic-form")

let doPasswordsMatch = false

emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
        // Hide the error message
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

passwordInput.addEventListener("input", () => {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = "Required!"
        passwordError.className = "error-msg active"
    }
    else {
        passwordError.textContent = ""
        passwordError.className = "error-msg"
    }
})

passwordConfirmInput.addEventListener("input", () => {
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordConfirmError.textContent = "Your passwords don't match."
        passwordConfirmError.className = "error-msg active"
        
        doPasswordsMatch = false
    }
    else {
        passwordConfirmError.textContent = ""
        passwordConfirmError.className = "error-msg"

        doPasswordsMatch = true
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!emailInput.validity.valid || !zipCodeInput.validity.valid 
        || !passwordInput.validity.valid || !passwordConfirmInput.validity.valid 
        || !doPasswordsMatch) {

        if (emailInput.validity.valueMissing) {
            emailError.textContent = "Required!"
            emailError.className = "error-msg active"
        }

        if (zipCodeInput.validity.valueMissing) {
            zipCodeError.textContent = "Required!"
            zipCodeError.className = "error-msg active"
        }

        if (passwordInput.validity.valueMissing) {
            passwordError.textContent = "Required!"
            passwordError.className = "error-msg active"
        }

        if (passwordConfirmInput.validity.valueMissing) {
            passwordConfirmError.textContent = "Required!"
            passwordConfirmError.className = "error-msg active"
        }
    }
})
