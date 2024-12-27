import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cityDetailContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
