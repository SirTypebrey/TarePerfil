import React from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { UsuarioLista } from '../data/UsuarioLista';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };

    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
  }

  login() {
    var existe = false;
    UsuarioLista.map((item) => {
      if (
        (item.user =
          this.inputUser.current.value &&
          item.password === this.inputPassword.current.value)
      ) {
        this.setState({
          user: this.inputUser.current.value,
          password: this.inputPassword.current.value,
        });
        existe = true;
      }
    });
    if (existe == false) {
      alert('Usuario no encontrado.');
    }
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Hola de nuevo! {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Usuario"
                  ref={this.inputUser}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.inputPassword}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Login
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

export default Home;
