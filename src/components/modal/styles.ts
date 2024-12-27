import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-end',
    paddingTop: 80,
  },
  modalView: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
