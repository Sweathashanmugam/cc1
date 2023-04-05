import React from 'react';
import './web.css';

function Header() {
  return (
    <header>
    <h2 id='title'>DREAM BAKERS</h2>
      <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs3/276240379/original/45c58ef6abd87432965cba4e530dff151e9c7a32.jpg" alt="Company logo" id="logo"/>
      
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;