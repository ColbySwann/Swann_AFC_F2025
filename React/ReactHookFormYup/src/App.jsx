import {use, useState} from 'react'
import './App.css'
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";

function App() {
  const [count, setCount] = useState(0)
    const userSchema = yup.object({
        fname: yup
            .string()
            .required("Please enter first name")
            .max(3, "Must be less than 3 characters"),
        age: yup
            .number()
            .min(21, "You are not old enough")
            .max(99, "You are too old!!")
    })
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        defaultValues: {
            fname: "",
            age: ""
        },
        mode: "onBlur",
        resolver: yupResolver(userSchema),
    });

  const onSubmit = (evt) => {
      console.log(evt)
  }

  return (
      <>
          <form onSubmit={handleSubmit(onSubmit)} action="">
              <label>First Name:
                  <input
                      type="text"
                      {...register("fname")}
                      />
                  {errors.fname && (<p>{errors.fname}</p>)}
              </label>
              <br/>
              <label>Age:
                  <input
                      type="number"
                      {...register("age")}
                      min={21}
                      />
                  {errors.age && (<p>{errors.age}</p>)}
              </label>
              <br/>
              <button type={"submit"}>Submit</button>
          </form>

      </>
  )
}

export default App
