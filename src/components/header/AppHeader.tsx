import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppHeader = ({searchedText, handleSearchChange, setModalVisible}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          value={searchedText}
          onChangeText={text => handleSearchChange(text)}
          placeholder="Search city"
        />
      </View>
      <TouchableOpacity
        style={styles.filterIcon}
        onPress={() => setModalVisible(true)}>
        <Icon name="filter" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
