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

import Footer from './Footer';

export default class GateInspectionDetailForm extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
      date: '2016-05-15',
    };
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.damCheckListContainer}>
        <View style={styles.viewArea}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                    selectedValue={this.state.language}
                    onValueChange={(itemValue) =>
                      this.setState({language: itemValue})
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
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                  />
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
    height: Dimensions.get('window').height - 480,
    // padding: 4,
    paddingLeft: 10,
    paddingRight: 40
    // alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 15,
    fontWeight: '700',
    // width: '25%',
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
    // height: 150,
    // width: '40%',
    color: '#344953',
    justifyContent: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
});
