  import { useState} from 'react'
  import React from 'react'
  import './formSection.css'
  import '../Ticket/TicektTemplate.css'
  import { useNavigate } from 'react-router-dom';// Import for react-router-dom

  const FormSection = ( ) => {

    //These lines of code are used for the ticekt section purpose
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    const handleName = (e) => {
    setUserName(e.target.value);
    }
    const handleEmail = (e) => {
    setUserEmail(e.target.value);
    }
    const handlePhone = (e) => {
    setUserPhoneNumber(e.target.value);
    }

    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
  
      // Pass the collected user data to the TicketTemplate component
      navigate('/ticket', {
        state: {
          userName,
          userEmail,
          userPhoneNumber,
        },
      });

    }

    return (
      <>
      <div className="form-section">
          <form onSubmit={handleSubmit}>
            <img src="eventgate\public\favicon.png" alt="" />
              <h2>Enter your Details</h2>
              <input type="text" name='username' id="Inputname" value={userName} onChange={handleName} placeholder='Enter Your Name' required /> <br />
              <input type="email" name='useremail' id="email" value={userEmail} onChange={handleEmail} placeholder='Enter Your Email ID' required /> <br />
              <input type="phone" name='userphone' id="ph-number" value={userPhoneNumber} onChange={handlePhone} placeholder='Enter your Phone Number' required  /> <br />
              <button type="submit" >Submit Details</button>
          </form>
      </div>
      </>
    )
  }

  export default FormSection;