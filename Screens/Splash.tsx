import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
     const checkFirstTime = async () => {
      const onboardingDone = await AsyncStorage.getItem('onboardingDone');
      console.log('onboardingDone:', onboardingDone);
      setTimeout(() => {
        if (onboardingDone === 'true') {
          navigation.replace('HomeStackScreen');
        }else {
      navigation.replace('OnboardingStackScreen');
    }
        
      }, 3000); 
    };
    checkFirstTime();
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
