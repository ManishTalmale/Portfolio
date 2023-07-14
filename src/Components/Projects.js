import React from 'react'
import { Container, Col } from "react-bootstrap";
import './Projects.css'

const Projects = () => {
  return (
    <div className='mobile'>
      <br/><br/>
       <div id="portfolio">
      <Container clas>
        <p className='arrange-work tablet'></p>
        <h1 id="work" className="sub-title f1 element awesome head myWork">My Work</h1>
        <br/><br/>
       <div>
        <div className="work-list">
          <Col>
            <div className="work">
              <img alt='#' src={require ("../Assets/screencapture-manishtalmale-github-io-Invoice-2023-06-20-18_43_06.png")}  />
              <div className="layer">
                <h3>Billing / Invoice App</h3>
                <p>Developed a Dynamic Billing / Invoice App</p>
                <a href="https://manishtalmale.github.io/Invoice/"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="work">     {/* style={{ border: "3px solid gray" }} */}
              {/* <video autoPlay loop muted src={Video1} type='video/mp4' width={380} height={490} /> */}
              <img alt='#'  src={require("../Assets/users.png")} />
              <div className="layer">
                <h3>UseabilityHub</h3>
                <p>Developed a static clone website of UsabilityHub and also made it Mobile Friendly.  </p>     
                <a href="https://celebrated-longma-d80e44.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="work">
              <img alt='#' src={require("../Assets/topntown.png")} />
              <div className="layer">
                <h3>Top-N-Town</h3>
                <p>Developed a static and attractive Clone website of TopNTown .</p>
                <a href='https://6454c31958c93a7bbdc293ee--silly-cheesecake-667774.netlify.app/'><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
              </div>
            </div>
          </Col>
        </div>
        </div>
      </Container>
      <a href="https://github.com/ManishTalmale" className="btn">See more</a>

    </div>
    </div>
  )
}

export default Projects
