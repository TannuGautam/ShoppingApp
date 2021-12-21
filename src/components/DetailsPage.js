import React from 'react'
import NavBar from './NavBar';
import { TransformComponent, TransformWrapper} from "react-zoom-pan-pinch"
import { useLocation } from 'react-router-dom'


const DetailsPage = (props) => {

    const location = useLocation()
    const { productImg, productBrand, productName, productPrice } = location.state

    
    return (
        <div>
           <NavBar /> 
           <div className='d-container'>
                <TransformWrapper defaultScale = {1}
                        defaultPositionX = {100}
                        defaultPositionX = {200}>
                    <TransformComponent>
                        {/* console.log(productImg); */}
                        <img className='dimgL' src = {productImg }></img>
                    </TransformComponent>      
                </TransformWrapper> 
                <div className='dsections'>
                    <h1 className='prod'>{productBrand}</h1>
                    <h2 className='prod'>{productName}</h2>
                    <h3 className='prod'>Rs. {productPrice}</h3>
                    <button className='buttonCart1'>
                        Add to Cart
                    </button>
                </div>          
           </div>
           
        </div>
    )
}

export default DetailsPage
