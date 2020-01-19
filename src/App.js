import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
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
            </div>
          </div>
        </div>
      </div>

      <div className="about-me">
        <Link to="about-me" spy={true} smooth={true} duration={800} >
          <h1 className="text-center arrowdiv"><span className="arrow">↓</span></h1>
        </Link>
        <br/>
        <br/>
        <div className="container">
          <h1 className="text-dark font-weight-bold">About Me</h1>
          <div className="row text-dark">
            <div className="col-lg-4 col-sm-12"><img className="img-fluid shadow" src="https://i.imgur.com/MJAuf7L.jpg" alt="me"/></div>
            <div className="col-lg-8 col-sm-12 pt-3"><p>Hey, I'm Jake! I love running, taking photos, making videos, and hanging out with friends- but my true passion is computer programming. After starting with making simple python-based 'bots' using the Discord API, I quickly saw it as a business opportunity, and grew upon that for multiple months. A year later I have expanded into different areas of programming such as full-stack web applications and even working with artificial intelligence. Some of the languages I am most proficient in are:</p>
            <ul>
              <li>Python</li>
              <li>NodeJS</li>
              <li>HTML + CSS</li>
              <li>React</li>
              <li>Next</li>
            </ul>
            <p>If you have any questions, or wanna get in touch, feel free to email <a href="mailto:jke.hrpr@gmail.com">me</a> or hit me up on Discord @ lilj#0001.</p>
            
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
}





export default App;
