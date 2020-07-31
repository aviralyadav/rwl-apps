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
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Footer from './Footer';
import {Icon} from 'native-base';

export default class GateInspectionDetailForm extends Component {
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: new Date(1598051730000),
      mode: 'date',
      show: false,
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    this.setState({date: currentDate});
  };
  showDatepicker = () => {
    this.setState({show: true});
  };
  printDate() {
    return (
      <Text
        style={{
          borderWidth: 1,
          borderColor: 'red',
          paddingHorizontal: 20,
          alignSelf: 'center',
          paddingVertical: 5,
        }}>
        {this.state.date.toDateString()}
      </Text>
    );
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.damCheckListContainer}>
        <View style={styles.viewArea}>
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
                    mode="datetime"
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
              <Text style={styles.headingText2}>B.1 Condition of Hoist</Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'yellow',
                    alignItems: 'center',
                    padding: 2,
                    marginBottom:8
                  }}>
                  <Text style={styles.headingText1}>Point</Text>
                  <Text style={styles.headingText1}>Remark</Text>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Hand wheel</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Worm Wheel and Worm Shaft</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Thrust bearing</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Brass nut and key </Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Mounting Bolts</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Stam rod</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Lubricantion of brass nut,bearing and stem rod</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Supporting Portal</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Foundation arrangement on well</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Locking arrangement of gate</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Gate lift position indicater</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Hoist Platform</Text>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Remark"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
                </View>
                <View style={styles.buttonView}>
                  <TouchableWithoutFeedback>
                    <Text style={styles.buttonText}>Save & Next</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <Text style={styles.buttonText}>Clear</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
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
    fontSize: 18,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  viewArea: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 510,
    padding: 15,
    margin: 2,
  },
  header: {
    // flexDirection: 'row',
    width: Dimensions.get('window').width,
    // justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    height: Dimensions.get('window').height - 510,
    // padding: 4,
    paddingLeft: 8,
    paddingRight: 42,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 15,
    fontWeight: '700',
    width: '40%',
  },
  headingText2: {
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
    width: '55%',
  },
});
