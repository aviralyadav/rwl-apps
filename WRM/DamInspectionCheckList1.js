import React, { Component } from 'react';
//import react in our code.

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class DamInspectionCheckList1 extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
          <View  style={styles.headerContent}>

<Text style={styles.Text}>Dam Name :</Text>
<Text style={styles.Text1}>Dam 1</Text>
</View>
        <View style={{borderStyle:"dotted" ,borderTopWidth:5,borderColor:"red"}}></View>
        <View style={{
          flexDirection:"row",
          justifyContent: 'space-evenly',
          marginTop:"5%"
          
        }}>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
   
        <Image
                source={require('./Images/list2.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section A </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
   
        <Image
                source={require('./Images/list2.png')}

            style={styles.ImageIconStyle}
          />
   <View />
   <Text style={styles.TextStyle}>Section B </Text>
 </TouchableOpacity>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section C </Text>
        </TouchableOpacity>
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent: 'space-evenly',
          marginTop:"20%"
          
        }}>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
   
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section D </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section E </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section F </Text>
        </TouchableOpacity>

      </View>
      <View style={{
          flexDirection:"row",
          justifyContent: 'space-evenly',
          marginTop:"20%"
          
        }}>

<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
   
   <Image
           source={require('./Images/list.png')}

       style={styles.ImageIconStyle}
     />
     <View />
     <Text style={styles.TextStyle}>Section G </Text>
   </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section H </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
        <Image
                source={require('./Images/list.png')}

            style={styles.ImageIconStyle}
          />
          <View />
          <Text style={styles.TextStyle}>Section I </Text>
        </TouchableOpacity>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    margin: 30,
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F3F4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height:60,
    width: 100,
    borderRadius: 2,
    margin: 5,
    marginLeft:20
  },
  FacebookStyle: {
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: '#F0F3F4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height:60,
    width: 100,
    borderRadius: 2,
    margin: 5,
    marginLeft:10
  },
  FacebookStyle1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F3F4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height:60,
    width: 100,
    borderRadius: 2,
    margin: 5,
    marginLeft:5
  },
  ImageIconStyle: {
   
    borderWidth:2,
    borderColor:'cyan',
     borderRadius:4,
    height: 80,
    width:70,
  
  },
  TextStyle: {
    color:"blue",
    marginTop:10,
    marginLeft:2,
    fontSize:18
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
   
  },
  Text:{
    color:'black',
    padding:10,
    fontSize:20,
    marginLeft:12
  },
  Text1:{
    color:'black',
    padding:10,
    fontSize:20,
    marginRight:"40%",
    fontWeight:"bold"
  },

});