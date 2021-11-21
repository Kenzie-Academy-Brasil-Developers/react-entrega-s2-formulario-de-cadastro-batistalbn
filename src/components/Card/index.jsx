const Card = ({ user }) => {
  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Telefone: {user.contact}</p>
    </div>
  );
};

export default Card;
