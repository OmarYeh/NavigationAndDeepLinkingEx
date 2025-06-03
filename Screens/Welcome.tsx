import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Welcome Screen</Text>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => {
          navigation.navigate('CompanyID');
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
