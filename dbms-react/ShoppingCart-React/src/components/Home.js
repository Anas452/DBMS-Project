import React from 'react'
import '../css/home.css'
import First from '../Images/4.png'
import Second from '../Images/3.png'
import Third from '../Images/1.png'

const Home = () => 

<div>

<header className="header">
      <h1 className="headtext"> E-Dealers </h1>
      <h2 className="headdesc mx-auto mt-2 mb-5">We deal in all kinds of wholsesale items.</h2>
</header>
{/* About Section */}
<section id="about" className="about-section text-center">
      <div className="col-lg-8 mx-auto">
        <h2 className="aboutdesc">What is point of this website?</h2>
        <p className="aboutdesc2"> Actually, we have seen and bore the hassle of bringing the grocery item at the start of every month. This website is for all those people who wants to get the grocery items delivered at their doorsteps and that too at wholesale prices!   </p>
      </div>
</section>

<div className="bigbox">
<div className="picture">

<div className="item_mem">
    <div className="item_img">
      <img src={First} alt="Team_image" />
    </div>
    <h3>Household grocery items</h3>
    <p className="role">All kinds of House hold items available at cheap prices</p>
  </div>
  <div className="item_mem">
    <div className="item_img">
      <img src={Second} alt="Team_image" />
    </div>
    <h3>Fruits</h3>
    <p className="role">All kinds of fruits available at cheap prices</p>
    <p className="role"></p>
    </div>
    <div className="item_mem">
    <div className="item_img">
      <img src={Third} alt="Team_image" />
    </div>
    <h3>Vegetables</h3>
    <p className="role">All kinds of vegetables available at cheap prices</p>
    <p className="role"></p>
  </div>
</div>
</div>

{/* Email Section */}
<section className="signup-section">
  <div className="loginbox1">
    <h2 className="inputtext1">For Complaints and queries, Email Us..</h2>
        <form className="form-inline d-flex">
          <input type="email" className="userinputtext1" id="inputEmail" placeholder="Enter your email address here..." />
          <button type="submit" className="complainbtn">Send</button>
        </form>
      </div>
</section>
</div>

export default Home