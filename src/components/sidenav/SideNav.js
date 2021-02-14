import React from 'react'
import './SideNav.css'


const SideNav = () => {
    return (
        <div>
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
        </div>
    )
}

export default SideNav
