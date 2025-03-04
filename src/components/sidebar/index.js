import React from 'react'
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



import {useState} from 'react'
import {Link} from 'react-router'

export default function Sidebar() {

    const [activeTab, setActiveTab] = useState(0);

    const [ulist, setUlist] = useState(false);

   const openUlist = (index)=>{
    setUlist(!ulist);
    setActiveTab(index);
   }


   const [ulist1, setUlist1] = useState(false);

   const openUlist1 = (index)=>{
    setUlist1(!ulist1);
    setActiveTab(index);
    
   }


   const tabs = (index)=>{
    setUlist(!ulist);
    setActiveTab(index);
   }
   

   
  return (
    <div className='sidebar_area'>
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/">
                    <button className={`sidebtn w-100 ${activeTab} === 1 ? 'active' : ' '`} >
                        <div className='dashBox w-100'>
                            <DashboardIcon className='me-3 firstIcon'/>
                            <span>Dashboard</span>
                            
                        </div>
                    </button>
                    </Link>
                   
                </li>
           
            

            <li ><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 1 ? 'active' : ' '} `} onClick={()=>tabs(1)}>
                <div className='dashBox w-100'>
                <i class="fa-brands fa-product-hunt me-3 firstIcon"></i>
                    <span>Products</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button>
               {
                ulist === true && 
                <ul className={`secUl ${activeTab===1 ? 'collapse' : 'collapsed'}`}>
                <li><a>Vegetables</a></li>
                <li><a>Fashion & Cosmetics</a></li>
                <li><a>Electronics Gadgets</a></li>
                </ul>
               }
                   
                </Link>
               
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 2 ? 'active' : ' '}`} onClick={()=>tabs(2)}>
                <div className='dashBox w-100'>
                    <ShoppingCartIcon className='me-3 firstIcon'/>
                    <span>Orders</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button>

                {
                ulist === true && 
                <ul className={`secUl ${activeTab===2 ? 'collapse' : 'collapsed'}`}>
                <li><a>Farjana Dipa <span className='badge bg-primary rounded-circle'>3</span></a></li>
                <li><a>Suraiya Akter <span className='badge bg-primary rounded-circle'>7</span></a></li>
                <li><a>Rahima Akter <span className='badge bg-primary rounded-circle'>9</span></a></li>
                </ul>
               }</Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 3 ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <MessageIcon className='me-3 firstIcon'/>
                    <span>Messages</span> <span className='badge bg-primary rounded-circle'>9</span>
                   
                </div>
                </button></Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 4 ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <NotificationsIcon className='me-3 firstIcon'/>
                    <span>Notifications</span> <span className='badge bg-primary rounded-circle'>7</span>
                    
                </div>
                </button></Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 5 ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <SettingsIcon className='me-3 firstIcon'/>
                    <span>Settings</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
             </button></Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 6 ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <FaceIcon className='me-3 firstIcon'/>
                    <span>Login</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button></Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab ===7  ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <GroupAddIcon className='me-3 firstIcon'/>
                    <span>SignUp</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button></Link>
            </li>

            <li><Link to="/">
                <button className='sidebtn w-100  '>
                <div className='dashBox w-100'>
                    <ShoppingCartIcon className='me-3 firstIcon'/>
                    <span>Orders</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button></Link>
            </li>

            <li><Link to="/">
                <button className='sidebtn w-100  '>
                <div className='dashBox w-100'>
                    <MessageIcon className='me-3 firstIcon'/>
                       <span>Messages</span> <span className='badge bg-primary rounded-circle'>5</span>
                   
                </div>
                </button>
                </Link>
            </li>


        
        </ul>

        <div className='logoutBtn'>
            <button className='logBtn'><i class="fa-solid fa-right-from-bracket me-2 "></i>Log Out</button>
        </div>
    </div>
      
</div>
  )
}
