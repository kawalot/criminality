import React, { useEffect } from "react";
import '../styles/Info.scss'

const Login = (props) => {

    useEffect(() => {
        props.setInfoNull()
    }, []);

    return <article>
                <h2>Login form</h2>
            </article>
}

export default Login;