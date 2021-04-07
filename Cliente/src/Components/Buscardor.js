import React, {useState, useEffect} from 'react';
import logoML from '../img/logo.png';
import '../Css/Buscador.css';
import { withRouter } from 'react-router-dom';
import {useHistory, useParams, Link} from 'react-router-dom';


const  Buscador = (props) => {
    const {id} = useParams();
    const {setResultado, terminoBusqueda, guardarTerminoBusqueda } = props;
    const [busqueda, setBusqueda] = useState('');
    const history = useHistory();
    const [error, guardarError] = useState(false);

    const buscar = e => {
        e.preventDefault();

        //validar
        if(terminoBusqueda === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        setBusqueda(terminoBusqueda)
        

       history.push(`/item/${terminoBusqueda}`)
    }

    useEffect(() => {
        const consultarApi = async () => {
          if(busqueda === '') return;
          const url = `http://localhost:8081/api/items?q=${busqueda}`;
    
          const respuesta = await fetch(url);
    
          const resultado = await respuesta.json();
          setResultado(resultado);
    
        }
    
        consultarApi();
      }, [busqueda])

    return ( 
        <form >
            <div className="containerBuscador">
                <div>
                    <img src={logoML} className="logo"/>
                </div>
                
                    <div className="containerInput">
                        <input
                            className="inpuText"
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            onChange={e => guardarTerminoBusqueda(e.target.value)}/>
                            <button onClick={buscar} className="searchButton">
                                <i className="fas fa-search"></i>
                            </button>
                    </div>
            </div>
        </form>
     );
}
 
export default withRouter(Buscador);