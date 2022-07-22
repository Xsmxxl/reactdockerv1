import { useState } from 'react';
/*async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}*/

export default function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    //let eso = true;
    const handleSubmit = async e => {
        if(!username){
            console.log("No hay nada en user");
        }
        if(!password){
            console.log("No hay nada en password");
        }
        if(username === "xsm"){
            if(password === "123"){
                sessionStorage.removeItem('isLogged');
                sessionStorage.setItem('isLogged', true);
                //setLogin(true);
            }
        }
    }

    return (
        <>
            <div>
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}