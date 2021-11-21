import { Container, Area } from "./style";

const Camp = ({
  placeholder,
  register,
  name,
  error,
  type,
  widthDiv,
  marginRight,
}) => {
  return (
    <Container widthDiv={widthDiv} marginRight={marginRight}>
      <Area placeholder={placeholder} {...register(name)} type={type} />
      {error}
    </Container>
  );
};

export default Camp;
