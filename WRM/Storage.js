import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';

export default () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          //   flexDirection: 'row',
          // width: 40,
          //   justifyContent: 'space-between',
        }}>
        <Text style={styles.liveStorageText}>
          Live Storage of Important Dam
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{justifyContent: 'space-around'}}>
            <Text>Storage Level</Text>
            <Text>Current Level</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'green',
                width: 30,
                height: 40,
                marginBottom: 5,
                alignItems: 'center', justifyContent: 'center'
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <View style={{backgroundColor: 'red', width: 30, height: 50,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <Text>Dam1</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'green',
                width: 30,
                height: 40,
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <View
              style={{
                backgroundColor: 'red',
                width: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <Text>Dam2</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'green',
                width: 30,
                height: 40,
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <View
              style={{
                backgroundColor: 'red',
                width: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <Text>Dam3</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'green',
                width: 30,
                height: 40,
                marginBottom: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <View
              style={{
                backgroundColor: 'red',
                width: 30,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>40</Text>
            </View>
            <Text>Dam4</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5}}>
            <View style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text>Max Storage</Text>
              <View style={{backgroundColor: 'green', borderRadius: 9, width: 18, height: 18, marginLeft: 5}}></View>
            </View>
            <View style={{justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <Text>Current Level</Text>
              <View style={{backgroundColor: 'red', borderRadius: 9, width: 18, height: 18, marginLeft: 5}}></View>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 1050
  },
  liveStorageText: {
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'green',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 4,
    marginBottom: 4,
  },
});
