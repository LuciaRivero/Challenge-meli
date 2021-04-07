import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import Item from './Item';
import Breadcrumb from './Breadcrum';
import '../Css/resultados.css';



const Resultado = ({ resultado }) => {
    resultado = Object.keys(resultado) == 0 ? { items: [], categories: [] } : resultado

    const {items, categories} = resultado;
    const resultados = items.slice(0, 4)
    return ( 
        <div>
            <div className="container-breadcrumb">
                <Breadcrumb list={categories}/>
            </div>
            <div className="containerResultado">
            <div className="resultado">
                {resultados.map(i => {
                    return(
                    <Item key={i.id} item={i}/>
                    )
                })}
            </div>
        </div>
        </div>
        
     )
}
 
export default Resultado;