import React from 'react'
import './header.css'
import Logo from '../../assets/images/download.png'
import UserImg from '../../assets/images/b02bea56-39de-4d2b-9918-9b260fd06677.webp'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export default function Header() {
  return (
   <header>
    <div className='header_area'>
        <div className='container-fluid'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-2'>
                    <div className='d-flex align-items-center'>
                        <img src={Logo} alt='logo' />
                        <span className='logo_brand'>Success</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex align-items-center'>
                        <MenuOpenIcon className='menuOPen'/>
                        <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-magnifying-glass srcIcon"></i>
                            <input type='text' placeholder='Search here...'/>
                        </div>
                        
                    </div>
                </div>
                <div className='col-md-4 ms-auto'>
                    <div className='d-flex ms-auto align-items-center'>
                        <WbSunnyIcon/>
                        <NotificationsNoneIcon/>
                        <ShoppingCartOutlinedIcon/>
                        <MailOutlinedIcon/>

                        <div className='d-flex userBox align-items-center'>
                            <img src={UserImg} alt='User_image' className='user_img'/>
                            <div>
                                <p className='name'>Farjana Dipa <i class="fa-solid fa-circle-chevron-down ms-2"></i></p>
                                <p className='user'>@farjana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </header>
  )
}
