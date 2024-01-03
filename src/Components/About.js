
import React from "react"
import '../Asserts/Styles/About.css'
import {Link} from 'react-router-dom'

function About()
{
    return(
<>
<div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS4944_477420135-hig.jpg" alt="Jane"></img>
      <div class="cantainer">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://media.istockphoto.com/id/156292188/photo/doctor-holding-out-several-packs-of-a-variety-of-pills.jpg?s=612x612&w=0&k=20&c=WEYtSbG6FM0WDbm7E_3QT8ZCqIEwQ9tDnGakyg5hhIw=" alt="Mike"></img>
      <div class="cantainer">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/5-Simple-Tips-To-Raise-Your-Status-As-A-Man.jpg" alt="John" ></img>
      <div class="cantainer">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default About;

