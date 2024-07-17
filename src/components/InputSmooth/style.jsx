import styled from "styled-components/native";
import MaskInput from 'react-native-mask-input';
export const InputContainer = styled.View`
  width: 100%;
  position: relative;
`;

export const Input = styled(MaskInput)`
  font-family: "Poppins_400Regular";
  padding: 10px;
  border: 2px solid #edf2f4;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
  ${(props) =>
    props.isFocused &&
    `
    border-color:#648b9b;
  `}
`;

export const Placeholder = styled.Text`
  position: absolute;
  display: none;
  font-size: 14px;
  padding-right: 5px;
  padding-left: 5px;
  font-family: "Poppins_400Regular";
  ${(props) =>
    props.isFocused &&
    `
    display:flex;
    color:#648b9b;
    top: -10px;
    left: 10px;
    font-size: 12px;
    background-color: #2b2d42;
  `}
`;

