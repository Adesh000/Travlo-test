import {View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {CityData} from './mockServer';
import {AppHeader, CityCard, FilterModal} from './components';
import {CityItem, debounce} from './utils';

const Home = () => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [debouncedSearchedText, setDebouncedSearchedText] =
    useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<'name' | 'population' | null>(
    null,
  );

  const updateDebouncedSearchText = useCallback(
    debounce((text: string) => {
      setDebouncedSearchedText(text);
    }, 300),
    [],
  );

  const handleSearchChange = (text: string) => {
    setSearchedText(text);
    updateDebouncedSearchText(text);
  };

  useEffect(() => {
    return () => {
      updateDebouncedSearchText.cancel();
    };
  }, [updateDebouncedSearchText]);

  const filteredAndSortedCities = useMemo(() => {
    let result = [...CityData];

    if (debouncedSearchedText) {
      const lowerCaseText = debouncedSearchedText.toLowerCase();
      result = result.filter(city =>
        city.Desitnation.toLowerCase().includes(lowerCaseText),
      );
    }

    if (sortOption) {
      result = result.sort((a, b) => {
        if (sortOption === 'name') {
          return a.Desitnation.localeCompare(b.Desitnation);
        } else if (sortOption === 'population') {
          return a.population - b.population;
        }
        return 0;
      });
    }

    return result;
  }, [searchedText, sortOption]);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <AppHeader
        searchedText={searchedText}
        handleSearchChange={(text: string) => handleSearchChange(text)}
        setModalVisible={setIsModalVisible}
      />
      <FlashList
        data={filteredAndSortedCities}
        renderItem={({item}) => <CityCard item={item} />}
        keyExtractor={item => item?.ID.toString()}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={85}
        getItemType={() => 'default'}
      />
      <FilterModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        setSortOption={setSortOption}
      />
    </View>
  );
};

export default Home;
