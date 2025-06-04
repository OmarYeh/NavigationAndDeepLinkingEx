import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
        <Text style={{color: 'white', fontSize: 16}}>Hello</Text>

        <TouchableOpacity 
          style={{marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5}}
          onPress={() => {
            navigation.navigate('SetCompanyID');
          }}>
            <Text style={{color: 'white'}}>Set Company ID</Text>
          </TouchableOpacity>
          
      
    </View>
  );
};

export default Settings;
