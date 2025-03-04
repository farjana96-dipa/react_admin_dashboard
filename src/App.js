
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/home/index.js'
import Header from './components/header/header.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from  './components/sidebar/index.js'

function App() {
  return (


    <BrowserRouter>
    <Header/>
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar/>
        </div>
        <div className='content'>
          <Routes>
            <Route path="" exact={true} element={<Dashboard/>}></Route>
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
