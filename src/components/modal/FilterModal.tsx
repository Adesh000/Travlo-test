import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const FilterModal = ({isVisible, closeModal, setSortOption}) => {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <TouchableWithoutFeedback accessible={false} onPress={closeModal}>
        <View style={styles.mainContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSortOption('population');
                closeModal();
              }}>
              <Text style={styles.modalText}>Sort by Population</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSortOption('name');
                closeModal();
              }}>
              <Text style={styles.modalText}>Sort by Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterModal;
