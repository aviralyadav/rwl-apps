import React, {Component} from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Picker,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import DateTimePicker from '@react-native-community/datetimepicker';

import Footer from './Footer';

export default class EnterRainfall extends Component {
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: '2016-05-15',
      selectedHours: 0,
      selectedMinutes: 0,
      time: new Date(),
      show: false
    };
  }
  onChange = (ev, selectedTime) => {
    this.setState({time: selectedTime})
  }
  showTimePicker = () => {
    this.setState({show: true})
  }
  render() {
    console.log(this.state);
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.damCheckListContainer}>
         <View>

<Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:10}}>
Enter Rainfall
</Text>
</View>
        <View style={styles.viewArea}>
          <ScrollView>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Dam/Tank Name</Text>
                
                </View>
               
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Date:</Text>
                  <DatePicker
                  
                  style={{width: '50%', }}
                  date={this.state.date}
                  mode="date"
                  placeholder="Select inspection date"
                  format="YYYY-MM-DD"
                  minDate="1990-05-01"
                  maxDate="2090-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={true}
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                       marginLeft: 50,
                      // marginHorizontal: 10,
                      borderColor: 'black',
                      borderWidth:1,
                      borderRadius: 5,
                      color: '#000'
                    },
                    placeholderText: {
                      color: '#000'
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({date: date});
                  }}
                />
        
                </View>
                
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Time:</Text>
                  <Text style={{borderColor: 'black', borderWidth: 1,borderRadius: 5, width: '50%', height: 35,alignItems: 'center', textAlign: 'center',paddingTop:7}} onPress={this.showTimePicker}>{this.state.time.toLocaleTimeString()}</Text>
                     {this.state.show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={this.state.time}
                      placeholder="Select Time"
                      mode="time"
                      is24Hour={true}
                      display="default"
                      onChange={this.onChange}
                    
        />
      )}
                  {/* <View style={styles.time}>
                  <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
                  </View> */}
                  
                </View>
                
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Rainfall (in mm):</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    
                    placeholder="Enter Level"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
              
              </View>
              
              <View>
              
              
               
              
              </View>
              <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Save 
            </Text>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText1}>
               Clear
            </Text>
         </TouchableWithoutFeedback>
                </View>
            </View>
          </ScrollView>
          </ScrollView>
        </View>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  damCheckListContainer: {
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 2, paddingRight: 5, 
    paddingTop: 30, paddingBottom: 2,marginBottom:50
  },
  buttonText: {
    // marginTop: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#9ADF8F',
      borderRadius: 25,
      backgroundColor:'#9ADF8F',
      fontSize:18,
      marginLeft:'2%',
       marginTop:20,
      marginBottom:20
  },
 
  buttonText1: {
    marginTop: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 35,
      borderRadius: 25,
      borderColor: '#FE7D6A',
      backgroundColor:'#FE7D6A',
      fontSize:18,
      marginLeft:'4%',
      marginTop:20,
      marginBottom:20
  },
  textInputView: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2},
  viewArea: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 510,
    padding: 10,
    margin: 2,
    marginTop:30,
    
    
  },
  header: {
    // flexDirection: 'row',
    width: Dimensions.get('window').width,
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 455,
    // padding: 4,
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "space-between"
    // alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 18,
    fontWeight: '700',
    width: '45%',
    // alignItems: "flex-end", textAlign: "flex-end"
    
  },
  headingText1: {
    fontSize: 15,
    fontWeight: '700',
    width: '50%',
  },
  contentText: {
    fontWeight: 'normal',
    fontSize: 15,
    // width: '25%',
    // padding: 5,
  },
  contentArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 385,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    
  },
  pickerStyle: {
    height: 50,
    width: '45%',
    color: '#344953',
    justifyContent: 'center',
  },
  input: {
    // margin: 15,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    width: '55%',
    borderRadius: 5,
    alignItems: 'center', textAlign: 'center'

  },
  time:{
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width:"45%",
   borderWidth:1,
   borderColor:"#9a73ef"
  }

});