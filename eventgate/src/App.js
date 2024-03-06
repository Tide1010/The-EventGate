import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FormSection from './components/FormSection';
import TicketTemplate from './components/TicektTemplate';
import SucessTicket from './components/SucessTicket';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSection />} />
          <Route path="/ticket" element={<TicketTemplate />} />
          <Route path="/sucess" element={<SucessTicket />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
