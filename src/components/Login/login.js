import React, { useState, useContext, useEffect } from "react";
import useChangeInputConfig from "./inputFieldHooks";
import "./login.css";
import Layout from "../layout/Layout";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Login(props) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [
        email,
        handleEmailChange,
        isEmailError,
        emailErrorMessage,
        emailcanSubmit,
        emailOnFocus,
        handleEmailOnFocus
    ] = useChangeInputConfig("email");

    const [
        password,
        handlepasswordChange,
        isPasswordError,
        passwordErrorMessage,
        passwordcanSubmit,
        passwordOnFocus,
        handlepasswordOnFocus
    ] = useChangeInputConfig("password");

    const UserArray = [{email : "minahil@gmail.com" , password : "Minahil123$"}]

    const [canSubmit, setCanSubmit] = useState(true);
    const navigate = useNavigate();

     useEffect(() => {
         if (user !== null){
             navigate("/");
         }
       
        if (emailcanSubmit === false && passwordcanSubmit === false) {
            if (emailOnFocus && passwordOnFocus) {
                if (
                    emailErrorMessage.length === 0 &&
                    passwordErrorMessage.length === 0
                ) {
                    setCanSubmit(false)
                }
            }
        }
        else {
            setCanSubmit(true)
        }
    }, [emailcanSubmit, passwordcanSubmit]);


    async function handleOnSubmit(event) {
        event.preventDefault();

        if (email === UserArray[0].email && password === UserArray[0].password){
            dispatch({ type: "Login_User", payload: { email: email, password : password} })
            navigate("/")
        }
        else{
            console.log("incoorect information")
        }
    }


    return (
        <div id="homeMainDiv">
            <div id="homeMainDivWidth">
                <Layout>
            <div className="container2">
                <div className="form-text">Log In</div>

                <div className="form-div">
                    <form className="form" onSubmit={handleOnSubmit}>
                        <div className="form-group-block">
                            <div className="block-container">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onFocus={handleEmailOnFocus}
                                    autoFocus
                                />
                                <div className="errorMessage">{isEmailError && emailErrorMessage}</div>
                            </div>
                        </div>

                        <div className="form-group-block">
                            <div className="block-container">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onFocus={handlepasswordOnFocus}
                                    onChange={handlepasswordChange}
                                />
                                <div className="errorMessage">
                                    {isPasswordError && passwordErrorMessage}
                                </div>
                            </div>
                        </div>

                        <div className="button-container">
                            <button type="submit" disabled={canSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
                </Layout>
            </div>
        </div>
    );
}

export default Login;
