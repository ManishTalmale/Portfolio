import React from 'react'
import './Services.css';
import { Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
const Services = () => {
  return (
    <div id="services">
    <br/><br/><br/>
    <h1 className='f1 ml3 element awesome1'>My Services</h1>
    
      <SimpleGrid id='Grid' spacing={8} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' className='abc'>
        {/* <div className='FLEX'> */}
        <Card bg=''style={{height:"200px",border:"1px solid white",borderRadius:"5px"}} className="gap blur CARD1" >
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-solid fa-code fa-beat-fade ml4 mt3"></i><span> Web Design</span></Heading>
          </CardHeader>
          <CardBody className='ml4 mt3'>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>Web design is the creation of websites<br /> and pages to reflect a company’s brand and information.</Text>
          </CardBody>
          <CardFooter>
            <Link className='ml4 mt2' style={{ color: "#ffffff", textDecoration: "none" }} href='https://www.interaction-design.org/literature/topics/web-design'>Learn More</Link>
          </CardFooter>
        </Card>
        <Card bg='' style={{border:"1px solid white",borderRadius:"5px"}} className="gap blur CARD2">
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-solid fa-crop-simple fa-flip ml4 mt3 "></i> Web Development</Heading>
          </CardHeader>
          <CardBody className='ml4 mt3'>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>Web development refers to the creating,<br />  building, and maintaining of websites.</Text>
          </CardBody>
          <CardFooter>
            <Link className='ml4 link2' style={{ color: "#ffffff", textDecoration: "none" }} href='https://brainstation.io/career-guides/what-is-web-development#:~:text=Web%20development%2C%20also%20known%20as,web%20programming%2C%20and%20database%20management.'>Learn More</Link>
          </CardFooter>
        </Card>
        {/* </div> */}
        <Card bg='' style={{border:"1px solid white",borderRadius:"5px"}} className="gap blur CARD3">
          <CardHeader>
            <Heading size='md' style={{ color: "#ffffff", fontSize: "30px" }}><i className="fa-brands fa-react fa-spin ml4 mt3 "></i> ReactJS</Heading>
          </CardHeader>
          <CardBody className='ml4 mt3'>
            <Text style={{ color: "#ffffff", fontSize: "15px" }}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.</Text>
          </CardBody>
          <CardFooter>
            <Link className='ml4 link3 ' style={{ color: "#ffffff", textDecoration: "none"}} href='https://www.uxpin.com/studio/blog/reactjs-websites-examples/'>Learn More</Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <br/><br/><br/><br/><br/><br/><br/>
    </div >
  )
}

export default Services