import React from 'react'
import './login.css'
import logo from '../../../assets/images/download.png'
import { useContext, useEffect } from 'react'
import pattern from '../../../assets/images/pattern.df9a7a28fc13484d1013.webp'

import { MyContext } from '../../../App'
import Gimg from '../../../assets/images/download (1).png'
import {Link} from 'react-router'

export default function Login() {

    const context = useContext(MyContext);

    useEffect(()=>{
        context.sethideSidebar(true);
    },[])
  return (
    <>
    <img  src={pattern} className='login_pattern'/>
        <div className='login_section'>
            
                <div className='logo text-center'>
                    <img  src={logo} alt="logo"/>
                    <h4>Login to Admin Dashboard</h4>
                </div>
            
            <div className='login_box'>
                <div className='logArea'>
                <form className='form'>
                    <div className='form-group mb-3 d-flex align-items-center'>
                        <i class="fa-solid fa-envelope ficon"></i>
                        <input type='text' placeholder='enter your email' className='form-control' />
                    </div>

                    <div className='form-group mb-3 d-flex align-items-center'>
                        <i class="fa-solid fa-lock ficon"></i>
                        <input type='text' placeholder='enter your password' className='form-control' />
                        <i class="fa-solid fa-eye licon"></i>
                    </div>

                    <div className='form-group mb-3'>
                       <button className='btn sbtn'>Submit</button>
                    </div>
                </form>

                <h4>FORGOT PASSWORD</h4>
                     <div className='d-flex align-items-center linesec'>
                        <span className='line'></span>
                        <button className='or'>or</button>
                        <span className='line'></span>
                    </div>
                    

                <div className='d-flex align-items-center justify-content-center gsec text-center'>
                    <img src={Gimg} />
                    <p>Sign In With Google</p>
                </div>
                
            </div>
            </div>

            <div className='no_acc'>
                <div className='no_acc_area'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p>Don't have an account? <Link to="/signup" className='reg'>Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
