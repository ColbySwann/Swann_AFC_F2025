import {useState} from "react";
import {Button, Container, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import HiringForm from "../components/HiringForm.jsx";


const HiringPage = () => {

    return (
        <div className="page-hiring d-flex align-items-center justify-content-center">
            <Container className="bg-dark p-5 rounded text-light" style={{ maxWidth: 600 }}>
                <h1 className="text-center mb-4 font-future">Employment Application</h1>
                <HiringForm />
            </Container>
        </div>
    )

}
export default HiringPage;