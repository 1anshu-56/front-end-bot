import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chatbot'
import LastPage from './components/lastpage'
import './components/chatbot.css'

function App() {
  return (
    	<Router>
	  <Routes>
	  <Route path="/" element={<Home />}/>
	  <Route path="/chat" element={<Chat/>}/>
	  <Route path="/lastpage" element={<LastPage/>}/>
	  </Routes>
	  </Router>
  );
}

export default App;
