import React, { Component } from 'react'
import './Home.css'
import Footer from '../footer/Footer'
import { BiHeart } from 'react-icons/bi'
import { Link } from 'react-router-dom'


class Home extends Component {
    clickHandler = (item, id) =>{
        this.props.click(item,id)
    }
    render(){
        return (
            <>
                <div id='dpts-and-products'>
                    <div className='column1'>
                        <button ouline color='primary' className='dpts-btn'>
                            Departments
                        </button>
                    
                        <div className='all-cat-sect'>
                            <p className='all-cat'>All Categories</p>
                            <ul>
                                <li id='cate'>
                                <select className='ecommerce'>
                                <option value='Ecommerce Patterns'>Ecommerce Patterns</option>
                                </select>
                                </li>
                                <ul>
                                <li id='cate'>
                                <select>
                                <option value='Electronics'>Electronics
                                </option>
                                </select>
                                </li>
    
                                <li id='cate'>
                                <select>
                                <option value=''>Cell Phones & Smartphones</option>
                                </select>
                                </li>
                                
                                <li id='cate'>
                                <p>Cell Phones Gadgets</p>
                                </li>
    
                                <li id='cate'>
                                <p>Applications</p>
                                </li>
    
                                <li id='cate'>
                                <p>Smart Watches</p>
                                </li>
                                </ul>
                                
    
                                <li id='cate'>
                                <select className='showmore'>
                                <option value='Show More'>Show More</option>
                                </select>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div className='products container'>
                    {this.props.products.length < 1 ? <p style = {{display: 'block', textAlign: 'center', marginTop: '50px'}}>Item not found!</p> : null}
                    {this.props.products.map(item =>(
                        <div key={item.id} className='product-card'>

                        <Link 
                        to = {{ pathname: `/productdeets/${item.id}`}}> <img src= {item.image} alt={'images'} className='img'/>
                        </Link>
                        
                        <div>
                        <p className='product'>{item.productname}</p>
                        <p className='deets'>{item.productdetails}</p>
                        <p className='price'>${item.price}</p>
                        <p className='shipping'>{item.shipping}</p>
                        <button className='watch' onClick = {() => this.clickHandler(item, item.id)}><BiHeart className='heart-btn'/> {item.watchbutton}</button>
                        </div>
                        </div>
                    ))}
                    </div>
    
                </div>    
                
                <div>
                <Footer/>
                </div>
            
            </>
        )
    }
    
}

export default Home
