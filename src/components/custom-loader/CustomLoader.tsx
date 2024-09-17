import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';

const CustomLoader = ({isVisible}: {isVisible: boolean}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <ActivityIndicator style={styles.loader} size="large" />
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
