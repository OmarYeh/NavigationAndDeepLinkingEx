import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';

const PickVoice = () => {
  const navigation = useNavigation();
    const route = useRoute();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => {
         navigation.replace('MainScreen');
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickVoice;
