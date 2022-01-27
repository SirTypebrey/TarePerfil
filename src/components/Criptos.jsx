import React from 'react';

import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { ElementosTabla } from '../data/ElementosTabla';
import uuid from 'react-uuid';

class Criptos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenPulsado: '',
      nombrePulsado: '',
      simboloPulsado: '',
      precioPulsado: '',
    };
  }

  changeStateClicked(item) {
    this.setState({
      imagenPulsado: item.imagen,
      nombrePulsado: item.nombre,
      simboloPulsado: item.simbolo,
      precioPulsado: item.precio,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>TOP CRIPTOMONEDAS 2022</h1>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Simbolo</th>
                    <th>Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {ElementosTabla.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeStateClicked(item)}
                      >
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.simbolo}</td>
                        <td>{item.supply}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.state.imagenPulsado} />
              <Card.Body>
                <Card.Title>
                  {this.state.nombrePulsado} {this.state.simboloPulsado}
                </Card.Title>
                <Card.Text>{this.state.precioPulsado}</Card.Text>
              </Card.Body>
            </Card>
            <Col lg={4} md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Criptos;
