import {Button, Col, Container,Nav,Navbar, NavDropdown, Row} from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';


function NavbarContainer() {
  return (
    <>
  <Row className='d-flex m-3 w-screen b justify-content-center '>
    <Col lg="4 " style={{textAlign:"center",color:"white"}}>
      <h1>Movify</h1>
    </Col>
    <Col className='a' lg="4">
  
    </Col>
    <Col className='c' lg="4">
      <Row className='d-flex'>
        <Col style={{textAlign:"end",color:"wheat"}}>
        <h3> <CgProfile/></h3>
        </Col>
      <Col style={{textAlign:"start"}}>
      <Button>Logout</Button>
      </Col>
     
    
      </Row>
   
    </Col>
  </Row>

      
      
    </>
  );
}
export default NavbarContainer;