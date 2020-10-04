import React, {Component} from 'react';
import
{
Popover,
OverlayTrigger,
Button,
Container,
Row,
Col
} from 'react-bootstrap';



const popover1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Informasi Website</Popover.Title>
    <Popover.Content>
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita Olahraga
    </Popover.Content>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Versi Website 4.0</Popover.Title>
    <Popover.Content>
      Website ini dibangun menggunakan React JS dan React-Bootstrap
    </Popover.Content>
  </Popover>
);

const Example1 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
    <Button variant="primary">Versi Website</Button>
  </OverlayTrigger>
);

const Example2 = () => (  
  <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
    <Button variant="primary">Infromasi</Button>
  </OverlayTrigger>
);

class Bawah extends Component {
   render() {   
    return(
      <>
      <Container>
      <Row >
        <Col sm={2.5}>
          <Example1 />
        </Col>
        <Col sm={1}>
          <Example2 />
        </Col>
      </Row>
      </Container>
      </>
      )
  }}

export default Bawah;