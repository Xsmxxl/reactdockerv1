import './App.css';
import { Routes, Route } from "react-router-dom";
//import { useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';

//Ejemplo en https://coderthemes.com/hyper/saas/index.html

function setLogin(valor) {
  sessionStorage.setItem('isLogged', valor);
}

function getLogin() {
  const loginString = sessionStorage.getItem('isLogged');
  return loginString;
}

function App() {
  const isLogged = getLogin();
  console.log(isLogged);

  if(isLogged) {
    return <Login setLogin={setLogin}/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </div>
  );

}

export default App;
