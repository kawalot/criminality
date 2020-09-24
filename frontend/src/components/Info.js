import React from "react";
import '../styles/Info.scss'


const Info = (props) => {

    return <section id="mainInfo">
                
                {props.data && <p><a href={props.data.item.url}>№ решения {props.data.item.registry_number}</a></p>}
                {props.data && <p>{props.data.item.address}</p>}
                {props.data && <p>{props.data.item.comment}</p>}
            </section>
}

export default Info;