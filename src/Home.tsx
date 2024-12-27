import {View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {CityData} from './mockServer';
import {
  AppHeader,
  CityCard,
  MemoizesFilterModal,
  NoInternetHeader,
} from './components';
import {
  CityItem,
  debounce,
  getCityDataFromStorage,
  saveCityDataToStorage,
} from './utils';
import NetInfo from '@react-native-community/netinfo';

const Home = () => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [debouncedSearchedText, setDebouncedSearchedText] =
    useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<'name' | 'population' | null>(
    null,
  );
  const [cities, setCities] = useState<CityItem[]>([]);
  const [isInternet, setIsInternet] = useState<boolean | null>(false);

  useEffect(() => {
    const fetchCityData = async () => {
      const isConnected = await NetInfo.fetch().then(
        state => state.isConnected,
      );
      setIsInternet(isConnected);
      if (isConnected) {
        const fetchedCityData = CityData;
        setCities(fetchedCityData);
        saveCityDataToStorage(fetchedCityData);
      } else {
        const storedData = getCityDataFromStorage();
        setCities(storedData);
      }
    };
    fetchCityData();
  }, []);

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

  const CityDataWithLowercaseNames = useMemo(() => {
    return cities.map(city => ({
      ...city,
      lowercaseName: city.Desitnation.toLowerCase(),
    }));
  }, [cities]);

  const filteredCities = useMemo(() => {
    let result = [...CityDataWithLowercaseNames];
    if (debouncedSearchedText) {
      const lowerCaseText = debouncedSearchedText.toLowerCase();
      result = result.filter(city =>
        city.lowercaseName.includes(lowerCaseText),
      );
    }
    return result;
  }, [debouncedSearchedText, CityDataWithLowercaseNames]);

  const sortedCities = useMemo(() => {
    let result = [...filteredCities];

    if (sortOption) {
      if (sortOption === 'name') {
        result.sort((a, b) => a.lowercaseName.localeCompare(b.lowercaseName));
      } else if (sortOption === 'population') {
        result.sort((a, b) => a.population - b.population);
      }
    }

    return result;
  }, [filteredCities, sortOption]);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      {!isInternet && <NoInternetHeader />}
      <AppHeader
        searchedText={searchedText}
        handleSearchChange={(text: string) => handleSearchChange(text)}
        setModalVisible={setIsModalVisible}
      />
      <FlashList
        data={sortedCities}
        renderItem={({item}) => <CityCard item={item} />}
        keyExtractor={item => item?.ID.toString()}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={85}
        getItemType={() => 'default'}
      />
      <MemoizesFilterModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        setSortOption={setSortOption}
      />
    </View>
  );
};

export default Home;
