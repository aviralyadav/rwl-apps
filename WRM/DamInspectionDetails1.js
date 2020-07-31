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
import DamInspectionDetail2 from './DamInspectionDetail2';

import Footer from './Footer';

export default class DamInspectionDetails1 extends Component {
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: '2016-05-15',
    };
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.damCheckListContainer}>
        <View style={styles.viewArea}>
          <ScrollView>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Name of MI Tank</Text>
                  <Text style={styles.headingText}>Mi Tank</Text>
                </View>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Inspection Type</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.inspectionType}
                    onValueChange={(itemValue, i) =>
                      this.setState({inspectionType: itemValue, index: i})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Date of Inspection</Text>
                  <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                      this.setState({date: date});
                    }}
                  />
                </View>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Remark</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
              </View>
              <Text style={styles.headingText}>1. Condition of Hoist</Text>
              <View>
              
              
               <DamInspectionDetail2/>
               
              
              </View>
              <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Save & Next
            </Text>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
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
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 2, paddingRight: 5, paddingTop: 2, paddingBottom: 2
  },
  buttonText: {
    marginTop: 5,
    borderWidth: 1,
    // padding: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: 'black',
    backgroundColor: 'red',
    color: '#fff',
    fontSize: 18
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
  },
  header: {
    // flexDirection: 'row',
    width: Dimensions.get('window').width,
    // justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    height: Dimensions.get('window').height - 510,
    // padding: 4,
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between'
    // alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 15,
    fontWeight: '700',
    width: '45%',
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
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: '55%'
  },
});
