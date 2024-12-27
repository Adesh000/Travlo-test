import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const NoInternetHeader = () => {
  return (
    <View style={styles.internetHeaderStyle}>
      <Text style={{textAlign: 'center'}}>No Internet</Text>
    </View>
  );
};

export default NoInternetHeader;
