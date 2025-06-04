import React, {type ComponentProps, useCallback,useMemo, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import VoicebotScreen from './VoiceBot';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  type StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import { NavigationContainer, NavigationIndependentTree, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from "./Settings";
import CompanyId from "./CompanyID";
import PickVoice from "./PickVoice";
import SetCompanyID from './SetCompanyId';

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
    const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerMode: 'float',
      headerShown: true,
      safeAreaInsets: { top: 0 },
      headerShadowVisible: false,
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    []
  );

  const options = useMemo<ComponentProps<typeof SettingsStack.Screen>['options']>(
    () => ({
      headerBackTitle: 'Back',
    }),
    []
  );

  return (
 <NavigationIndependentTree>
      <NavigationContainer>
        <SettingsStack.Navigator screenOptions={screenOptions}>
        <SettingsStack.Screen name="Settings" component={Settings} options={options} />
        <SettingsStack.Screen name="CompanyId" component={CompanyId} options={options}/>
        <SettingsStack.Screen name="PickVoice" component={PickVoice} options={options} />
        <SettingsStack.Screen name="SetCompanyID" component={SetCompanyID} options={options}/>
      </SettingsStack.Navigator>
     </NavigationContainer>
    </NavigationIndependentTree>
  
  );
};

const MainScreen = () => {
  const [voicebotVisible, setVoicebotVisible] = useState(false);
  const navigation = useNavigation();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.header}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Main Screen</Text>
        <TouchableOpacity
          style={{ marginBottom: 17, borderRadius: 5 }}
          onPress={() => {handleSnapPress(2)}}
        >
          <MaterialIcons name="settings" size={24} color="#5f6368" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
          onPress={() => setVoicebotVisible(true)}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Launch Voicebot screen</Text>
        </TouchableOpacity>
        <VoicebotScreen
          visible={voicebotVisible}
          onClose={() => setVoicebotVisible(false)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        style={{ position: 'absolute', zIndex: 1000 }}
      >
        
         <SettingsStackScreen />
        
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
});

export default MainScreen;