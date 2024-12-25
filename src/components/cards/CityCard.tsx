import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {CityCardProp} from '../../utils';
import styles from './styles';

const CityCard: FC<CityCardProp> = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleStyle}>{item?.Desitnation}</Text>
      <View style={styles.cityDetailContainerStyle}>
        <Text>{item?.country}</Text>
        <Text>{item?.population}</Text>
      </View>
    </View>
  );
};

export default CityCard;
