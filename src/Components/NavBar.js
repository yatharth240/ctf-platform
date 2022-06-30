import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const fontStyle = {
  'fontWeight':'bold',
  'fontSize':'26px'
}

const fontStyle2 = {
  'fontWeight':'bold',
  'fontSize':'23px'
}

const NavbarStyle = {
  textDecoration : 'inherit',
  color : 'inherit',
  fontWeight:'bold',

}




const NavBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={fontStyle}>CTF Platform </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={fontStyle} ><Link to="/" style={NavbarStyle}>Home</Link></Nav.Link>
            <Nav.Link style={fontStyle}><Link to="/about" style={NavbarStyle}>About</Link></Nav.Link>
            <Nav.Link style={fontStyle}><Link to="/license" style={NavbarStyle}>License</Link></Nav.Link>
          </Nav>
          <Nav>
      <Nav.Link ><Link to="/team"><Button variant="success" size="lg" style={fontStyle2}>Create or Join Team </Button></Link></Nav.Link>
      <Nav.Link ><Link to="/scoreboard"><Button variant="danger" size="lg" style={fontStyle2}>Scoreboard</Button></Link></Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

}

export default NavBar;