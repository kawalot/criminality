import React, { useEffect } from "react";
import '../styles/Info.scss'

const Login = (props) => {

    useEffect(() => {
        props.setInfoNull()
    }, []);

    return <section className="main">
                <h2>Login form</h2>
            </section>
}

export default Login;