import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { add, setPaso, setGuardar, setImprimir } from "../../features/services/serviceStateSlice";
import axios from 'axios';

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import MultiStepProgressBar from "./multiStepProgressBar";

export default function MasterForm() {
    const _data = useSelector((state) => state.serviceState);
    const data = _data[0].page.estados.variables;
    //const estado = _data[0].page.estados.estatico;
    const guardar = _data[0].page.estados.guardar;
    const dispatch = useDispatch();

    const [pasos, setPasos] = useState(1);

    const [state] = useState({
        id: 1,
        selectedValue: 0,
        selectedCantidad: 1,
        selectedText: "",
        total: 0
    });

    const handleChange = event => {
        const text = event.target.selectedOptions[0].text.split("-")[0]
        if (text) {
            dispatch(setGuardar(true))
        } else {
            dispatch(setGuardar(false))
        }
    }

    // Test current step with ternary
    // _next and _previous consts will be called on button click
    const _next = () => {
        let currentStep = pasos;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setPasos(currentStep)
        dispatch(setPaso(pasos))
    }

    const _save = async () => {
        
        data.forEach((datos, _) => {
            dispatch(setImprimir({
                selectedCantidad: datos.selectedCantidad,
                selectedText: datos.selectedText,
                total: datos.total
            }))
        })

        console.log(_data[0].page.estados.paraImprimir)

        /*let url = document.location.protocol + '//' + document.location.hostname + '/api/constancia'

        const { datax } = await axios.post(url, JSON.stringify({
            cantidad: state[0].page.estados.paraImprimir.cantidades,
            total: state[0].page.estados.paraImprimir.totales,
            descripcion: state[0].page.estados.paraImprimir.descripciones
        }), {
            headers: {
                "content-type": "application/json",
                //Authorization: `Bearer ${userInfo.token}`,
            },
        });
        console.log(datax)*/
    }

    const _prev = () => {
        let currentStep = pasos;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        setPasos(currentStep)
        dispatch(setPaso(pasos))
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

    const saveButton = () => {
        let currentStep = pasos;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 2) {
            return (
                <Button color="float-right" variant="btn btn-outline-secondary" onClick={_save}>
                    Guardar
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

    const handleSubmit = event => {
        event.preventDefault();
        //const { username, password } = state;
        if (guardar) {
            dispatch(add({ ...state }))
        }
        //alert(state.selectedValue)
    };


    useEffect(() => {
    }, [data, _data, guardar])

    return (
        <>
            <div className="container">
                <MultiStepProgressBar currentStep={pasos} />
            </div>
            <Form className='mt-5'>
                <Step1
                    currentStep={pasos}
                />
                <Step2
                    currentStep={pasos}
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
                    {saveButton()}
                    {nextButton()}
                    {submitButton()}
                </div>
            </Form>
        </>
    );
}