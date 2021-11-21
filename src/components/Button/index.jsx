import { Container, Send } from "./style";

const Button = ({ type, text }) => {
  return (
    <Container>
      <Send type={type}>{text}</Send>
    </Container>
  );
};

export default Button;
