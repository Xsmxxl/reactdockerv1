import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        page: {
            estados: {
                currentStep: 1,
                guardar: false,
                variables: []
            },
            user: {
                username: "",
                isLoged: false
            }
        }
    }
]

export const serviceStateSlice = createSlice({
    name: 'serviceState',
    initialState,
    reducers: {
        login: (state, user) => {
            if (user.payload.name === "xsm") {
                if (user.payload.password === "123") {
                    state[0].page.user.username = user.payload.name;
                    state[0].page.user.isLoged = true;
                    sessionStorage.removeItem('isLogged');
                    sessionStorage.setItem('isLogged', true);
                }
            }
        },
        salir: (state) => {
            sessionStorage.removeItem('isLogged');
        },
        listaParaPDF: (state, action) => {
            state[0].page.estados.variables.push(action.payload);
        },
        cambiarPaso: (state, action) => {
            state[0].page.estados.currentStep = action.payload;
        },
        actualizarEstado: (state, action) => {
            const foundTask = state[0].page.estados.variables.find((serviceState) => serviceState.id === action.payload.id);
            if (foundTask) {
                foundTask.selectedValue= action.payload.selectedValue;
                foundTask.selectedText= action.payload.selectedText;
                foundTask.selectedCantidad= action.payload.selectedCantidad;
                foundTask.total= action.payload.total;
            }
        },
        setGuardar: (state, action)=>{
            state[0].page.estados.guardar = action.payload
        }
    }
})

export const { salir, login, listaParaPDF, actualizarEstado, cambiarPaso, setGuardar } = serviceStateSlice.actions

export default serviceStateSlice.reducer