import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function AvisoScreen() {
  const searchRef = useRef(null);

  const handleSearchPress = () =>{
    if(searchRef.current){
      searchRef.current.focus();
    };
  };

  return (


    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
            <AntDesign name="search1" size={24} color="#fff" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            ref={searchRef}
            placeholder='Pesquisar'
            placeholderTextColor='#edf2f4'
          />
        </View>
      </View>
    </View>
  );
}