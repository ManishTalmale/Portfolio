import React from 'react'
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='container mt5 ConA-aaxis arrange-contact-tab' id="contact">
      <p className='arrange-contact'></p>
      <h1 id="contact-head" className='mb3 f1 element awesome myContact contacts-head contacts-heading'>Contact Me</h1>
<div className='row'>
  <div className='col-lg-6 col-sm-12'>
<span>
              <ul className='icons3'>
                <li>
                  <a href="mailto:manishtalmale@gmail.com">
                    <i className="fas fa-envelope-square" style={{ fontSize: "38px" }}/><p className='para'>manishtalmale@gmail.com</p>
                  </a>
                </li>
                <li>
                  <a href="tel:9834999271">
                    <i class="fas fa-phone-square" style={{ fontSize: "38px" }} /><p className='para'>9834999271</p>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/9067726692">
                    <i class="fa fa-whatsapp" style={{ fontSize: "36px" }}/><p className='para'>9067726692</p>
                  </a>

                </li>
              </ul>
            </span>
            </div>


<div className='col-lg-6 col-sm-12 otherContacts'>
<h1 id='con-head' className='find'>FIND ME ON</h1>
            <p id='patext' style={{ color: "white",textAlign:"center" }}>

              Feel free to <span style={{ color: "purple" }}><b>connect </b></span>with me
            </p>

<section >
              <ul id='find-icons'>
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

</div>

            </div>
    </div>
  )
}

export default Contacts
