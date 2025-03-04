import React from 'react'
import './header.css'
import {useState} from 'react'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';



import MoreVertIcon from '@mui/icons-material/MoreVert';


import Logo from '../../assets/images/download.png'
import UserImg from '../../assets/images/b02bea56-39de-4d2b-9918-9b260fd06677.webp'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
   
    const handleClickMyAcc = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAcc = () => {
      setAnchorEl(null);
    };

    const [notify, setNofity] = useState(false);

    const openNotify = (event) => {
        setNofity(event.currentTarget);
      };
      const closeNotify = () => {
        setNofity(false);
      };

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
                        <button className='ibtn' ><WbSunnyIcon/></button>
                        <button className='ibtn notification' onClick={openNotify}><NotificationsNoneIcon/></button>
                            <Menu
                                anchorEl={notify}
                                id="notify-menu"
                                open={Boolean(notify)}
                                
                                onClose={closeNotify}
                                onClick={closeNotify}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                
                                <h4>Orders(12)</h4>
                                <Divider/>
                                <MenuItem onClick={closeNotify}>
                                   <div className='d-flex align-items-center muibox'>
                                        <img src={UserImg} alt='User_image' className='user_img'/>
                                        <div>
                                            <b>Farjana</b>added to his favorite list <br/><b> Leather belt steve madden</b><br/>
                                            <strong className='text-primary'>few seconds ago!</strong>
                                        </div>
                                        <MoreVertIcon className='ms-2'/>
                                   </div>
                                </MenuItem>

                                <MenuItem onClick={closeNotify}>
                                   <div className='d-flex align-items-center muibox'>
                                        <img src={UserImg} alt='User_image' className='user_img'/>
                                        <div>
                                            <b>Farjana</b>added to his favorite list <br/><b> Leather belt steve madden</b><br/>
                                            <strong className='text-primary'>few seconds ago!</strong>
                                        </div>
                                        <MoreVertIcon className='ms-2'/>

                                   </div>
                                </MenuItem>

                                <MenuItem onClick={closeNotify}>
                                   <div className='d-flex align-items-center muibox'>
                                        <img src={UserImg} alt='User_image' className='user_img'/>
                                        <div>
                                            <b>Farjana</b>added to his favorite list <br/><b> Leather belt steve madden</b><br/>
                                            <strong className='text-primary'>few seconds ago!</strong>
                                        </div>
                                        <MoreVertIcon className='ms-2'/>
                                   </div>
                                </MenuItem>

                                 <button className='btn btn-primary muiboxbtn w-100'> View All Notifications</button>
                                
                            </Menu>


                        <button className='ibtn'><ShoppingCartOutlinedIcon/></button>
                        <button className='ibtn'><MailOutlinedIcon/></button>

                        <button  className='ibtn d-flex userBox align-items-center' onClick={handleClickMyAcc}>
                            <img src={UserImg} alt='User_image' className='user_img'/>
                            <div>
                                <p className='name'>Farjana Dipa </p>
                                <p className='user'>@farjana</p>
                            </div>
                            </button>

                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={Boolean(anchorEl)}
                                        
                                        onClose={handleCloseMyAcc}
                                        onClick={handleCloseMyAcc}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                     
                                        <MenuItem onClick={handleCloseMyAcc}>
                                        <i class="fa-solid fa-user-plus me-2"></i> My account
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAcc}>
                                        <i class="fa-solid fa-trash-arrow-up me-2"></i> Reset Password
                                        </MenuItem>
                                       
                                        <MenuItem onClick={handleCloseMyAcc}>
                                        <LogoutIcon className='me-2'/> Logout
                                        </MenuItem>
                                    </Menu>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
   </header>
  )
}
