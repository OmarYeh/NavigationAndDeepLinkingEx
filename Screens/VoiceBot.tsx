import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const VoicebotScreen = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide" 
      transparent={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Voicebot Screen</Text>
        <Button title="Dismiss" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default VoicebotScreen;
