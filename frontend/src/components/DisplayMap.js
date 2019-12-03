import React, { Component } from "react";

const DisplayMap = (props) => {

    const casesTemplate = props.data.map(function(item, index) {
      return (
        <div key={item.registry_number}>
          <p className="case__address">{item.address}</p>
          <p className="case__case_number">{item.case_number}</p>
          <p className="case__url">{item.url}</p>
        </div>
      )
    })

    return <div>{casesTemplate}</div>
}

export default DisplayMap;