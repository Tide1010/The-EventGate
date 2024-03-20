import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormSection from './components/Form/FormSection';
import TicketTemplate from './components/Ticket/TicektTemplate';
import SucessTicket from './components/Ticket/SucessTicket';
import LoginForm from './components/Login/LoginForm'; 
import LiveEvents from './components/LiveEvents/LiveEvents';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './components/Home/index';
import supabase from './lib/supabaseClient';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<RegisterForm />}/>
          <Route path="/Login" element={<LoginForm />}/>
          <Route path="/live-events" element={<LiveEvents />}/>
          <Route path="/form" element={<FormSection />}/>
          <Route path="/ticket" element={<TicketTemplate />} />
          <Route path="/sucess" element={<SucessTicket />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
