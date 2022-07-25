import './App.css';
import AnimatedLoginRoutes from './pages/animatedLoginRoutes';
import AnimatedLogedRoutes from './pages/animatedLogedRoutes';

//Ejemplo en https://coderthemes.com/hyper/saas/index.html

function getLogin() {
  const loginString = sessionStorage.getItem('isLogged');
  return loginString;
}

function App() {
  const isLogged = getLogin();

  if (!isLogged) {
    return (
      <div className="App">
        <AnimatedLoginRoutes />
      </div>
    );
  }else{
    return (
      <div className="App">
        <AnimatedLogedRoutes/>
      </div>
    );
  }

}

export default App;
