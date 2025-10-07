
import './App.css'
import {useState} from "react";

function App() {
    const initialState = {
        fname: "",
        age: 0,
        email: ""
    }

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const payload = {
            fname: formData.fname,
            age: formData.age,
            email: formData.email
        }
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData({...formData, [name]: value});
    }


  return (
      <>
        <h1>Form</h1>
          <form onSubmit={handleSubmit} method={"GET"}>
              <label>First Name:
                  <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                  />
              </label>
              <br/>
              <label>Age:
                  <input
                      type="number"
                      name={"age"}
                      value={formData.age}
                      onChange={handleChange}/>
              </label>
              <br/>
              <label>Email:
                  <input
                      type="email"
                      name={"email"}
                      value={formData.email}
                      onChange={handleChange}/>
              </label>
              <br/>
              <button type={"submit"}>Submit</button>
          </form>
      </>
  )
}

export default App
