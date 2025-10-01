import axios from "axios";
import {useState, useEffect} from "react";

function RandomDogPage(){
    const [image, setImage] = useState("https://images.dog.ceo/breeds/corgi-cardigan/n02113186_7220.jpg");
    const baseURL = "https://dog.ceo/api"

    // useEffect(() => {
    //     let route = "breeds/image/random"
    //     let endpoint = `${baseURL}/${route}`
    //     axios
    //         .get(endpoint)
    //         .then(response => {
    //             setImage(response.data.message)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    const handleClick = () => {
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`
        axios
            .get(endpoint)
            .then(response => {
                setImage(response.data.message)
                console.log(response.data.message)
            })
            .catch(error => console.log(error))
    }


    return(
        <>
            <h1>Random Dog</h1>
            <button onClick={handleClick}>Click Me</button>
            <img src={image} alt="Random dog image"/>

        </>
    )
}

export default RandomDogPage;