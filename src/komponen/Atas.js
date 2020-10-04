import React from 'react';
import 
{
Nav,
NavDropdown,
Navbar,
Form,
FormControl,
Button,
Breadcrumb,
Container,
Row,
Col,
Spinner
} from 'react-bootstrap';



function Atas() {
	return(
		<>
						  	  	  						
				<Navbar bg="dark" variant="dark" expand="lg">
				  <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="#home">Home</Nav.Link>
				      <Nav.Link href="#link">Berita</Nav.Link>
				      <Nav.Link href="#link">Live Scores</Nav.Link>
				      <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">Bundes Liga</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Liga Inggris</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Seri A</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Liga Indonesia 1</NavDropdown.Item>
				      </NavDropdown>
				      <Nav.Link href="#link">Transfer Pemain</Nav.Link>
				      <Nav.Link href="#link">Tim</Nav.Link>
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-info">Search</Button>
				    </Form>
				    </Navbar.Collapse>			    
				</Navbar>			  			
			
		<Container>
			<Row>
			 <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	
			  </Col>
			  <Col sm={4}>
			  	<Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
				  <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
				</Breadcrumb>
			  </Col>
			</Row>
			<br/>
			<Row>
			  <Col sm={8}><h4>Rumor Transfer Pemain</h4></Col>
			  <Col sm={3}></Col>
			  <Col>
			  	 <Spinner animation="border" variant="success" />
 				 <Spinner animation="grow" variant="success" />
			  </Col>
			</Row>
		</Container>	
		</>
		)
}
export default Atas;