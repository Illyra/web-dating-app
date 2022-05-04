import React from 'react';
import "./App.css";
import Headers from './Headers';
import DatingCards from './Components/DatingCards';
import Swiping from './Components/Swiping';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './Components/Chats';
import Home from './Pages/Home';
import Details from './Pages/Details'

function App() {
  return <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/Main' element = {<><Headers/><DatingCards/><Swiping/></>} />
          <Route exact path = '/' element = {<Home/> } />
          <Route exact path = '/Details' element = {<Details/>} />
          <Route exact path = '/chat' element = {<><Headers backout= '/Main' /><Chats /></>} />
        </Routes>
      </Router>
  </div>
}

export default App;
