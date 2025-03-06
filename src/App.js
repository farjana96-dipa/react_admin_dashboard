
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard/index.js'
import Header from './components/header/header.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from  './components/sidebar/index.js'
import { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

function App() {

  const [toggle, setToggle] = useState(false);
  const values = {
    toggle, 
    setToggle
};

 useEffect(()=>{
  
 },[toggle])


  return (


    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
      <div className='main d-flex'>
        <div className={`sidebarWrapper ${toggle === true ? 'toggle' : ''}`}>
          <Sidebar/>
        </div>
        <div className={`content ${toggle === true ? 'toggle' : ''}`}>
          <Routes>
            <Route path=""  element={<Dashboard/>}></Route>
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
