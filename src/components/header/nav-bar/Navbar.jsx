
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../../styles/navbar.css'



function NavBar() {
  return (

    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" 
     className = 'navbar'

   >

        <Navbar.Brand href="/" className = 'logo' style ={{paddingLeft:'3%'}}>
          <img src = './sece.png' style={{ "height": 34 }}
            alt='brand logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-p">
            <Nav.Link className='nav-child line' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='nav-child line' as={Link} to="/events">Events</Nav.Link>
           
            <Nav.Link className='nav-child line' as={Link} to="/about" >About Us</Nav.Link>
            <Nav.Link className='nav-child line' as={Link} to="/team">Team</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default NavBar;