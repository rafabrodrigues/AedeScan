import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.bgColor || '#edf2f4'};
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
`

export const ButtonText = styled.Text`
    color: ${props => props.color || '#2b2d42'};
    font-size: 16px;
    font-family: 'Poppins_700Bold';
`

export const ButtonCadastro = styled(Button)`
    border: 2px solid #edf2f4;
`

