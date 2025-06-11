import React, {
  type ComponentProps,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import VoicebotScreen from './VoiceBot';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  type StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationIndependentTree,
  useNavigation,
  useRoute,
  useLinkTo,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './Settings';
import CompanyId from './CompanyID';
import PickVoice from './PickVoice';
import SetCompanyID from './SetCompanyId';

const linking = {
  prefixes: ['navigationanddeeplinkex://'],
  config: {
    screens: {
      Settings: {
        path: 'settings',
        screens: {
          SetCompanyID: 'set-company-id',

        },
      },
    },
  },
};

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = React.forwardRef((props, ref) => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerMode: 'float',
      headerShown: true,
      safeAreaInsets: {top: 0},
      headerShadowVisible: false,
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    [],
  );

  const options = useMemo<
    ComponentProps<typeof SettingsStack.Screen>['options']
  >(
    () => ({
      headerBackTitle: 'Back',
    }),
    [],
  );

  return (
    <NavigationIndependentTree>
      <NavigationContainer ref={ref} linking={linking}>
        <SettingsStack.Navigator screenOptions={screenOptions}>
          <SettingsStack.Screen
            name="Settings"
            component={Settings}
            options={options}
          />
          <SettingsStack.Screen
            name="CompanyId"
            component={CompanyId}
            options={options}
          />
          <SettingsStack.Screen
            name="PickVoice"
            component={PickVoice}
            options={options}
          />
          <SettingsStack.Screen
            name="SetCompanyID"
            component={SetCompanyID}
            options={options}
          />
        </SettingsStack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
});

const MainScreen = () => {
  const [voicebotVisible, setVoicebotVisible] = useState(false);
  const navigation = useNavigation();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [pendingDeeplink, setPendingDeeplink] = useState(false);
  const stackNavRef = useRef(null);
  const handleSheetChange = useCallback((index: number) => {
    setIsSheetOpen(index !== -1);
  }, []);

  const toggleSheet = useCallback(() => {
    if (isSheetOpen) {
      sheetRef.current?.close();
    } else {
      sheetRef.current?.snapToIndex(2);
    }
  }, [isSheetOpen]);

  useEffect(() => {
    const checkInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if (url && url.includes('set-company-id')) {
        setPendingDeeplink(true);
      }
    };

    checkInitialUrl();

    const handleDeepLink = ({url}: {url: string}) => {
      if (url && url.includes('set-company-id')) {
        setPendingDeeplink(true);
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => subscription.remove();
  }, []);

useEffect(() => {
  if (pendingDeeplink && sheetRef.current) {
    setTimeout(() => {
      sheetRef.current?.snapToIndex(2);
      setTimeout(() => {
        stackNavRef.current?.navigate('SetCompanyID');
        setPendingDeeplink(false);
      }, 200); 
    }, 100);
  }
}, [pendingDeeplink]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.header}>
        <Text style={{fontSize: 24, marginBottom: 20}}>Main Screen</Text>
        <TouchableOpacity
          style={{marginBottom: 17, borderRadius: 5}}
          onPress={() => {
            toggleSheet();
          }}>
          <FontAwesome name="cog" size={24} color="#5f6368" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
          onPress={() => setVoicebotVisible(true)}>
          <Text style={{color: 'white', fontSize: 16}}>
            Launch Voicebot screen
          </Text>
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
        enablePanDownToClose={true}
        style={{position: 'absolute', zIndex: 1000}}>
        <SettingsStackScreen ref={stackNavRef} />
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
