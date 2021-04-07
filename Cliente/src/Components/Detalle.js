import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../Css/Detalle.css';
import Loading from '../Components/Loading';
import Breadcrumb from '../Components/Breadcrum';



const convertNumber = (n) => new Number(n).toLocaleString("es-AR");


const Detalle = () => {

    const {id} = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const obtenerProducto = async() => {
            const data = await fetch(`http://localhost:8081/api/items/${id}`);
            const resultado = await data.json();
    
            setProducto(resultado)
        }
        obtenerProducto()
    }, [id]);

   
   if(producto.item) {
    const {picture, description, sold_quantity, title, condition, price:{ amount, decimals }, categories} = producto.item;
    return(
        <div>
            <div className="containerBreadcrumb">
                <Breadcrumb list={categories}/>
            </div>
            
        
        <div className="detailContainer">
            
           <div className="containerContent">
                <div className="containerAside">
                    <div className="containerImgDesktop">
                        <img src={picture} className="pruductoImgDesktop"/>
                    </div>
                    <div className="cotainerDescriptionProduct">
                        <p>{condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos</p>
                        <p className="title-producto">{title}</p>
                        <div className="containerPriceDesktop">
                            <p className="price-desktop">$ {convertNumber(amount)}<span className="decimals">{decimals}</span></p>
                            <button className="btn-comprar">Comprar</button>
                        </div>
                    </div>
                    
                </div>
                <div className="containerImgMobile">
                    <img src={picture} className="pruductoImgMobile"/>
                </div>
                <div className="containerPriceMobile">
                    <p>$ {convertNumber(amount)}<span className="decimals">{decimals}</span></p>
                    <button className="btn-comprar">Comprar</button>
                </div>
                <div className="containerProductDescription"> 
                    <p className="title-description">Descripcion del producto</p>
                    <p className="text-description">{description}</p>
                </div>
                
                
            </div>
        </div>
        </div>
    )} else {
        return(
        <div>
            <Loading/>
        </div>)
    }
}

export default Detalle;