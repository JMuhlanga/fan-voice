import React, { useState } from "react";
import Error from './Error';
import styled from "styled-components";

function Login({ onLogin, signup }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const FormField = styled.div`
        &:not(:last-child) {
        margin-bottom: 12px;
    }`;
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://fan-voice-api-production-2957.up.railway.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        }else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return(
        <>
            <div className="container">
                <div className="album py-5 bg-light"></div>
                <div className="reg-form">
                    <form onSubmit={handleSubmit} className="login-form">

                        <h2>Sign-In</h2>

                        <label className="form-label" htmlFor="username">Username:</label>
                        <input
                        type="text"
                        id="username"
                        className="form-control"
                        autoComplete="off"
                        placeholder=" Please enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />

                        <label className="form-label" htmlFor="password">Password:</label>

                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className="form-control"
                            placeholder=" Please enter your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <button type="submit" className="btn btn-primary">Login</button>

                        <p>
                        Dont't Have an Account? Sign Up below
                        </p>

                        <FormField>
                        {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                        ))}
                        </FormField>
                        {signup}
                    </form>
                </div>
            </div>
        </>
    )

}
export default Login;