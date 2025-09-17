if (document.body.id === 'menu-page') {
    let nextBtn = document.querySelector('#next')
    let prevBtn = document.querySelector('#prev')

    nextBtn.addEventListener("click", nextItem)
    prevBtn.addEventListener("click", prevItem)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    const menuItems = [
        {
            title: "Lamb Leg",
            description: "Leg of Lamb roasted on a split over an open fire",
            price: formatter.format(78),
            img: "https://cdn-image.biggreenegg.co.uk/1649068983-sichuan-smoked-leg-of-lamb-14.jpg?q=80&auto=format&dpr=1&w=800&h=500&fit=crop"
        },
        {
            title: "Pork and Beans",
            description: "Plate of pork and beans served with some bread just like the cowboys used to eat",
            price: formatter.format(15),
            img: "https://as1.ftcdn.net/v2/jpg/10/82/04/02/1000_F_1082040269_Za1xKUQ1uPrfcXU4UfNNhY4mlstNXRdK.jpg"
        },
        {
            title: "Quantum FLame Steak",
            description: "Wagyu Beef genetically perfected and seared with a quantum flame torch",
            price: formatter.format(89),
            img: "https://as2.ftcdn.net/v2/jpg/14/90/94/87/1000_F_1490948791_GtZzkN2bHnjak3uVlU2SS7sWFt3YFAJ4.jpg"
        },
        {
            title: "Roast Saddle of Mutton",
            description: "Large roast carved tableside served with a creamy onion sauce",
            price: formatter.format(67),
            img: "https://as2.ftcdn.net/v2/jpg/14/72/42/59/1000_F_1472425998_bFKn2RpCI5WX5WFOnxImmWLQ3uj4upZF.jpg"
        },
        {
            title: "Garlic & Herb Moretum",
            description: "Roman inspired herbed cheese spread",
            price: formatter.format(13),
            img: "data:image/jpeg;base64,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"
        },
        {
            title: "Nile Valley Stew",
            description: "A hearty Ancient Egyptian classic of slow-simmered fava beans",
            price: formatter.format(23),
            img: "https://as2.ftcdn.net/v2/jpg/14/86/35/31/1000_F_1486353118_qdnexZrY5DW68hPJ2AaQvXbCAIJd7Jrl.jpg"
        }
    ];

    let currentIndex = 0;

    function showItem(index) {
        const item = menuItems[index];
        document.getElementById("menu-image").src = item.img
        document.getElementById("menu-title").textContent = item.title
        document.getElementById("menu-description").textContent = item.description
        document.getElementById("menu-price").textContent = item.price
        document.getElementById("menu-image").alt = item.title
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % menuItems.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        showItem(currentIndex);
    }

    showItem(currentIndex);
}else if (document.body.id === 'hiring-page') {

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("#application-row1");
        const ageInput = document.getElementById("inputAge");
        const ageError = document.getElementById("ageError");


        const phoneInput = document.getElementById("inputPhone");
        const phoneError = document.getElementById("phoneError");
        const phoneOk = document.getElementById("phoneOk");
        const phoneformattedSpan = document.getElementById("phoneFormatted");


        const moreInfo = document.getElementById("exampleFormControlTextarea1");
        let counter = document.createElement("div");
        counter.className = "form-text text-muted";
        moreInfo.insertAdjacentElement("afterend", counter);


        function updateCounter() {
            const left = 30 - (moreInfo.value || "").length;
            counter.textContent = `${left} characters remaining`;
        }

        moreInfo.addEventListener("input", updateCounter);
        updateCounter();


        function formatPhone(input) {
            if (!input) return null;
            const digits = input.replace(/\D/g, "");
            let d = digits;
            if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
            if (d.length !== 10) return null;
            return d.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        }


        function showPhoneFeedback() {
            const val = phoneInput.value.trim();
            const formatted = formatPhone(val);
            if (!val) {
                phoneError.style.display = "block";
                phoneError.textContent = "Phone is required.";
                phoneOk.style.display = "none";
                return false;
            }
            if (!formatted) {
                phoneError.style.display = "block";
                phoneError.textContent = "Please enter 10 digits. Example: 111-222-3333.";
                phoneOk.style.display = "none";
                return false;
            }
            phoneError.style.display = "none";
            phoneOk.style.display = "block";
            phoneformattedSpan.textContent = formatted;
            return true;
        }
        phoneInput.addEventListener("input", showPhoneFeedback);
        phoneInput.addEventListener("blur", () => {
            const formatted = formatPhone(phoneInput.value);
            if (formatted) phoneInput.value = formatted;
            showPhoneFeedback();
        });


        function validateAge() {
            const original = ageInput.value;
            const n = Number(original);
            if (original === "") {
                ageError.style.display = "block";
                ageError.textContent = "Age is required.";
                return false;
            }
            if (!Number.isInteger(n)) {
                ageError.style.display = "block";
                ageError.textContent = "Age must be a whole number.";
                return false;
            }
            if (n < 21 || n > 99) {
                ageError.style.display = "block";
                ageError.textContent = "Age must be between 21 and 99.";
                return false;
            }
            ageError.style.display = "none";
            return true;
        }


        ageInput.addEventListener("input", validateAge);
        ageInput.addEventListener("blur", validateAge);


        form.addEventListener("submit", (event) => {
            event.preventDefault();


            const ageOk = validateAge();
            const phoneOkFlag = showPhoneFeedback();
            if (!ageOk || !phoneOkFlag) {
                if (!ageOk) ageInput.focus();
                else phoneInput.focus();
                return;
            }


            const submission = {
                firstName: document.getElementById("fname").value,
                lastName: document.getElementById("lname").value,
                email: document.getElementById("inputEmail4").value,
                age: Number(ageInput.value),
                phone: formatPhone(phoneInput.value),
                address1: document.getElementById("inputAddress").value,
                address2: document.getElementById("inputAddress2").value,
                city: document.getElementById("inputCity").value,
                state: document.getElementById("inputState").value,
                zip: document.getElementById("inputZip").value,
                password: document.getElementById("inputPassword4").value,
                status: document.querySelector("input[name=radioDefault]:checked")?.value || null,
                colors: Array.from(document.querySelectorAll("#favoriteColor input[type=checkbox]:checked")).map(cb => cb.nextElementSibling.textContent),
                moreInfo: moreInfo.value || ""
            };


            console.log(submission);
            alert("Form submitted successfully");
        });
    });



}