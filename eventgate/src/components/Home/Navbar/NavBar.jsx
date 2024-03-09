import NavLogo from './navlogo.png'; 
import { useNavigate } from 'react-router-dom';
import './Navbarr.css';

function NavBar() {
  const navigate = useNavigate();
  return (
<>
<section className="navbar">
  <div className="navbar-container">
    <div className="navbar-brand-logo">
      <img src={NavLogo} alt="" />
    </div>
    <div className="navbar-brand-buttons">
      <button className="btn-Register" onClick={() => navigate('/Register')}>Register for Free</button>
      <button className="btn-Login" onClick={() => navigate('/live-events')}>Live Events</button>
    </div>
  </div>
</section>
</>

  );
}

export default NavBar;