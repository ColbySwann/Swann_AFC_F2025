let btn  = document.getElementsByTagName("button")
let image = document.getElementsByTagName("img")[0]
const BASE_URL = "https://dog.ceo/api"
image.setAttribute("src", "https://images.dog.ceo/breeds/terrier-american/n02093428_19906.jpg")

btn[0].addEventListener("click", ()=>{
    let route = "breeds/image/random"
    let endpoint = `${BASE_URL}/${route}`
    fetch(endpoint)
        .then((response) =>{
            if (response.ok){
                let result = response.json()
                return result;
            }else{
                throw new Error("I broke it")
            }
        })
        .then((parsedData) => {
            console.log("ParsedData: ", parsedData.message)
            image.setAttribute("src", parsedData.message)
        })
        .catch((errors) => {
            console.log("Errors: ", errors)
        })
})