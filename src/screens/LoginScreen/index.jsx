import { View, Text } from 'react-native'
import React from 'react'
import { Container, TitleContainer, Title, SubTitleContainer, SubTitle, ButtonContainer } from './styles';
import { Button, ButtonText, ButtonCadastro } from '../../components/Button'


export default function LoginScreen() {

    return (

        <Container>
            <TitleContainer>
                <Title>AedeS<Text style={{ color: '#8d99ae' }}>can</Text></Title>
            </TitleContainer>

            <SubTitleContainer>
                <SubTitle>Uma pequena atitude, pode fazer uma grande diferença na luta contra a dengue</SubTitle>
            </SubTitleContainer>
            
            <ButtonContainer>
                <Button>
                    <ButtonText>Entrar na minha conta</ButtonText>
                </Button>
                <ButtonCadastro bgColor='#2b2d42'>
                    <ButtonText color='#edf2f4'>Não possuo uma conta</ButtonText>
                </ButtonCadastro>
            </ButtonContainer>
        </Container>



    )
}