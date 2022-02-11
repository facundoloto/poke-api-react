import 'bootstrap/dist/css/bootstrap.css'
import '../components/css/iconBoton.css'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function NavPoke(){
return(
    <div>
<Navbar bg="danger" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>
    </div>
  
)
}