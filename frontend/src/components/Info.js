import React from "react";
import '../styles/Info.scss'


const Info = (props) => {
    return <section id="mainInfo">
                <p>Info:</p>
                <p>{props.data}</p>
            </section>
}

export default Info;