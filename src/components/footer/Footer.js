import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { IoIosPhonePortrait } from 'react-icons/io'
import { HiOutlineLocationMarker } from 'react-icons/hi'


const Footer = () => {
    return (
        <footer>
            <div className='pages-container'>
                <div className='pgs'>
                    <ul>
                    <h4 className='pages'>Pages</h4>
                    <li className='pages-listing'>Home</li>
                    <li className='pages-listing'>Product</li>
                    <li className='pages-listing'>Pricing</li>
                    <li className='pages-listing'>About</li>
                    <li className='pages-listing'>Contact</li>
                    </ul>
                </div>    
            
                <div className='designer-container'>
                    <ul>
                    <h4 className='designer'>Top Designer Brands</h4>

                    <li className='dsnr'>Eleanor Edwards</li>
                    <li className='dsnr'>Ted Robertson</li>
                    <li className='dsnr'>Annette Russell</li>
                    <li className='dsnr'>Jennie Mckinney</li>
                    <li className='dsnr'>Gloria Richards</li>
                    </ul>

                    <ul className = 'col-2dsnr'>
                    <li className='dsnr'>Philip Jones</li>
                    <li className='dsnr'>Product</li>
                    <li className='dsnr'>Colleen Russell</li>
                    <li className='dsnr'>Marvin Hawkins</li>
                    <li className='dsnr'>Bruce Simmons</li>
                    </ul>
                </div>    
                <div className='cn-soc'>
                    <ul className='contact'>
                        <li className='address'><HiOutlineLocationMarker className='address-icon'/>7480 Mockingbird Hill undefined</li>
                        <i></i>

                        <li className='phone'><IoIosPhonePortrait className='phone-icon'/>(239) 555-0108</li>
                        <i></i>
                    </ul>
                
                    <ul className='socials'>
                        <li>
                            <FiTwitter className='twtr'/>

                            <FaFacebookSquare className='fbk'/>

                            <FaLinkedin className='lkdn'/>
                        </li>
                    </ul>
                </div>
            </div>        
    </footer>
    );
}

export default Footer
