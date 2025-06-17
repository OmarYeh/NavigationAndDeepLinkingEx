import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate('SetCompanyId');
        }}>
        <Text style={{color: 'white'}}>Set Company ID</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate('PickVoice');
        }}>
        <Text style={{color: 'white', width: 100, textAlign: 'center'}}>
          Pick Voice
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
