import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormSection from './components/Form/FormSection';
import TicketTemplate from './components/Ticket/TicektTemplate';
import SucessTicket from './components/Ticket/SucessTicket';
import Home from './components/Home/index';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<FormSection />}/>
          <Route path="/ticket" element={<TicketTemplate />} />
          <Route path="/sucess" element={<SucessTicket />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
