import React from 'react';
import '../css/about.css'
import First from '../Images/saad.png'
import Second from '../Images/wajahat.png'
import Third from '../Images/anas.png'

const About = () => 

<div className="wrapper">
<h1>BEHIND THE PROJECT !</h1>
<div className="team">
  <div className="team_member">
    <div className="team_img">
      <img src={First} alt="Team_image" />
    </div>
    <h3>Muhammad Saad</h3>
    <p className="role">Stuck between Software and Hardware. Wants to do so many things, all at the same time :)</p>
  </div>
  <div className="team_member">
    <div className="team_img">
      <img src={Second} alt="Team_image" />
    </div>
    <h3>Wajahat Sarwat</h3>
    <p className="role">Web developer</p>
    <p className="role"></p>
    </div>
  <div className="team_member">
    <div className="team_img">
      <img src={Third} alt="Team_image" />
    </div>
    <h3>Muhammad Anas</h3>
    <p className="role">Web developer</p>
    <p className="role"></p>
  </div>
</div>
</div>
export default About