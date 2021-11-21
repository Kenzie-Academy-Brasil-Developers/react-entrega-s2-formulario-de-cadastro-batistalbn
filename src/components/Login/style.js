import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #ffd700;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px #888888;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  button {
    background-color: #ffd700;
    color: #000;
    padding: 16px 25px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export const Cadastro = styled.div`
  font-size: 14px;

  a {
    text-decoration: none;
    color: #0000ff;
  }
`;
