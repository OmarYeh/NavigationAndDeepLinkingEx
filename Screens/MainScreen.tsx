import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => {
        }}>
        <Text style={{color: 'white', fontSize: 16}}>VoiceBot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
