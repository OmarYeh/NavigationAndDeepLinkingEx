import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CompanyID = () => {

  const [input, setInput] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          width: 200,
          marginBottom: 16,
          color: 'black',
        }}
        placeholder="Enter company ID..."
        value={input}
        onChangeText={text => {
          setInput(text);
          
        }}
      />
      

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => {
        
            navigation.navigate('PickVoice');
          
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompanyID;
