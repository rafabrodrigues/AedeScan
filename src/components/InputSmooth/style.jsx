import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  position: relative;
`;

export const Input = styled.TextInput`
  font-family: "Poppins_400Regular";
  padding: 10px;
  border: 1px solid #edf2f4;
  border-radius: 5px;
  margin-bottom: 10px;
  ${(props) =>
    props.isFocused &&
    `

  `}
`;

export const Placeholder = styled.Text`
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Poppins_400Regular";
  position: absolute;
  left: 15px;
  top: 14px;
  color: #aaa;
  ${(props) =>
    props.isFocused &&
    `
    top: -10px;
    left: 10px;
    font-size: 12px;
    background-color: #2b2d42;
  `}
`;
