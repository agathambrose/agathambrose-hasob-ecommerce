import React from 'react'
import '../signin/Signin.css'
import { GrFacebook } from 'react-icons/gr'
import { BiLogIn } from 'react-icons/bi'

const Signup = () => {
    return (
      <div href = '/signin' className='ab'>
      <div className='abc'>
      <h1>REGISTER</h1>
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

      <div>
      <button className='bcd'><BiLogIn className='lgicon'/>CREATE ACCOUNT</button>
      </div>

      <div>
      <button className='cbd'> <GrFacebook className='fbicon'/>REGISTER WITH FACEBOOK</button>
      </div>

      </form>
    
      <p className='abcP'>
      Already have an account? <a href='/signin'>Sign in</a>
      </p> 
    </div>
    )
}

export default Signup
