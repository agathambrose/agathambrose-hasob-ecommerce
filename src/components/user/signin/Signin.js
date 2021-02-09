import React from 'react'
import './Signin.css'
import { GrFacebook } from 'react-icons/gr'
import { BiLogIn } from 'react-icons/bi'


const Signin = () => {
    return (
        <div href = '/signin' className='ab'>
          <div className='abc'>
          <h1>LOGIN</h1>
          </div>  

          <form href='#' method='POST' className='form-card'>
          <div>
          <input type='text' name='Email Address' placeholder='Email Address' className='abcEmail'/>

          <input type='password' name='Password' placeholder='Password' className='abcPass'/>
          </div>

          <div className='rmfp'>
            <div id='rm'>
            <p>Remember me</p>
            </div>

            <div id='fp'>
            <p>Forgot Password?</p>
            </div>
          </div>

          <button className='bcd'><BiLogIn className='lgicon'/>LOGIN</button>

          <button className='cbd'><GrFacebook className='fbicon'/>LOGIN WITH FACEBOOK</button>

          </form>
        
          <p className='abcP'>
          Don't have an account? <a href='/signup'>Sign up</a>
          </p> 
        </div>
    )
}

export default Signin
