/**
 * @jest-environment jsdom
 */

const {setUpForm} = require("../src/form")


beforeEach(() => {
    document.body.innerHTML = `
    <form action = "/submit" method = "post">
        <input type="text" id="name">
        <button type="submit"></button>
    </form>
    <p id="output"></p>
    `
})

test("form exists", () => {

})

test("shows an error when input is empty", () => {
    setUpForm(document)
    const form = document.querySelector("form")
    form.dispatchEvent(new Event("submit"))
    const output = document.querySelector("p")
    expect(output.textContent).toContain("Name is Required")
})