import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

const Profile = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View >
     
      <View>
       
         <Text > Inspection Type </Text>
        <Picker
          selectedValue={currency}
          onValueChange={currentCurrency => setCurrency(currentCurrency)}>
          <Picker.Item label="" value="" />
          
        </Picker>
        
      </View>
      <Text > Description  </Text>
      <TextInput 
          placeholder="Please enter your Description" />
           <Text > Location  </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Please enter your Location"
        />
        <Text > Remark  </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Please enter your Remark"
        />
         <Text >Date of Inspection  </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Please enter your Date"
        />
        
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default Profile;