import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup/src/index.js";


const HiringForm = () => {
    const userSchema = yup.object({
    firstName: yup
        .string()
        .required("Please enter first name")
        .max(10, "Must be less than 10 characters"),
    lastName: yup
        .string()
        .max(20, "Must be less than 20 characters")
        .optional(),
    address1: yup
        .string()
        .required("Address is required")
        .max(50, "Address is too long"),
    city: yup
        .string()
        .required("City is required")
        .max(29, "City is too long"),
    state: yup
        .string()
        .required("State is required")
        .oneOf(["TX", "TN", "AL"], "Must be one of the three states"),
    age: yup
        .number()
        .nullable()
        .integer("Age must be a whole number")
        .typeError("Age is required")
        .min(25, "You are not old enough")
        .max(89, "You are too old")
        .required("Age is required"),
    phone: yup
        .string()
        .required("Phone is required")
        .matches(/^\d{3}-\d{3}-\d{4}$/, "Must Be in the XXX-XXX-XXXX format"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Minimum 8 characters")
        .max(12, "Maximum 12 characters")
        .matches(/[A-Z]/, "Must contain one uppercase letter")
        .matches(/[a-z]/, "Must contain one lowercase letter")
        .matches(/[0-9]/, "Must contain one number")
        .matches(/[@$!%*?&]/, "Must contain one special character"),
    married: yup
        .string()
        .oneOf(["single", "married"])
        .required()
})

const {control, handleSubmit, reset, setValue, formState: {errors, isSubmitSuccessful}} = useForm({
    defaultValues: {
        firstName: "",
        lastName: "",
        address1: "",
        city: "",
        state: "",
        age: 25,
        phone: "",
        email: "",
        password: "",
        married: 'single'
    },
    mode: "onBlur",
    resolver: yupResolver(userSchema)
});

    const onSubmit = (data) => {
        alert("Application submitted successfully")
        console.log(data)
        reset();
    }

    const handleChange = (evt) => {
    console.log(`${evt.target.name}: ${evt.target.value}`);
        setValue(evt.target.name, evt.target.value);
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)} className={"bg-dark"}>
            <FormGroup>
                <Label for={"firstName"}>First Name: </Label>
                <Controller
                    name={"firstName"}
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id={"firstName"}
                            invalid={!!errors.firstName}
                            onChange={handleChange}
                            placeholder={"Enter your first name"}
                        />
                    )}
                />
                <FormFeedback>{errors.firstName?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"lastName"}>Last Name: </Label>
                <Controller
                    name={"lastName"}
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id={"lastName"}
                            invalid={!!errors.lastName}
                            onChange={handleChange}
                            placeholder={"Enter your last name"}
                        />
                    )}
                />
                <FormFeedback>{errors.lastName?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"address1"}>Address 1: </Label>
                <Controller
                    name="address1"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="address1"
                            invalid={!!errors.address1}
                            onChange={handleChange}
                            placeholder="Enter your address"
                        />
                    )}
                />
                <FormFeedback>{errors.address1?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"city"}>City: </Label>
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="city"
                            invalid={!!errors.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                        />
                    )}
                />
                <FormFeedback>{errors.city?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"state"}>State: </Label>
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                        <Input id="state" type="select" {...field} invalid={!!errors.state} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="TX">TX</option>
                            <option value="TN">TN</option>
                            <option value="AL">AL</option>
                        </Input>
                    )}
                />
                <FormFeedback>{errors.state?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"age"}>Age: </Label>
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="age"
                            type="number"
                            min={25}
                            max={89}
                            invalid={!!errors.age}
                            onChange={handleChange}
                        />
                    )}
                />
                <FormFeedback>{errors.age?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"phone"}>Phone Number: </Label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="phone"
                            type="tel"
                            invalid={!!errors.phone}
                            onChange={handleChange}
                            placeholder="123-456-7890"
                        />
                    )}
                />
                <FormFeedback>{errors.phone?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"email"}>Email: </Label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="email"
                            type="email"
                            invalid={!!errors.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    )}
                />
                <FormFeedback>{errors.email?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"password"}>Password: </Label>
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="password"
                            type="password"
                            invalid={!!errors.password}
                            onChange={handleChange}
                            placeholder="Enter password (8–12 chars)"
                        />
                    )}
                />
                <FormFeedback>{errors.password?.message}</FormFeedback>
            </FormGroup>

            <FormGroup tag="fieldset" className="mt-3">
                <legend>Marital Status</legend>
                <Controller
                    name="married"
                    control={control}
                    render={({ field }) => (
                        <>
                            <FormGroup check>
                                <Input
                                    type="radio"
                                    id="single"
                                    value="single"
                                    checked={field.value === "single"}
                                    onChange={() => field.onChange("single")}
                                />{" "}
                                <Label check htmlFor="single">
                                    Single
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    type="radio"
                                    id="married"
                                    value="married"
                                    checked={field.value === "married"}
                                    onChange={() => field.onChange("married")}
                                />{" "}
                                <Label check htmlFor="married">
                                    Married
                                </Label>
                            </FormGroup>
                        </>
                    )}
                />
            </FormGroup>

            <div className="d-flex justify-content-between mt-4">
                <Button type="submit" color={"primary"}>Submit</Button>
                <Button type={"reset"} color={"secondary"} onClick={() => reset(defaultValues)}>Reset</Button>
            </div>

        </Form>
    )


}

export default HiringForm;