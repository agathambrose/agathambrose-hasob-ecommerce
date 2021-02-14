import React from 'react'
import '../usercart/UserCart.css'
import { IoMdTrash } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import { HiOutlinePlus } from 'react-icons/hi'
import { BiMinus } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function UserCart (props){
const prices = [];
props.wishList.map(item => prices.push(item.price));
const total = prices.reduce((a,b) => a + b, 0)

let list = null;
if(props.wishList.length === 0){
    list = <p>Your cart is currently empty</p>
}else{
    list = props.wishList.map(item =>{
        return(
            <div className='usrCt'>
                <div className='img-sect col-md-8'>
                    <img className='cart-img' src ={item.image} alt={'images'}/>
                    <div className='cart__descrip'> 
                    <li className='cart-list'><strong>{item.productname}</strong></li>
                    <li className='cart-productdetails'>{item.productdetails}</li>

                    <div className='rmsave'>
                        <p className='sv'><IoMdHeart className='sv-icon'/>Save</p>
                        
                        <p className='rm' onClick = {() => props.remove(item.id)}><IoMdTrash className='rm-icon'/>Remove</p>
                    </div>

                    <div className='pls-min__btn'>
                        <button className='plbtn' onClick = {() => props.increase(item, item.id)}><HiOutlinePlus/></button>

                        <button className='minbtn' onClick = {() => props.decrease(item, item.id)} disabled = {item.quantity < 2}><BiMinus/></button>
                    </div>
                    </div>
                </div>

                    <div className='cart-qty col-md-1'>
                        <p>{item.quantity}</p>
                    </div>

                    <div className='cart-price col-md-1'>
                        <p>
                        {item.unitPrice}
                        </p>
                    </div>

                    <div className='col-md-2'>
                        <p>
                        {item.price.toFixed(2)}
                        </p>
                    </div>
                
            </div>
        )
    })
}

        return (
            <div>
                <div className='cartHead'>
                    <p className='col-md-6'>Items</p>
                    <p className='col-md-2'>Quantity</p>
                    <p className='col-md-2'>Price</p>
                    <p className='col-md-2'>Sub-total</p>
                </div>

                <div className='row1'>
                {list}
                </div>
                
                <div className='crt__t'>
                <p className='cart-total'>Total: <p>
                <strong>${total.toFixed(2)} </strong>
                </p></p>
                </div>

                <div className='ctn_shpn-check_out'>
                <Link to = '/'>
                <button className='ctn-shpn'>Continue Shopping</button>
                </Link>
                
                <Link to = '/signin'>
                <button className='check__out'>Checkout</button>
                </Link> 
                </div>
            </div>
        )
       
}
        
export default UserCart
