import { Link } from "react-router-dom";

import { Container, Logo, Form, Cadastro } from "./style";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <Container>
      <Logo src={logo} alt="Taka-lanches" />
      <Form>
        <input placeholder="Email" type="email" />
        <input placeholder="Senha" type="password" />
        <button type="submit">Login</button>
      </Form>
      <Cadastro>
        <p>
          Novo aqui? <Link to="/register"> Cadastrar-se</Link>
        </p>
      </Cadastro>
    </Container>
  );
};

export default Login;
