import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect, useSelector } from 'react-redux';
import { listaParaPDF } from "../../features/services/serviceStateSlice";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import MultiStepProgressBar from "./multiStepProgressBar";

class MasterForm extends Component {
    constructor(props) {
        super(props);

        // Set the intiial input values
        this.state = {
            currentStep: 1,
            email: "",
            username: "",
            password: "",
            password2: "",
            selectedValue: "",
            selectedText: "",
        };

        
        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        
        // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }
    
    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSelected(event) {
        const { name, selectedOptions } = event.target;
        const text = selectedOptions[0].text.split("-")[0]
        this.setState({
            selectedText: text
        });
        this.setState({
            selectedValue: event.target.value
        });
        console.log(name, text, event.target.value)
    }

    // Trigger an alert on form submission
    handleSubmit = event => {
        event.preventDefault();
        //const { username, password } = this.state;
        this.props.listaParaPDF({ name: "pdfData", descripcion: this.state.selectedText, costo: this.state.selectedValu, cantidad:1})
        //console.log(event)
        const prueba = useSelector((state) => state.serviceState)
        console.log(prueba);
    };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button color="float-left" variant="btn btn-outline-secondary" onClick={this._prev}>
                    atrás
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <Button color="float-right" variant="btn btn-outline-secondary" onClick={this._next}>
                    siguiente
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    get submitButton() {
        let currentStep = this.state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 2) {
            return <Button color="float-right" variant="btn btn-outline-secondary" type="submit">Enviar</Button>;
        }
        return null;
    }

    render() {

        return (
            <>
                <div className="container">
                    <MultiStepProgressBar currentStep={this.state.currentStep} />
                </div>
                <Form className='mt-5'>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleSelected}
                        username={this.state.selectedValue}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password2={this.state.password2}
                    />
                </Form>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        {this.previousButton}
                        {this.nextButton}
                        {this.submitButton}
                    </div>
                </Form>
            </>
        );
    }
}

const aja = {
    listaParaPDF
}

export default connect(null,aja)(MasterForm);
