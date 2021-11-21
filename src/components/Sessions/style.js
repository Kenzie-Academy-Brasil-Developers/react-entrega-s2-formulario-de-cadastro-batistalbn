import styled from "styled-components";

export const Bloco = styled.fieldset`
  border-radius: 10px;
  border: 2px solid #ffd700;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;

  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-top: 20px;
  legend {
    text-align: left;
    font-size: 26px;
    font-weight: 700;
  }
`;
