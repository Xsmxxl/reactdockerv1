import { createSlice } from "@reduxjs/toolkit";

export const serviceStateSlice = createSlice({
    name: 'serviceState',
    initialState: [],
    reducers: {
        login: (state, user)=>{
            if (user.payload.name === "xsm") {
                if (user.payload.password === "123") {
                    sessionStorage.removeItem('isLogged');
                    sessionStorage.setItem('isLogged', true);
                }
            }
        },
        salir: (state)=>{
            sessionStorage.removeItem('isLogged');
        },
        listaParaPDF: (state, action)=>{
            state.push(action.payload);
        }
    }
})

export const {salir, login, listaParaPDF} = serviceStateSlice.actions

export default serviceStateSlice.reducer