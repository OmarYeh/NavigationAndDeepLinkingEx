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
  const CompanyID = ['company1', 'company2', 'company3'];
  const [valid, setValid] = useState(true);
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
        {input.length > 0 && !valid && (
    <Text style={{ color: 'red', marginBottom: 8 }}>
      Company ID is invalid
    </Text>
  )}
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => {
         const isValid = CompanyID.includes(input.trim());
          setValid(isValid);
          if (isValid) {
            navigation.navigate('PickVoice');
          }
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompanyID;
