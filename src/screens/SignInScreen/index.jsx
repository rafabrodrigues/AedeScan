import { View, Text } from "react-native";
import React from "react";
import { ButtonContainer, Container, InputContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button, ButtonText } from "../../components/Button";
import { Title } from "../../components/Title";
import { Label } from "./../../components/Label/index";
export default function SignInScreen() {
  return (
    <Container>
      <Title>
        AedeS<Text style={{ color: "#8d99ae" }}>can</Text>
      </Title>
        <Input placeholder="Email ou CPF" placeholderTextColor="#999" />
        <Input placeholder="Senha" placeholderTextColor="#999" />
      <ButtonContainer>
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
