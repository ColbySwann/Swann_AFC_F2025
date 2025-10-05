import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";


const HiringForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        city: '',
        state: '',
        age: 21,
        phone: '',
        email: '',
        password: '',
        married: 'single'
    });

    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({...touched, [name]: true});
    }

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            address1: '',
            city: '',
            state: '',
            age: 21,
            phone: '',
            email: '',
            password: '',
            married: 'single'
        });
        setTouched({});
    };

    const validate = () => {
        const errors = {};
        if (!formData.firstName || formData.firstName.length > 20) errors.firstName = 'Required (1–20 characters)';
        if (formData.lastName && formData.lastName.length > 20) errors.lastName = 'Max 20 characters';
        if (!formData.address1 || formData.address1.length > 50) errors.address1 = 'Required, max 50 characters';
        if (!formData.city || formData.city.length > 29) errors.city = 'Required, max 29 characters';
        if (!formData.state) errors.state = 'Select a state';
        if (formData.age < 21 || formData.age > 99) errors.age = 'Must be between 21–99';
        if (!formData.phone) errors.phone = 'Required';
        if (!formData.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) errors.email = 'Invalid email';
        if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,12}$/))
            errors.password = '8–12 chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol';
        return errors;
    }

    const errors = validate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0){
            alert("Application submitted successfully");
        }else{
            alert("Please fix the errors before submitting. ");
        }
    }

    return(
        <Form noValidate onSubmit={handleSubmit} className={"bg-dark"}>
            <FormGroup>
                <Label for={"firstName"}>First Name: </Label>
                <Input
                    id={"firstName"}
                    name={"firstName"}
                    type={"text"}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.firstName && !!errors.firstName}
                    placeholder={"Enter your first name"}
                    required
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"lastName"}>Last Name: </Label>
                <Input
                    id={"lastName"}
                    name={"lastName"}
                    type={"text"}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.lastName && !!errors.lastName}
                    placeholder={"Enter your last name (optional)"}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"address1"}>Address 1: </Label>
                <Input
                    id={"address1"}
                    name={"address1"}
                    type={"text"}
                    value={formData.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.address1 && !!errors.address1}
                    placeholder={"Enter your address"}
                    required
                />
                <FormFeedback>{errors.address1}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"city"}>City: </Label>
                <Input
                    id={"city"}
                    name={"city"}
                    type={"text"}
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.city && !!errors.city}
                    placeholder={"Enter your city"}
                    required
                />
                <FormFeedback>{errors.city}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"state"}>State: </Label>
                <Input
                    id={"state"}
                    name={"state"}
                    type={"select"}
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.state && !!errors.state}
                    required
                >
                    <option value="">Select</option>
                    <option value={"TX"}>TX</option>
                    <option value="TN">TN</option>
                    <option value="AL">AL</option>
                </Input>
                <FormFeedback>{errors.state}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"age"}>Age: </Label>
                <Input
                    id={"age"}
                    name={"age"}
                    type={"number"}
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.age && !!errors.age}
                    min="21"
                    max="99"
                    required
                />
                <FormFeedback>{errors.age}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"phone"}>Phone Number: </Label>
                <Input
                    id={"phone"}
                    name={"phone"}
                    type={"tel"}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.phone && !!errors.phone}
                    placeholder={"Enter your phone number"}
                    required
                />
                <FormFeedback>{errors.phone}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"email"}>Email: </Label>
                <Input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.email && !!errors.email}
                    placeholder={"Enter your email"}
                    required
                />
                <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for={"password"}>Password: </Label>
                <Input
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.password && !!errors.password}
                    placeholder={"Enter password (8-12 chars"}
                    required
                />
                <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>

            <FormGroup tag="fieldset" className="mt-3">
                <legend>Marital Status</legend>
                <FormGroup check>
                    <Input
                        name={"married"}
                        type={"radio"}
                        value={"single"}
                        checked={formData.married === 'single'}
                        onChange={handleChange}
                    />{' '}
                    <Label check>Single</Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name={"married"}
                        type={"radio"}
                        value={"married"}
                        checked={formData.married === 'married'}
                        onChange={handleChange}
                    />{' '}
                    <Label check>Married</Label>
                </FormGroup>
            </FormGroup>

            <div className="d-flex justify-content-between mt-4">
                <Button type="submit" color={"primary"}>Submit</Button>
                <Button type={"reset"} color={"secondary"} onClick={handleReset}>Reset</Button>
            </div>

        </Form>
    )


}

export default HiringForm;