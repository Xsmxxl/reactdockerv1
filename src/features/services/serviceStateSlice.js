import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        page: {
            user: {
                username: "",
                isLoged: false
            },
            estados: {
                currentStep: 1,
                guardar: false,
                variables: [],
                estatico: {
                    id: 1,
                    selectedValue: 1,
                    selectedCantidad: 1,
                    selectedText: "",
                    total: 1
                },
                paraImprimir: {
                    cantidades: [],
                    descripciones: [],
                    totales: []
                }
            }
        }
    }
]

export const serviceStateSlice = createSlice({
    name: 'serviceState',
    initialState,
    reducers: {
        login: (state, action) => {
            state[0].page.user.username = action.payload.name;
            state[0].page.user.isLoged = true;
            sessionStorage.removeItem('isLogged');
            sessionStorage.setItem('isLogged', true);
        },
        salir: (state) => {
            sessionStorage.removeItem('isLogged');
        },
        add: (state, action) => {
            state[0].page.estados.variables.push(action.payload);
        },
        setPaso: (state, action) => {
            state[0].page.estados.currentStep = action.payload;
        },
        update: (state, action) => {
            const foundTask = state[0].page.estados.variables.find((serviceState) => serviceState.id === action.payload.id);
            if (foundTask) {
                foundTask.selectedCantidad = action.payload.selectedCantidad;
                foundTask.total = parseFloat(foundTask.selectedValue * action.payload.selectedCantidad).toFixed(2);
            }
        },
        Del: (state, action) => {
            const foundTask = state[0].page.estados.variables.find((serviceState) => serviceState.id === action.payload);
            if (foundTask) {
                state[0].page.estados.variables.splice(state[0].page.estados.variables.indexOf(foundTask), 1);
            }
        },
        setGuardar: (state, action) => {
            state[0].page.estados.guardar = action.payload
        },
        setEstado: (state, action) => {
            state[0].page.estados.estatico.id = action.payload.id;
            state[0].page.estados.estatico.selectedValue = action.payload.selectedValue;
            state[0].page.estados.estatico.selectedText = action.payload.selectedText;
            state[0].page.estados.estatico.selectedCantidad = action.payload.selectedCantidad;
            state[0].page.estados.estatico.total = action.payload.total;
        },
        setImprimir: (state, action)=>{
            state[0].page.estados.paraImprimir.cantidades.push(action.payload.selectedCantidad)
            state[0].page.estados.paraImprimir.descripciones.push(action.payload.selectedText)
            state[0].page.estados.paraImprimir.totales.push(action.payload.total)
        }
    }
})

export const { login, salir, add, update, Del, setPaso, setGuardar, setEstado, setImprimir } = serviceStateSlice.actions

export default serviceStateSlice.reducer