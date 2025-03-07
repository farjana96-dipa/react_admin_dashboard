
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard/index.js'
import Header from './components/header/header.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from  './components/sidebar/index.js'
import { createContext, useState, useEffect } from 'react';
import Login from './pages/Dashboard/Login/index.js'
import Signup from './pages/Dashboard/Signup/index.js';

const MyContext = createContext();

function App() {

  const [toggle, setToggle] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [hideSidebar, sethideSidebar] = useState(false);
  const [signup, setSignup] = useState(false);
  const [themeMod, setthemeMod] = useState(true);

  const values = {
    toggle, 
    setToggle,
    isLogin,
    setisLogin,
    hideSidebar,
    sethideSidebar,
    signup,
    setSignup,
    themeMod,
    setthemeMod
};

 useEffect(()=>{
  if(themeMod===true){
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('themeMod','light');
  }
  else{
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('themeMod','dark');
  }


 },[themeMod])


  return (


    <BrowserRouter>
    <MyContext.Provider value={values}>
      {
        hideSidebar !== true && (
          <Header/>
        )
      }
   
      <div className='main d-flex'>
        {
          hideSidebar !== true  && (
            <div className={`sidebarWrapper ${toggle === true ? 'toggle' : ''}`}>
            <Sidebar/>
          </div>
          )
        }
       
        <div className={`content ${toggle === true ? 'toggle' : ''} ${hideSidebar===true ? 'full' : ''}`}>
          <Routes>
          <Route path="/"  element={<Dashboard/>}></Route>
            <Route path="/dashboard"  element={<Dashboard/>}></Route>
            <Route path="/login"  element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
