import React from 'react'
import './About.css'
import { ImPointRight } from "react-icons/im";



const About = () => {
  return (
    <div className='x-axis' >
      <br/><br/>
      <div className='row'>
        <div className='col-lg-7'>
          <div style={{ border: "none" }}>
            <div>
              <blockquote style={{ color: "white" }}>
                <h1 className='know who' id='self_Ab'>
                  Know Who <strong style={{ color: "purple" }}>I'M</strong>
                </h1>
                <div id='self_tab' className='self-tab every'>
                  <h5 style={{ textAlign: "justify" }}>
                    Hi Everyone, I am <span style={{ color: "purple" }}><b>Manish Talmale </b></span>
                    from <span style={{ color: "purple" }}><b> Nagpur, India.</b></span>
                    <br />
                    {/* I am a junior pursuing IMSC in Maths and Computing in BIT
                    Mesra. */}
                    <br />

  <div id='tab-1' className='tab-start Alltabs'>
  <div class="tabs">
   <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" defaultChecked/>
  <label for="tab1" class="tabs__label">Skills</label>
  <div class="tabs__content">
   <h4 style={{ color: "purple" }}>Frontend Developer</h4>
   <p>Implements visual elements that users see and interact with in a websites.
     Created a responsive website for desktop, tablet, & mobile using HTML, CSS, JS, React.</p>
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" />
  <label for="tab2" class="tabs__label">Experience</label>
  <div class="tabs__content">
   <h4 style={{ color: "purple" }}>January 2023</h4>
   <p>Present Currently on the post of Jr. React Developer<br/>
1. Building stable and maintainable code using React.<br/>
2. Creating new features, functionality and capabilities on the website.<br/>
3. Identified web based user interactions and developed highly responsive user<br/>
interface components via React concepts.
</p>
<h4 style={{ color: "purple" }}>Since Aug 2022</h4>
<p>Intern at AnkHub Technology Services Nagpur, 
  Maharashtra Achievements: Work on Agile Scrum methodology with SDLC. 
  Gain experience from basic languages like HTML, CSS and JavaScript. 
  Practiced on libraries like Bootstrap, ReactJS. 
  Working on Attendance and Monitoring Management System. 
  Trello for project management, GitHub for version control. 
  Hand on working with VS Code software.</p>
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab3" />
  <label for="tab3" class="tabs__label">Education</label>
  <div class="tabs__content">
    <h4 style={{ color: "purple" }}>July-2022</h4>
    <p>Bachelor of Engineering from Nagpur University (RTMNU)</p>
    <h4 style={{ color: "purple" }}>July-2019</h4>
    <p>Diploma Maharashtra Board (MSBTE)</p>
    <h4 style={{ color: "purple" }}>July-2016</h4>
    <p>Maharashtra State Board of Secondary and Higher Secondary Education</p>
  </div>
</div>
</div>
<br/>
<hr className='down hrtab'/>

<div id='Apart' className="ApartFrom">
                    Apart from coding, some other activities that I love to do!
                    </div>
                  </h5>
                </div>
                <ul id='righticons' className='activity' >
                  <li className="about-activity">
                    <ImPointRight /> Playing Games
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Writing Tech Blogs
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Travelling
                  </li>
                </ul>

                <h6 id='thought' className='strive build'>
                 <b> "Strive to build things that make a difference!"{" "}</b>
                </h6>
                <footer className='foot name'><b id='foots'>-Manish</b></footer>

{/* <Tabs>
        <TabList>
          <Tab ><h3>Skills</h3></Tab>
          <Tab ><h3>Experience</h3></Tab>
          <Tab ><h3>Education</h3></Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}>Frontend Developer</h2>
            <p style={{ fontSize: "17px" }}>Implements visual elements that users see and interact with in a websites.
              Created a responsive website for desktop, tablet, & mobile using HTML, CSS, JS, React.</p>
          </TabPanel>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}>January 2023</h2>
            <p style={{ fontSize: "17px" }}>Present Currently on the post of Jr. React Developer<br />
              1. Building stable and maintainable code using React.<br />
              2. Creating new features , functionality and capabilities on the website.<br />
              3. Identified web based user interactions and developed highly responsive user interface components via
              React concepts.</p>
            <h2 style={{ color: "#b54769" }}> Since Aug 2022 </h2>
            <p style={{ fontSize: "17px" }}>Intern at AnkHub Technology Services Nagpur, Maharashtra
              Achievements: Work on Agile Scrum methodology with SDLC.
              Gain experience from basic languages like HTML, CSS and JavaScript.
              Practiced on libraries like Bootstrap, ReactJS.
              Working on Attendance and Monitoring Management System.
              Trello for project management, GitHub for version control.
              Hand on working with VS Code software.</p>
          </TabPanel>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}> July-2022</h2>
            <p style={{ fontSize: "17px" }}> Bachelor of Engineering from Nagpur University (RTMNU)</p>
            <h2 style={{ color: "#b54769" }}> July 2019</h2>
            <p style={{ fontSize: "17px" }}>Diploma Maharashtra Board (MSBTE)</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
 */}


              </blockquote>
            </div>
          </div>
        </div>

        <div className='col-lg-5'>
          <img id='image3' src={require('../Assets/img3.png')} className="img-fluid vert-move img3 avatar3" alt="avatar" />
        </div>





      </div>

    </div>
  )
}

export default About
