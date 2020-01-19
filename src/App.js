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
            <div className="col-lg-4 col-sm-12"><img className="img-fluid shadow" src="https://lh3.googleusercontent.com/oi1YWL8ZMTpFmXFs8jD7LXVTqs6qEkQY8_u4boUU82-s-LDJnjRHQi6BypG6NiDoHxaigRqCn4awHNeaQZAMOlOQJsfOy9HbXLxThsIns31kwiRjSwVD14HvjI6mtGgnIycNTZv5Sx8pHAtUEBIhhN-VpKkPbeV0gHtCBgM64afkP_Jft9d9JoLcXi_LQCr614PtGNKdQhHrAIsLYxZgovVnAElgK9kWVc96rAg3KKbPoLWL16EjEs05AyS6l2ujaJH5t5MSXXa0pFDjOy_zIfR60iJRCYqJiEgPALBxv_HRdW6pJVbp1-69WWa2oDL3vhoOKW8xg7lSwZ0f8h_37OAZ6DQDfHNMa3xbH_Kh65KW6IvwcQ69hsZmULV9l495Idcv3ky2AtAathb4zGbhHA_gm1BikgMzIoxsQ6hBvZ-mvh2yoMKMRtEwmIHZc7VjVY4bm3U_vAP-Lk8Gqf3sSRIQkwCzMxXCSMZ1mwCcr04HraU7HiaoN9n9hY-i3PfGkdwGwXhvsKmOefr_wZtfSMmnFW4J8eH01CpNFyEzOOMpVEOjOhXpm5LfmIFicJcRcwPyHYdy-VIMqMSJpb856yJVVuvKz3EFhCbnjP5iTr06Fjt8_QLt45nljWxuaDXL5rVJ79Rcw72v127nrAtL6nY5cwEVGeLyAtsXY_DXD13AOtR0zFU4mQq_hxYR=s2001-w1335-h2001-no" alt="me"/></div>
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
}





export default App;
