import {Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {CityData} from './mockServer';
import {CityCard} from './components';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <FlashList
        data={CityData}
        renderItem={({item}) => <CityCard item={item} />}
        keyExtractor={item => item?.ID.toString()}
        estimatedItemSize={18}
      />
    </View>
  );
};

export default Home;
