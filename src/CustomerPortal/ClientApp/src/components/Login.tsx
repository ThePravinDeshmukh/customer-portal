import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { useForm } from "./useForm";
import { withRouter } from 'react-router-dom';

interface ILoginState {
    firstname: string,
    token: string;
}

function Login() {

    localStorage.clear();
    const history = useHistory();
    // defining the initial state for the form
    const initialState = {
        EmailAddress: "",
        Password: "",
    };
    

    const [user, setUser] = useState();

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to api
        debugger
        
        await axios.post(
            'api/user/authenticate',
            values
        )
        .then(response => {
            debugger
                // set the state of the user
                setUser(response.data);
                // store the user in localStorage
                localStorage.setItem('user', JSON.stringify(response.data));
                console.log(response.data);
                //history.push("/dashboard");
                window.location.replace("/dashboard");
            })
        .catch(error => {
            debugger
            console.error(error.response.data.message, error);
        });
    }

    return (
    <div>

    <form onSubmit={onSubmit}>
        <h3>Login</h3>

        <div className="form-group">
            <label>Email address</label>
            <input 
                name='EmailAddress'
                id='EmailAddress'
                type="email" 
                className="form-control" 
                placeholder="Enter email"
                onChange={onChange}
                required
            />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input 
                className="form-control" 
                placeholder="Enter password" 
                name='Password'
                id='Password'
                type='password'
                onChange={onChange}
                required
            />
        </div>

        {

        }

        <button type="submit" className="btn btn-primary btn-block">Submit</button>

    </form>
    </div>
        
    );
}

export default Login;
