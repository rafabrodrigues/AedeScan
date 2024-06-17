import React, { useRef } from 'react';

import { Container, MainContainer, SearchContainer, SearchButtonIcon, SearchInput } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function AvisoScreen() {
  const searchRef = useRef(null);

  const handleSearchPress = () =>{
    if(searchRef.current){
      searchRef.current.focus();
    };
  };

  return (


    <Container>
      <MainContainer>
        <SearchContainer>
          <SearchButtonIcon onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color="#fff" />
          </SearchButtonIcon>
          <SearchInput
            ref={searchRef}
            placeholder='Pesquisar...'
            placeholderTextColor='#edf2f4'
          />
        </SearchContainer>
      </MainContainer>
    </Container>
  );
}