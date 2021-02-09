import React from 'react'
import Search from './Search'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import user from '../../assets/img/usericon.png'

const Header = (props) => {
    return (
        <header className="header">
        <div>
        <Link to ='/'>
        <h3 className='logo'><AiOutlineMenu className='hamburger'/>Logo</h3>
        </Link>
        </div>

        <div>
        <Search search = {props.handleSearch} value= {props.value} className='search'/>
        </div>

        <div className ='signin-sect'>
        <Link to ='/signin'><button className="sign-in">Sign in</button></Link>

        <Link to ='/UserCart'>
        <AiOutlineShoppingCart className='cart'/>
        </Link>

        <img className='user-image' src={user} alt='user'/>
        </div>
        </header>
    )
}

export default Header