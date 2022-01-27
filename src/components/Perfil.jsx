import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  logout() {
    this.setState({
      user: '',
      password: '',
    });
  }

  render() {
    if (this.state.user == '') {
      return <p>Inicia sesion primero!</p>;
    } else {
      return (
        <div className="main-site">
          <Container>
            <Form>
              {/* NOMBRE */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario: {this.state.user}</Form.Label>
              </Form.Group>

              <Button variant="primary" type="button" onClick={this.logout}>
                Logout
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}

export default Perfil;
