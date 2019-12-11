import React, { useEffect } from "react";


const About = (props) => {

    useEffect(() => {
        props.setInfoNull()
    }, []);

    return <div className="about">
                <p>Some info about site</p>
           </div>
}

export default About;
