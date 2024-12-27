import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
});

export default styles;
