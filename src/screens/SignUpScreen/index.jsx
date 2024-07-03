import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { ButtonContainer, Container, InputContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button, ButtonText } from "../../components/Button";
import { Title } from "../../components/Title";
import { Label } from "./../../components/Label/index";
import { supabase } from "../../Supabase/supabaseClient";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message)
      if (!session) Alert.alert('Please check your inbox for email verification!')
  };
  return (
    <Container>
      <Title>
        AedeS<Text style={{ color: "#8d99ae" }}>can</Text>
      </Title>
      <Input
        placeholder="Email ou CPF"
        placeholderTextColor="#999"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        placeholder="Senha"
        placeholderTextColor="#999"
        onChangeText={setPassword}
        value={password}
      />
      <ButtonContainer>
        <Button onPress={handleSignUp}>
          <ButtonText>Cadastrarz</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
