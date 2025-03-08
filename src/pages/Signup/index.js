import React from 'react'
import './signup.css'
import '../Login/index.js'
import Logimg from '../../assets/images/pattern.df9a7a28fc13484d1013.webp'
import logo from '../../assets/images/download.png'
import { useContext, useEffect, useState } from 'react'


import { MyContext } from '../../App'
import Gimg from '../../assets/images/download (1).png'
import {Link} from 'react-router'

export default function Signup() {
     const context = useContext(MyContext);
    
        useEffect(()=>{
            context.sethideSidebar(true);
        },[])

        const [inputIndex, setinputIndex] = useState(0);
        const focusInput = (index)=>{
            setinputIndex(index);
        }
  return (
    <>
    <img src={Logimg}  className='login_pattern'/>

    <div className='signup_section'>
        
      <div className='signup_area'>
        
            <div className='row'>
                <div className='col-md-8'>
                    <div className='content_area'>
                        <h2>BEST UX/UI FASHION <span className='blue'>ECOMMERCE<br/> DASHBOARD</span> & ADMIN PANEL</h2>
                        <p className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>
                        <Link to="/dashboard"><button className='btn btn-primary'><i class="fa-solid fa-house me-2 cursor-pointer"></i> Go to Home</button></Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='signup_form'>
                    <img  src={Logimg} className='login_pattern'/>
                        <div className='login_section'>
                            
                                <div className='logo text-center'>
                                    <img  src={logo} alt="logo"/>
                                    <h4>Register a New Account</h4>
                                </div>
                            
                            <div className='login_box'>
                                <div className='logArea'>
                                <form className='form'>
                                    <div className={`form-group mb-3 d-flex align-items-center ${inputIndex===0 && 'focus'}`}>
                                    <i class="fa-solid fa-user ficon"></i>
                                        <input type='text' placeholder='enter your name' className='form-control' onFocus={()=>focusInput(0)} onBlur={()=>setinputIndex(null)}/>
                                    </div>

                                    <div className={`form-group mb-3 d-flex align-items-center ${inputIndex===1 && 'focus'}`}>
                                        <i class="fa-solid fa-envelope ficon"></i>
                                        <input type='text' placeholder='enter your email' className='form-control' onFocus={()=>focusInput(1)} onBlur={()=>setinputIndex(null)}/>
                                    </div>

                                    <div className={`form-group mb-3 d-flex align-items-center ${inputIndex===2 && 'focus'}`}>
                                        <i class="fa-solid fa-lock ficon"></i>
                                        <input type='text' placeholder='enter your password' className='form-control' onFocus={()=>focusInput(2)} onBlur={()=>setinputIndex(null)}/>
                                        <i class="fa-solid fa-eye licon"></i>
                                    </div>

                                    <div className={`form-group mb-3 d-flex align-items-center ${inputIndex===3 && 'focus'}`}>
                                    <i class="fa-solid fa-circle-check ficon"></i>
                                        <input type='text' placeholder='enter your confirm password' className='form-control' onFocus={()=>focusInput(3)} onBlur={()=>setinputIndex(null)}/>
                                        <i class="fa-solid fa-eye licon"></i>
                                    </div>

                                   

                                    <div className='form-group mb-3'>
                                    <button className='btn sbtn'>Submit</button>
                                    </div>
                                </form>

                                <h4>FORGOT PASSWORD</h4>
                                <div className='d-flex align-items-center'>
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
                                        <p>Already Have an Account? <Link to="/login" className='reg'>Login Here</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
      </div>
    </div>
    </>
  )
}
