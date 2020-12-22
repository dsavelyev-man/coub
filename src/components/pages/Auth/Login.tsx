import React from "react";
import "./auth.css"
import myLogo from "../../../common/images/myLogo.png";
import coubLog from "../../../common/images/coub.png";
import {animated, useSpring} from "react-spring";
import coub from "../../../coub";

export default function Login() {
    const [backgroundColor, set] = useSpring(() => ({
        color: "#58A6FF",
        backgroundColor: '#1D2633',
        config: { duration: 100 }
    }));
    return (
        <div className="auth-login">
            <div className="auth-login-form">
                <div className="auth-login-content">
                    <img className="auth-login-logo auth-login-logo-left" src={myLogo} alt="myLogo"/>
                    <div className="auth-login-dot"/>
                    <div className="auth-login-dot"/>
                    <div className="auth-login-dot"/>
                    <div className="auth-login-dot"/>
                    <div className="auth-login-dot"/>
                    <img className="auth-login-logo auth-login-logo-right" src={coubLog} alt="coubLog"/>
                </div>
                <h3 className="auth-login-desc">Привяжите учетную запись <a className="auth-login-desc-coub" href="https://coub.com">coub</a> что бы <br/>войти</h3>
                <a href={coub.authorizing}>
                    <animated.button
                        style={backgroundColor}
                        className="auth-login-button"
                        onMouseEnter={() => set({  color: "#FFFFFF", backgroundColor: "#0332ff" })}
                        onMouseLeave={() => set({  color: "#58A6FF", backgroundColor: "#1D2633" })}
                        onMouseDown={() => set({  color: "#FFFFFF", backgroundColor: "#0332ff" })}
                    >
                        Привязать
                    </animated.button>
                </a>
            </div>
        </div>
    )
}