import React, { useEffect } from "react";


const About = (props) => {

    useEffect(() => {
        props.setInfoNull()
    }, []);

    return <section className="main">
                <p>Some info about site.</p>
           </section>
}

export default About;
