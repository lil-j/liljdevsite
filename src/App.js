import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div>
      <div class="center-div">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="text-black font-weight-bold jake">Jake Harper</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <a href="https://github.com/lil-j/" className="circle github shadow ml-1 mr-1"><FontAwesomeIcon icon={faGithubAlt} /></a>
              <a href="https://twitter.com/notlilj" className="circle twitter shadow ml-1 mr-1"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me">
        <br/>
        <br/>
        <div className="container">
          <h1 className="text-dark font-weight-bold">About Me</h1>
          <div className="row text-dark">
            <div className="col-lg-4 col-sm-12"><img className="img-fluid shadow" src="https://air.jordan.com/wp-content/uploads/2018/02/rembert-browne-talks-to-travis-scott-during-the-jordan-brand-all-star-closing-party-in-2018-images-rayscorruptedmind-7-1080x1600.jpg" alt="me"/></div>
            <div className="col-lg-8 col-sm-12 pt-3"><p>Hey, I'm Jake! I love running, taking photos, making videos, and hanging out with friends- but my true passion is computer programming. After starting with making simple python-based 'bots' using the Discord API, I quickly saw it as a business opportunity, and grew upon that for multiple months. A year later I have expanded into different areas of programming such as full-stack web applications and even working with artificial intelligence. Some of the languages I am most proficient in are:</p>
            <ul>
              <li>Python</li>
              <li>NodeJS</li>
              <li>HTML + CSS</li>
              <li>React</li>
              <li>Next</li>
            </ul>
            <p>If you have any questions, or wanna get in touch, feel free to hit me up on Twitter or Discord @ lilj#0001.</p>
            
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
      <div className="bottom" style={{'background-color': '#1a1a1a'}}><br/><br/></div>
    </div>
    )
}

export default App;
