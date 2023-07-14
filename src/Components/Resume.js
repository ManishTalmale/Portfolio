import React from 'react'
import Assets from '../Assets/Manish Resume CV.pdf'
import './Resume.css'

const Resume = () => {
  return (
    <div>
<div id='resbut' className='resumebut'>
<a href={Assets} className="btn btn2  resume">Resume</a>
</div>
 <hr className='down1 downtab'/>     
      <footer>
     <h5 id='templete' className='foot-text' style={{textAlign:"center",color:"purple",marginBottom:"3em"}}><b> © 2023 - Template developed by  Manish Talmale</b></h5>
      </footer>
      <hr className='down1 downtab' style={{marginTop:"-2.5em"}}/>
    </div>
  )
}

export default Resume
