import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.bgColor || '#edf2f4'};
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    padding-right: 4px;
    padding-bottom: 12px;
`

export const ButtonText = styled.Text`
    color: ${props => props.color || '#2b2d42'};
    font-size: 16px;
    font-family: 'Poppins_700Bold';
`

export const ButtonCadastro = styled(Button)`
    border: 2px solid #edf2f4;
`

export const NextButton = styled.TouchableOpacity`
    background-color: #ffff;
    align-items: center;
    justify-content: center;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius:32px;
    align-self: flex-end;
    margin-right: 12px;
`

export const NextButtonText = styled.Text`
    color: #000;
    font-size: 16px;
    font-family: 'Poppins_400Regular';
`