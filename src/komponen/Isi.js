import React from 'react';
import
{
Container,
Row,
Col,
Tabs,
Tab
} from 'react-bootstrap';
import Semuatf from '../classdata/Semuatf';
import Ligainggris from '../classdata/Ligainggris';
import Seria from '../classdata/Seria';
import Divprimera from '../classdata/Divprimera';
import Bundesliga from '../classdata/Bundesliga';
import Ligasatu from '../classdata/Ligasatu';


function Isi() {
	return(
		<>
		
		<Container>
		<center>
		  <Row>
		  <Col sm={12}>
				<Tabs defaultActiveKey="semua_transfer" id="uncontrolled-tab-example">
				  <Tab eventKey="semua_transfer" title="Semua Transfer">
				    
				    <br/><Semuatf />
				    
				  </Tab>
				  <Tab eventKey="liga_p_inggris" title="Liga Premier Inggris">
				    <Container>
				    	<Ligainggris />
				    </Container>
				  </Tab>
				  <Tab eventKey="seri_a" title="Seri A">
				    <Container>
				    	<Seria />
				    </Container>
				  </Tab>
				  <Tab eventKey="div_primera" title="Divisi Primera">
				    <Container>
				    	<Divprimera />
				    </Container>
				  </Tab><Tab eventKey="bundesliga" title="Bundes Liga">
				    <Container>
				    	<Bundesliga />
				    </Container>
				  </Tab>
				  <Tab eventKey="liga1_indonesia" title="Liga 1 Indonesia">
				    <Container>
				    	<Ligasatu />
				    </Container>
				  </Tab>
				</Tabs>
			</Col>				
			</Row>			
			</center>		 
		</Container>
		
		</>
		)
}
export default Isi;