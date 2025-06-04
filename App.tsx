import React,{ useRef, useEffect } from 'react';
import type {PropsWithChildren} from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppState
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./Screens/Splash";
import Welcome from "./Screens/Welcome";
import CompanyID from "./Screens/CompanyID";
import PickVoice from "./Screens/PickVoice";
import MainScreen from "./Screens/MainScreen";
import Settings from "./Screens/Settings";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const OnboardingStack = createNativeStackNavigator();
const OnboardingStackScreen = () =>{
   const navigation = useNavigation();
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <OnboardingStack.Screen name="CompanyID" component={CompanyID} />
       <OnboardingStack.Screen name="PickVoice" component={PickVoice} options={{presentation: 'modal'}}/>
    </OnboardingStack.Navigator>
  );
}

const homeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
    </homeStack.Navigator>
  );
}


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const navigationRef = useRef();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active' && navigationRef.current) {
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: 'Splash' }],
        });
      }
    });
    return () => subscription.remove();
  }, []);

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="OnboardingStackScreen" component={OnboardingStackScreen}   options={{ headerShown: false }}/>
      <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({

});

export default App;
