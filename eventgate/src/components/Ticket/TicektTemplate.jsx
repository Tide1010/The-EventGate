import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';// Import for react-router-dom
import './TicektTemplate.css'

const TicektTemplate = (props) => {
const navigate = useNavigate();	
	const [product, setProduct] = useState({
		name: 'Event',
		price: '0.001',
		productBy: 'Techvaganza'
	})

	const makePayment = (token) => {
		const body = {
			token, 
			product
		}
		const headers = {
			"Content-Type": "application/json"
		}
		return fetch(`http://localhost:3001/payment`, {
			method: 'POST',
			headers,
			body: JSON.stringify(body)
		}).then(response => {
			console.log('Response: ', Response);
			const {status} = response;
			console.log('STATUS: ', status);
			navigate('/sucess', {
				state: {
				  userName,
				  userEmail,
				  userPhoneNumber,
				},
			  })
		}).catch(error => console.log(error))
	}

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
<div className="ticketing-section" >
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
				<img src = "C:\Users\Surface\OneDrive\Documents\Musharaf\Startup\EventGate\eventgate\public\QR.png" alt="" />
			</div>
			<p class="ticket-number"> <span style={{textDecoration: 'line-through'}}>#unique code</span></p>
		</div>
	</div>
</div>

{/* Button for checkout */}
<div class="checkout">
	<StripeCheckout className='checkout'
	stripeKey="pk_test_51OSgppSGnD25thwrMfTl4uT9S6DVLnd71hyhmfT6dxUv1XgTaFrPQDXvRJgm1pGfu9bVVu2ub5aRD20TqG8znG2y00FtpKsV4i" 
	token={makePayment} name='Buy Ticket' 
	amount= {product.price * 100}
	shippingAddress
	billingAddress />
	{/* <Button variant="contained">Hello world</Button>; */}
	{/* <button className='checkout-btn'>Checkout</button>
	</StripeCheckout> */}
    <button className='cancel-btn'>Cancel</button> <br />
    </div>
</div>
</>
  )
}

export default TicektTemplate