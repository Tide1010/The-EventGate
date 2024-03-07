import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './TicektTemplate.css'

const SucessTicket = (props) => {
const { userName, userEmail, userPhoneNumber } = useLocation().state;

	//This step is needed to be done after the checkout button is clicked. 
	 //This code snippet generates a new Unique ID 
	let uniqueID = Math.floor(Math.random() * 1000000000);
	const [uniqueCode, setUniqueCode] = useState(uniqueID);
	const [qrData, setQrData] = useState(''); 
	useEffect((e) => {
		const userData = {
		  name: userName,
		  email: userEmail,
		  phoneNumber: userPhoneNumber,
		  code: uniqueCode
		  
		};
		setQrData(JSON.stringify(userData)); 
	  }, [userName, userEmail, userPhoneNumber, uniqueID]);

	 
  
  return (
    <>
<div className="ticketing-section" style={{marginTop: '100px'}}>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

<div class="ticket created-by-anniedotexe">
	<div class="left">
		<div class="image">
			<p class="admit-one">
				<span>ADMIT ONE</span>
				<span>ADMIT ONE</span>
				<span>ADMIT ONE</span>
			</p>
			<div class="ticket-number">
				<p> </p>
			</div>
		</div>
		<div class="ticket-info">
			<p class="date">
				<span>TUESDAY</span>
				<span class="june-29">JUNE 29TH</span>
				<span>2021</span>
			</p>
			<div class="show-name">
				<h1>Techvaganza</h1>
				<h4>{userEmail}</h4>
			</div>
			<div class="time">
				<p>8:00 PM <span>TO</span> 11:00 PM</p>
				<p>DOORS <span>@</span> 7:00 PM</p>
			</div>
			<p class="location"><span>NIT Srinagar</span>
				<span class="separator"><i class="far fa-smile"></i></span><span>Hazratbal, Sgr 190006</span>
			</p>
		</div>
	</div>
	<div class="right">
		<p class="admit-one">
			<span>ADMIT ONE</span>
			<span>ADMIT ONE</span>
			<span>ADMIT ONE</span>
		</p>
		<div class="right-info-container">
			<div class="show-name">
				<h1>Details</h1>
			</div>
			<div class="time">
				<p>{userName}</p>
				<p>{userPhoneNumber}</p>
			</div>
			<div class="barcode">
			{qrData && (
       			 <QRCode className='qr-img' value={qrData} size={100} level="H" /> 
			)}
			</div>
			<p class="ticket-number"> #{uniqueCode} </p>
		</div>
	</div>
</div>
</div>
</>
  )
}

export default SucessTicket