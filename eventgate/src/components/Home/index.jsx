import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import './Index.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
<NavBar />
        <div className="homeSection">
            <h2>Ticket Booking and Event Management.</h2>
            <p>This effortless event management tool streamlines the entire event planning process, saving you valuable time and energy.</p>
            <div className="home-btn">
                <button className='btn-Register' onClick={() => navigate('/Register')}>Register for Free</button>
                <button className='btn-Login' onClick={() => navigate('/Login')}>Login</button>
            </div>
        </div>

        
<section className="our-work">
  <div className="work-items">
    <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="" />
      <h3>Work anywhere</h3>
      <p>Keep important info handy—your notes sync automatically to all your devices.</p>
    </div>
    <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="" />
      <h3>Work anywhere</h3>
      <p>Keep important info handy—your notes sync automatically to all your devices.</p>
    </div>
    <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="" />
      <h3>Work anywhere</h3>
      <p>Keep important info handy—your notes sync automatically to all your devices.</p>
    </div>
    <div className="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="" />
      <h3>Work anywhere</h3>
      <p>Keep important info handy—your notes sync automatically to all your devices.</p>
    </div>
  </div>
</section>

<section className="our-feature">
  <div className="our-feature-text">
    <h3>Host Events with Free Ticketing! Charges for You 0% Convenience.</h3>
    <p>Say goodbye to ticketing headaches!  Our platform offers a seamless solution for hosting events.  Create and manage your events with completely free ticketing and forget about  convenience charges.  Focus on what matters most - creating a successful event - while we handle the ticketing process for you..</p>
  </div>
  <div className="our-feature-image">
    <img src="https://images.prismic.io/evernote/79b1ae0a-4e3e-4d2e-9143-74316db53487_sketches-658167c942315.webp?auto=compress%2Cformat&fit=max&w=3840" alt="" />
  </div>
</section>
{/* Access Section */}
<section className="our-feature" style={{flexDirection: 'row-reverse'}}>
  <div className="our-feature-text">
    <h3>Event Management, Now is hassle free!</h3>
    <p> <span style={{fontWeight: '600'}}>In just 5 minutes</span>, you can have your event tickets up and running! Our user-friendly platform makes setting up your event a breeze. No more complex software or wrestling with time-consuming configurations.  <span style={{fontWeight: '600'}}>EventGate empowers you to create professional-looking tickets in just a few clicks</span>, saving you hours of frustration. </p>
  </div>
  <div className="our-feature-image">
    <img src="https://images.prismic.io/evernote/79b1ae0a-4e3e-4d2e-9143-74316db53487_sketches-658167c942315.webp?auto=compress%2Cformat&fit=max&w=3840" alt="" />
  </div>
</section>
{/* Another Section */}
<section className="our-feature" >
  <div className="our-feature-text">
    <h3>Experience Secure Ticketing with a Full Control for Your Events!</h3>
    <p><span style={{fontWeight: '600'}}>Experience secure delivery with our platform, ensuring your audience receives tickets safely</span>.  At the same time, you retain supreme control over data and finances.  Focus on creating amazing events while we handle secure ticket distribution, data management, and real-time insights.</p>
  </div>
  <div className="our-feature-image">
    <img src="https://images.prismic.io/evernote/79b1ae0a-4e3e-4d2e-9143-74316db53487_sketches-658167c942315.webp?auto=compress%2Cformat&fit=max&w=3840" alt="" />
  </div>
</section>

<Footer />
        </>
    )
};

export default Home;