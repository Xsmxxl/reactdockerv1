import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { listaParaPDF } from "../../features/services/serviceStateSlice";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import MultiStepProgressBar from "./multiStepProgressBar";

export default function MasterForm(props) {
    const data = useSelector((state) => state.serviceState);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        currentStep: 1,
        email: "",
        username: "",
        password: "",
        password2: "",
        selectedValue: "",
        selectedText: "",
    });

    // Use the submitted data to set the state
    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSelected = event => {
        const { name, selectedOptions } = event.target;
        const text = selectedOptions[0].text.split("-")[0]
        const valor = 'selectedText'
        setState({
            ...state,
            [valor]: text,
            [name]: event.target.value
        });
    }

    // Trigger an alert on form submission
    const handleSubmit = event => {
        event.preventDefault();
        //const { username, password } = state;
        dispatch(listaParaPDF( { ...state } ))
        //alert(state.selectedValue)
    };

    // Test current step with ternary
    // _next and _previous consts will be called on button click
    const _next = () => {
        let currentStep = state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setState({
            ...state,
            currentStep: currentStep
        });
    }

    const _prev = () => {
        let currentStep = state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        setState({
            ...state,
            currentStep: currentStep
        });
    }

    // The "next" and "previous" button consts
    const previousButton = () => {
        let currentStep = state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button color="float-left" variant="btn btn-outline-secondary" onClick={_prev}>
                    atrás
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    const nextButton = () => {
        let currentStep = state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <Button color="float-right" variant="btn btn-outline-secondary" onClick={_next}>
                    siguiente
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    const submitButton = () => {
        let currentStep = state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 2) {
            return <Button color="float-right" variant="btn btn-outline-secondary" type="submit">Enviar</Button>;
        }
        return null;
    }

    useEffect(()=>{
        console.log(data)
    },[data])

    return (
        <>
            <div className="container">
                <MultiStepProgressBar currentStep={state.currentStep} />
            </div>
            <Form className='mt-5'>
                <Step1
                    currentStep={state.currentStep}
                    handleChange={handleSelected}
                    username={state.selectedValue}
                />
                <Step2
                    currentStep={state.currentStep}
                    handleChange={handleChange}
                    password={state.password}
                />
                <Step3
                    currentStep={state.currentStep}
                    handleChange={handleChange}
                    password2={state.password2}
                />
            </Form>
            <Form onSubmit={handleSubmit}>
                <div>
                    {previousButton()}
                    {nextButton()}
                    {submitButton()}
                </div>
            </Form>
        </>
    );
}