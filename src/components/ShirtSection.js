import React from 'react'
import { Link } from 'react-router-dom';

const ShirtSection = ({products,dataSearch,imgClick}) => {
    
    // const handleClick = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div>
            <div className='ss-container'>
            
            <ul className='products'>
        {dataSearch.length > 0 ? dataSearch.map((product,i) => {
            return(

                        

                        <li key = {i}>
                            <div className='product'>
                                {/* <Link to='/detailspage'> */}
                                <Link to= '/detailspage'
                                    state = {{
                                        productImg: product.images[0].src,
                                        productBrand: product.brand,
                                        productName: product.productName,
                                        productPrice: product.mrp
                                    }}

                                    
                            >
                                    <img src={product.images[0].src} alt = "" className='imgL'/>
                                    
                                    
                                    <span>
                                        {product.brand}
                                    </span>
                                    <p>
                                        {product.productName}
                                    </p>
                                </Link>
                                    <div className='product-price'>
                                        <div>
                                            Rs.{product.mrp + ' ' + product.discountDisplayLabel}
                                        </div>
                                        <button className='buttonCart'>
                                            Add to Cart
                                        </button>
                                    </div>
                                
                            </div>
                        </li>
            )
        }
        ): 
        
            products.map((product,i) => {
                    return(
                        <li key = {i}>
                            <div className='product'>
                                <div>
                                    <img src={product.images[0].src} alt = "" className='imgL'/>
                                    
                                </div>
                                <span>
                                    {product.brand}
                                </span>
                                <p>
                                    {product.productName}
                                </p>
                                <div className='product-price'>
                                    <div>
                                        Rs.{product.mrp + ' ' + product.discountDisplayLabel}
                                    </div>
                                    <button className='buttonCart'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>

                    )
                        
                    })

                }
            
            
                   
            </ul>
        </div>
        </div>
        
        
    )
}

export default ShirtSection
