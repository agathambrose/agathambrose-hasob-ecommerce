import React from 'react'
import Search from './Search'
import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import user from '../../assets/img/usericon.png'

const Header = (props) => {
    return (
        <header className='header'>
            <div className='head-sect'>
                <div>
                    <Link to = '/'>
                        <h3 className='logo-sect'><AiOutlineMenu className='hambur_ger'/>Logo</h3>
                    </Link>
                </div>

                <div className='search-sect'>
                    <Search search = {props.handleSearch} value= {props.value}/>
                </div>

                <div className='sign-in__sect'>
                    <Link to = '/signin'>
                        <button className='sign-in__btn'>Sign In</button>
                    </Link>

                    <Link to='/UserCart'>
                        <AiOutlineShoppingCart className='cart__icon'/>
                    </Link>
                    

                    <img className='user__image' src={user} alt='user'/>
                </div>
            </div>
            
        </header>
    )
}

export default Header