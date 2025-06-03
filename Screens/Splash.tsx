import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingStackScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
