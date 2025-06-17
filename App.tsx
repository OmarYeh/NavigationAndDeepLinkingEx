import React, {useRef, useEffect, useState} from 'react';
import {AppState, Linking} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import CompanyID from './Screens/CompanyID';
import PickVoice from './Screens/PickVoice';
import MainScreen from './Screens/MainScreen';
import Settings from './Screens/Settings';
import SetCompanyId from './Screens/SetCompanyId';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Screen} from 'react-native-screens';

const linking = {
  prefixes: ['navigationanddeeplinkex://'],
  config: {
    screens: {
      Splash: '',
      initialRouteName: 'Splash',
      HomeStackScreen: {
        path: 'home',
        initialRouteName: 'MainScreen',
        screens: {
          MainScreen: '',
        },
      },
      SettingsStackScreen: {
        path: 'settings',
        initialRouteName: 'Settings',
        screens: {
          Settings: '',
          SetCompanyId: 'setcompanyid',
        },
      },
    },
  },
};

const OnboardingStack = createNativeStackNavigator();
const OnboardingStackScreen = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <OnboardingStack.Screen name="CompanyID" component={CompanyID} />
      <OnboardingStack.Screen
        name="PickVoice"
        component={PickVoice}
        options={{presentation: 'modal'}}
      />
    </OnboardingStack.Navigator>
  );
};

const homeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </homeStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="CompanyId" component={CompanyID} />
      <SettingsStack.Screen name="PickVoice" component={PickVoice} />
      <SettingsStack.Screen name="SetCompanyId" component={SetCompanyId} />
    </SettingsStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const navigationRef = useRef();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer linking={linking} ref={navigationRef}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnboardingStackScreen"
            component={OnboardingStackScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeStackScreen"
            component={HomeStackScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SettingsStackScreen"
            component={SettingsStackScreen}
            options={{presentation: 'modal', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
