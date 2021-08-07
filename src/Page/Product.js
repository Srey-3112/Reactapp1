import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div>
            <ul>
                <li><Link to="/product/p1/Samsung">Samsung</Link></li>
                <li><Link to="/product/p2/Iphone">Iphone</Link></li>
                <li><Link to="/product/p3/Asus Rog">Asus Rog</Link></li>
            </ul>
        </div>
    )
}
