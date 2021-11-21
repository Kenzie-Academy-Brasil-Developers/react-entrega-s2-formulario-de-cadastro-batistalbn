import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #fff;
  color: #ff0000;

  width: ${(props) => props.widthDiv};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: 10px;
  padding: 10px 0px 5px 10px;
`;

export const Area = styled.input`
  border: none;
  outline: 0;
  font-size: 16px;
  color: #000;
  width: 60%;
`;
