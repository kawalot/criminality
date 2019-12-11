import React from "react";
import '../styles/Info.scss'


const Info = (props) => {

    return <section id="mainInfo">
                <p>Info:</p>
                {props.data && <p>{props.data.item.url}</p>}
            </section>
}

export default Info;