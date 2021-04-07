import React from 'react';
import '../Css/resultados.css'


const Breadcrumb = ({ list }) => {

    return (
        <div className="bradcrumb">
            <p>{list.join(" > ")}</p>
        </div>
    )
}

export default Breadcrumb;