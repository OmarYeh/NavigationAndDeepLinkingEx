import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
      <homeStack.Screen name="MainScreen" component={MainScreen} />
    </homeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <OnboardingStack.Screen name="CompanyID" component={CompanyID} />
    </SettingsStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  

  return (
    <>
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
  <Stack.Screen name="OnboardingStackScreen" component={OnboardingStackScreen}   options={{ headerShown: false }}/>
   <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false }}/>
</Stack.Navigator>
</NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({

});

export default App;
