import React, {
  useState,
  useRef,
} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import VoicebotScreen from './VoiceBot';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  useNavigation,
} from '@react-navigation/native';


const MainScreen = () => {
  const [voicebotVisible, setVoicebotVisible] = useState(false);
  const navigation = useNavigation();
  const sheetRef = useRef(null);
 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.header}>
        <Text style={{fontSize: 24, marginBottom: 20}}>Main Screen</Text>
        <TouchableOpacity
          style={{marginBottom: 17, borderRadius: 5}}
          onPress={() => {
           navigation.navigate('SettingsStackScreen');
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
