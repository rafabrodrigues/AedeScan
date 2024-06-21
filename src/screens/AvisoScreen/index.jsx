import React, { useRef, useState } from "react";

import {
  Container,
  MainContainer,
  SearchContainer,
  SearchButtonIcon,
  SearchInput,
  SwitchContainer,
  Switch,
  SwitchText,
  SpaceBetween,
  SmallButton,
  SmallButtonText,
  NotificationContainer,
  Notification,
  NotificationDescription,
  NotificationButton,
  NotificationButtonText,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function AvisoScreen() {
  const searchRef = useRef(null);

  const handleSearchPress = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => previousState);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const notificationText =
    "Você foi localizado em uma área de risco! Por favor, evite a área e siga as instruções de segurança.";

  const truncatedText = truncateText(notificationText, 200);

  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      <MainContainer>
        <SearchContainer>
          <SearchButtonIcon onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color="#fff" />
          </SearchButtonIcon>
          <SearchInput
            ref={searchRef}
            placeholder="Pesquisar..."
            placeholderTextColor="#edf2f4"
          />
        </SearchContainer>
        <SpaceBetween>
          <SwitchContainer>
            <Switch
              trackColor={{ false: "#111", true: "#111" }}
              thumbColor={isEnabled ? "#2b2d42" : "#2b2d42"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <SwitchText>Somente não lidos</SwitchText>
          </SwitchContainer>
          <SmallButton>
            <Ionicons name="filter" size={22} color="#edf2f4" />
            <SmallButtonText color="#edf2f4">Filtros</SmallButtonText>
          </SmallButton>
        </SpaceBetween>
        <NotificationContainer>
          <Notification>
            <NotificationDescription>{truncatedText}</NotificationDescription>
            <NotificationButton>
              <NotificationButtonText color="#fff">
                Abrir
              </NotificationButtonText>
            </NotificationButton>
          </Notification>
          <Notification>
            <NotificationDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              finibus dapibus placerat. Nam vulputate erat ligula, a pulvinar
              risus ullamcorper in. Vivamus tellus erat, malesuada non mi at,
              dapibus condimentum mi. Aenean tellus odio, condimentum non nisl
              ut, blandit euismod eros. Nam nibh erat, gravida sit amet rutrum
              vitae, consequat vitae leo. Praesent facilisis vestibulum diam,
              vitae pulvinar risus hendrerit porta. Vestibulum nec lobortis
              justo, nec fringilla augue. Pellentesque et placerat justo. Donec
              condimentum venenatis fermentum.
            </NotificationDescription>
            <NotificationButton>
              <NotificationButtonText color="#fff">
                Abrir
              </NotificationButtonText>
            </NotificationButton>
          </Notification>
        </NotificationContainer>
      </MainContainer>
    </Container>
  );
}
