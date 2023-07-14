import { useState } from 'react';
import './App.css';
import { Nav } from '../src/Components/Nav';
import { Row, Col } from "react-bootstrap";
import About from '../src/Components/About'
import Services from '../src/Components/Services';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import video from "./Assets/bgvideo.mp4";
import Contacts from './Components/Contacts';

function App() {
  const [contact] = useState(Nav);
  return (
    <div>
      <video autoPlay='true' className='bgvideo' muted loop src={video}></video>
      <div className="main content top-left">
        <br/>
        <header id="header" className='first'>
          <div className='container md={12}'>
            <nav className='navbar-fixed-top cbp-af-header' >
              <div id='self'>
              <h1 className='element awesome1 man' style={{ color: "white", fontWeight: "bold" }}><span>M</span>anish.</h1>
              </div>
              <ul className='self_l' id="sidemenu">
                {contact.map((contact) => (
                  <li><b><a id="nav-text" className='navname' style={{ textDecoration: "none" }} href={contact.link}>{contact.name}</a></b></li>
                ))}
                {/* <i class="fa-sharp fa-solid fa-xmark" onclick="closemenu()"></i> */}
              </ul>
              {/* <i className="fa-solid fa-bars" onclick="openmenu()"></i> */}
            </nav>
            <p className='img-content'></p>
            <div className='row' id="row1">
              <div className='col-lg-7' id='myname'>
                <div className="header-text header_tab">
                  {/* <p style={{ color: "purple" }}>Frontend Developer</p> */}
                  <h1 style={{ fontSize: "40px", color: "white" }}>Hi, I'm <span>Manish</span><span className='wave'>👋🏻</span><br />Talmale From India</h1>
                </div>

                <div>
                  <h3><span className="text_1" style={{ color: "purple" }}><b>FrontEnd Web Developer</b></span>
                    <span className="text_2" id="type2" style={{ color: "purple" }}>Website Designer Using React</span>
                  </h3>
                </div>
              </div>
              <div className='col-lg-5' id='myname'>
                <img className='img1 vert-move' id="img1" style={{width:"500px"}} src={require('./Assets/computerlog-copy.png')} alt='' />
              </div>
            </div>
          </div>
        </header>

<div className='container' id="about">
        <Row>
          <Col md={8}>
            <p className='arrange'></p>
            <h1 id="intro" className='letme INTRODUCE'>
              LET ME <span style={{ color: "purple" }}> INTRODUCE </span> MYSELF
            </h1>
            <br/>
            {/* <p style={{ color: "white", fontSize: "18.5px" }}>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: "purple" }}> Javascript and React. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b style={{ color: "purple" }}> Web Technologies and Products </b> and
                also in<br /> areas related to{" "}
                <b style={{ color: "purple" }}>
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: "purple" }}>Node.js</b><br /> and
              <i>
                <b style={{ color: "purple" }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "purple" }}>  React.js</b>
              </i>
            </p> */}
            <p id="intro2" style={{fontSize:"18.5px"}}>Hello! My name is <b style={{ color: "purple",fontStyle:"italic" }}> Manish .Govind. Talmale,</b> Passionate Skilled, 
              collaborative, and attentive Frontend Web Developer. 
              My specialties are <b style={{ color: "purple",fontStyle:"italic" }}> Wordpress - CMS, HTML5 , CSS3, Bootstrap4 ,C, C++ ,
               Javascript,ReactJS ,NodeJS , MongoDB and Redux.</b><br/> 
               I am a learner and explorer constantly seeking better quality, 
               efficiency, and a healthy environment and I enjoy problem-solving
                and learning from the challenges that come along. 
                Thus, the challenges bring the best out of me. 
                I built a number of web Pages and I am looking 
                for an environment that will allow me to implement the 
                best of my knowledge.</p>
          </Col>
          <Col md={4} className="myAvtar">
              <img id="img2"  style={{width:"350px"}} src={require('./Assets/img2.png')} className="img-fluid zoom mt4" alt="avatar" />
          </Col>
        </Row>
        </div>
        {/* <Row>
          <Col md={12} style={{ textAlign: "center" }}> */}
            {/* <h1 style={{ color: "white", marginTop: "40px" }}>FIND ME ON</h1>
            <p style={{ color: "white" }}>

              Feel free to <span style={{ color: "purple" }}><b>connect </b></span>with me
            </p>

            <section>
              <ul>
                <li>
                  <a href="https://github.com/ManishTalmale">
                    <i className="fa fa-github" style={{ fontSize: "40px" }}></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fab fa-twitter" ></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fab fa-facebook" style={{ fontSize: "36px" }}></i>
                  </a>

                </li>
                <li>
                  <a href="https://www.linkedin.com/in/manish-talmale-886971238/">
                    <i class="fab fa-linkedin" style={{ fontSize: "36px" }}></i>
                  </a>
                </li>
              </ul>
            </section>

 */}

          {/* </Col>
        </Row> */}
        <About />
        <Services />
        <Projects />
        <Contacts />
        <Resume />
        {/* <div id="services">
      <div className='container'>
        <h1 className='Abc' style={{ fontSize: 60, color: "white",fontWeight:"bold" }}>My Services</h1><br/>
        <Services />
      </div>
      <Work />
      <Contact />
    </div> */}
      </div>
    </div>
  );
}

export default App;
