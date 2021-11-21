import { Link } from "react-router-dom";

import LayoutContainer from "../../components/LayoutContainer";
import Sessions from "../../components/Sessions";
import Card from "../../components/Card";

const User = ({ user }) => {
  return (
    <LayoutContainer>
      <Sessions text="Usuário">
        <Card user={user} />

        <Link to="/">Voltar</Link>
      </Sessions>
    </LayoutContainer>
  );
};

export default User;
