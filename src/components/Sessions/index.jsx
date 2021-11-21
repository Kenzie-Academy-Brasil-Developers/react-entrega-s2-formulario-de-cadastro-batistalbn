import { Bloco } from "./style";

const Sessions = ({ text, children }) => {
  return (
    <Bloco>
      <legend>{text}</legend>
      {children}
    </Bloco>
  );
};

export default Sessions;
