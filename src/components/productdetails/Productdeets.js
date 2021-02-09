import React from 'react'
import '../productdetails/Productdeets.css'
import { useParams } from 'react-router-dom'
import { PRODUCTDATA } from '../../data/Productdata'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import user from '../../assets/img/starfill.png'


const Productdeets = (props) => {
    const clickHandler = (item, id) =>{
        props.click(item, id)
    }

    const {productId} = useParams();
    const product = PRODUCTDATA.find(item => item.id === productId);
    return (
        <div className='product___deets'>
            <div className='name-sect'>
                <img className='deets__img' src={product.image} alt= 'product'/>
                
                <div>
                    <h2>{product.productname}</h2>
                    <h6>{product.productdetails}</h6>
                    <p>{product.brand}</p>

                    <div className='size___sect'>
                    <p className='size_name'>{product.size} <button className='size-btn'>S</button>
                    <button className='size-btn'>M</button>
                    <button className='size-btn'>L</button>
                    <button className='size-btn'>Xl</button></p>
                    </div>
                     
                    <div className='ratings__star'>
                    <p><img className='star__image' src={user} alt='user'/>
                    <img className='star__image' src={user} alt='user'/>
                    <img className='star__image' src={user} alt='user'/>
                    <img className='star__image' src={user} alt='user'/>{product.ratings} </p>
                    </div>

                    <h4>${product.price}</h4>
                    <button className='add___tocart' onClick = {() => clickHandler(product, productId)}><AiOutlineShoppingCart/>Add to Cart</button>
                </div>
            </div>
            <div>
                <p className='product__descrip'>{product.description}</p>
            </div>
        </div>
            
    )
}

export default Productdeets
