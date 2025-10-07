import {useState} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup/src/index.js";


function App() {
    const userSchema = yup.object({
        fname: yup
            .string()
            .required("Please enter first name")
            .max(10, "Must be less than 10 characters"),
        age: yup
            .number()
            .nullable()
            .integer("Age must be a whole number")
            .typeError("Age is required")
            .min(21, "You are not old enough")
            .max(99, "You are too old")
            .required("Age is required"),
        email: yup
            .string()
            .email()
            .required("This field is required"),
        password: yup
            .string()
            .required("Password is required")
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Must match"),
        state: yup
            .string()
            .required("Must enter state")
            .oneOf(["TX", "TN", "AL"], "Must be one of the three states")
    })

    const {register, handleSubmit, reset, watch, setValue, formState: {errors}} = useForm({
        defaultValues: {
            fname: "",
            age: "",
            email: "",
             password: "",
            state: ""
        },
        mode: "onBlur",
        resolver: yupResolver(userSchema)
    })

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const handleChange = (evt) => {
        // console.log(`${evt.target.name}: ${evt.target.value}`);
        setValue(evt.target.name, evt.target.value);
    }

  return (
        <>
            <h1>Hello World</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name:
                    <input
                        type="text"
                        {...register("fname")}
                        onChange={handleChange}
                        />
                    {errors.fname && <div style={{ fontSize: "0.9rem", color: "crimson"}}>{errors.fname.message}</div> }
                </label>
                <label>Age:
                    <input
                        type="number"
                        {...register("age")}
                        onChange={handleChange}
                    />
                    {errors.age && <div style={{ fontSize: "0.9rem", color: "crimson"}}>{errors.age.message}</div> }
                </label>
                <label>Email:
                    <input
                        type="email"
                        {...register("email")}
                        onChange={handleChange}
                    />
                    {errors.email && <div style={{ fontSize: "0.9rem", color: "crimson", visibility:"hidden"}}>{errors.email.message}</div> }
                </label>
                <label>Password:
                    <input
                        type="password"
                        {...register("password")}
                        onChange={handleChange}
                    />
                    {errors.password && <div style={{ fontSize: "0.9rem", color: "crimson"}}>{errors.password.message}</div> }
                </label>
                <label htmlFor={"state"}>Select your state:
                    <select id="state" {...register("state")}>
                        <option value="">Select a State</option>
                        <option value="TX">Texas</option>
                        <option value="TN">Tennessee</option>
                        <option value="AL">Alabama</option>
                    </select>
                    {errors.state && <div style={{ fontSize: "0.9rem", color: "crimson"}}>{errors.state.message}</div> }
                </label>
                <button type={"submit"}>Submit</button>
                <button type={"reset"}>Reset</button>
            </form>
        </>
  )
}

export default App
