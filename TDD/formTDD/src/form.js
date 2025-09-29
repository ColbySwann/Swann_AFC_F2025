function setUpForm(document) {
    const form = document.querySelector("form")
    const input = document.querySelector("#name")
    const output = document.querySelector("#output")

    form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        let name = input.value.trim();
        if (!name){
            output.textContent = "Name is Required"
        }
        else{
            output.textContent = `Hello ${name}`;
        }
    })
}

if (typeof module !== "undefined" && module.exports){
    module.exports = setUpForm;
}

module.exports = {
    setUpForm
}