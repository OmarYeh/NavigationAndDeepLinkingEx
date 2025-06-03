import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PickVoice = () => {
  const navigation = useNavigation();
    const route = useRoute();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={async () => {
          await AsyncStorage.setItem('onboardingDone', 'true');
         navigation.replace('HomeStackScreen');
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickVoice;
