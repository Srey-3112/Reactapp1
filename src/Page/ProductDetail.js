import React from 'react'
import { useParams } from 'react-router'
export const ProductDetail = () => {
    const params=useParams();
    return (
        <div>
            <h2>product details!!!!</h2>
            <h3>{params.productid}</h3>
            <h3>{params.productName}</h3>
          
        </div>
    )
}
