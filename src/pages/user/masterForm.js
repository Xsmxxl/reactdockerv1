import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { listaParaPDF, actualizarEstado, cambiarPaso, setGuardar } from "../../features/services/serviceStateSlice";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import MultiStepProgressBar from "./multiStepProgressBar";

export default function MasterForm(props) {
    const _data = useSelector((state) => state.serviceState);
    const data = _data[0].page.estados.variables;
    const guardar = _data[0].page.estados.guardar;
    const dispatch = useDispatch();

    const [pasos, setPasos] = useState(1);

    const [state, setState] = useState({
        id: 1,
        selectedValue: 0,
        selectedCantidad: 1,
        selectedText: "",
        total: 0
    });

    // Use the submitted data to set the state
    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSelectedC = event => {
        event.preventDefault();
        if (event.target.id) {
            setState({
                id: parseInt(event.target.id),
                selectedValue: parseFloat(state.selectedValue),
                selectedCantidad: parseInt(event.target.value),
                selectedText: state.selectedText,
                total: parseFloat(parseFloat(state.selectedValue) * parseFloat(event.target.value))
            });
            dispatch( actualizarEstado({...state}) )
            dispatch( setGuardar(true))
        } else {
            dispatch( setGuardar(false))
        }
    }

    const handleSelected = event => {
        const text = event.target.selectedOptions[0].text.split("-")[0]
        if (text) {
            setState({
                id: state.id,
                selectedValue: parseFloat(event.target.value),
                selectedCantidad: parseInt(state.selectedCantidad),
                selectedText: text,
                total: parseFloat(parseFloat(event.target.value) * parseFloat(state.selectedCantidad))
            });
            dispatch( setGuardar(true))
        } else {
            dispatch( setGuardar(false))
        }
    }

    const handleAddItem = () => {
        let id = state.id
        id = id + 1
        setState({
            id: id,
            selectedValue: parseFloat(state.selectedValue),
            selectedCantidad: parseInt(state.selectedCantidad),
            selectedText: state.selectedText,
            total: parseFloat(parseFloat(state.selectedValue) * parseFloat(state.selectedCantidad))
        })
        if (guardar) {
            dispatch(listaParaPDF({
                id: state.id,
                selectedValue: parseFloat(state.selectedValue),
                selectedCantidad: parseInt(state.selectedCantidad),
                selectedText: state.selectedText,
                total: parseFloat(parseFloat(state.selectedValue) * parseFloat(state.selectedCantidad))
            }))
        }
    }

    // Trigger an alert on form submission
    const handleSubmit = event => {
        event.preventDefault();
        //const { username, password } = state;
        if (guardar) {
            dispatch(listaParaPDF({ ...state }))
        }
        //alert(state.selectedValue)
    };


    // Test current step with ternary
    // _next and _previous consts will be called on button click
    const _next = () => {
        let currentStep = pasos;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setPasos(currentStep)
        dispatch(cambiarPaso(pasos))
    }

    const _prev = () => {
        let currentStep = pasos;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        setPasos(currentStep)
        dispatch(cambiarPaso(pasos))
    }

    // The "next" and "previous" button consts
    const previousButton = () => {
        let currentStep = pasos;

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
        let currentStep = pasos;
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
        let currentStep = pasos;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 2) {
            return <Button color="float-right" variant="btn btn-outline-secondary" type="submit">Enviar</Button>;
        }
        return null;
    }

    useEffect(() => {
        console.log(_data)
    }, [data, _data])

    return (
        <>
            <div className="container">
                <MultiStepProgressBar currentStep={pasos} />
            </div>
            <Form className='mt-5'>
                <Step1
                    currentStep={pasos}
                    handleChange={handleSelected}
                    handleChange2={handleSelectedC}
                    handleOnClick={handleAddItem}
                    username={state.selectedValue}
                    data={data}
                    id={data.id}
                />
                <Step2
                    currentStep={pasos}
                    handleChange={handleChange}
                    password={state.password}
                />
                <Step3
                    currentStep={pasos}
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