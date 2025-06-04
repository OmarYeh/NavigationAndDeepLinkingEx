import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const ValidCompanyID = ['Com1', 'Com2', 'Com3', 'Com4'];

const SetCompanyID = () => {
  const [storedCompanyId, setStoredCompanyId] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const getCompanyId = async () => {
      const value = await AsyncStorage.getItem('companyId');
      if (value) setStoredCompanyId(value);
    };
    getCompanyId();
  }, []);
  return (
    <View style={styles.container}>
      {ValidCompanyID.map(item => (
        <View
          key={item}
          style={{
            padding: 20,
            borderBottomWidth: 2,
            borderColor: '#ccc',
          }}>
          <Text style={{fontSize: 18}}>{item}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: '#ccc',
          borderRadius: 7,
          padding: 10,
          width: 200,
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate('CompanyId');
        }}>
        <Text>Enter company ID...</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SetCompanyID;
