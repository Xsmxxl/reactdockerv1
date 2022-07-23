import { createSlice } from "@reduxjs/toolkit";

export const serviceStateSlice = createSlice({
    name: 'serviceState',
    initialState: [],
    reducers: {
        salir: (state)=>{
            sessionStorage.removeItem('isLogged');
        }
    }
})

export const {salir} = serviceStateSlice.actions

export default serviceStateSlice.reducer