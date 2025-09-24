function setUpForm(document) {
    const form = document.querySelector("form")
    const input = document.querySelector("#name")
    const output = document.querySelector("#output")

    form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        let name = input.value;
        if (!name){
            output.textContent = "Name is Required"
        }
    })
}

module.exports = {
    setUpForm
}