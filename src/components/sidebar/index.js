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

    const [ulist, setUlist] = useState(
        {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false, 
            6: false,
            7: false, 
            8: false

        }
    );

  


   const tabs = (index)=>{
    setActiveTab(index);
    setUlist((prevState)=>({
        ...prevState,
        [index]: !prevState[index]
    }));
   }
   

   
  return (
    <div className='sidebar_area'>
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/">
                    <button className={`sidebtn w-100 ${activeTab === 1 ? 'active' : ' '}`} >
                        <div className='dashBox w-100'>
                            <DashboardIcon className='me-3 firstIcon'/>
                            <span>Dashboard</span>
                            
                        </div>
                    </button>
                    </Link>
                   
                </li>
           

                <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 2 ? 'active' : ' '}`} onClick={()=>tabs(2)}>
                <div className='dashBox w-100'>
                    <ShoppingCartIcon className='me-3 firstIcon'/>
                    <span>Products</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button>

                

                {ulist[2] && (
                    <ul className={`secUl ${activeTab === 2 ? 'show' : 'collapse'}`}>
                    <li><a>Vegetables</a></li>
                    <li><a>Fashion & Cosmetics</a></li>
                    <li><a>Electronics Gadgets</a></li>

                    </ul>
                )}
                </Link>
            </li>


            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 3 ? 'active' : ' '}`} onClick={()=>tabs(3)}>
                <div className='dashBox w-100'>
                    <ShoppingCartIcon className='me-3 firstIcon'/>
                    <span>My Account</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button>

                {ulist[3] && (
                    <ul className={`secUl ${activeTab === 3 ? 'show' : 'collapse'}`}>
                   <Link to="/login"> <li><a>Login</a></li></Link>
                    <Link to="/signup"><li><a>Sign Up</a></li></Link>
                    <li><a>Logout</a></li>

                    </ul>
                )}

             </Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 4 ? 'active' : ' '}`} onClick={()=>tabs(4)}>
                <div className='dashBox w-100'>
                    <MessageIcon className='me-3 firstIcon'/>
                    <span>Messages</span> <span className='badge bg-primary rounded-circle'>9</span>
                   
                </div>
                </button>
                
                
                
                </Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 5 ? 'active' : ' '}`} onClick={()=>tabs(5)}>
                <div className='dashBox w-100'>
                    <NotificationsIcon className='me-3 firstIcon'/>
                    <KeyboardArrowRightIcon className='keyicon ms-3'/>
                    <span>Notifications</span> <span className='badge bg-primary rounded-circle'>7</span>
                   
                </div>
                </button>
                {ulist[5] && (
                    <ul className={`secUl ${activeTab===5 ? 'show' : 'collapse'}`}>
                        <li>Farjana <span className='badge bg-primary rounded-circle'>5</span></li>
                        <li>Suraiya <span className='badge bg-primary rounded-circle'>9</span></li>
                        <li>Dipannita <span className='badge bg-primary rounded-circle'>7</span></li>
                    </ul>
                )}
                
                </Link>
            </li>

          

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 6 ? 'active' : ' '}`} onClick={()=>tabs(6)}>
                <div className='dashBox w-100'>
                    <FaceIcon className='me-3 firstIcon'/>
                    <span>Login</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button></Link>
            </li>


            <li>
                <Link to="/">
                <button className={`sidebtn w-100 ${activeTab === 7 ? 'active' : ' '}`} onClick={()=>tabs(7)}>
                <div className='dashBox w-100'>
                    <ShoppingCartIcon className='me-3 firstIcon'/>
                    <span>Orders</span>
                    <KeyboardArrowRightIcon className='keyicon'/>
                </div>
                </button>

                {ulist[7] && (
                    <ul className={`secUl ${activeTab===7 ? 'show' : 'collapse'}`}>
                        <li>Sunglass <span className='badge bg-primary rounded-circle'>5</span></li>
                        <li>Books <span className='badge bg-primary rounded-circle'>9</span></li>
                        <li>Paper & Pens <span className='badge bg-primary rounded-circle'>7</span></li>
                    </ul>
                )}

               </Link>
            </li>

            <li><Link to="/">
                <button className={`sidebtn w-100 ${activeTab ===8  ? 'active' : ' '}`} onClick={()=>tabs(8)}>
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
