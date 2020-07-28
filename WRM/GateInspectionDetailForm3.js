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

export default class GateInspectionDetailForm3 extends Component {
  constructor() {
    super();
    this.state = {
        bearingBUshes: '',
        Rollers:'',
        brassPlates:'',
        steelPlates:'',
        rubberSeel:'',
        guideTee:'',
        liftingBrackets:'',
        steelLining:'',
        wallPlates:'',
        steelBeam:'',
        AirVents:'',
        sizeOfAirVents:''

    };
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
               
               
                       
              
              </View>
              <Text style={styles.headingText}>B.2 Condition of Gate Leaf</Text>
              <View>
                <View style={{flexDirection: 'row', justifyContent:"space-evenly", backgroundColor: 'yellow', alignItems: 'center', padding: 4}}>
                  <Text style={styles.headingText1}>Point</Text>
                  <Text style={styles.headingText1}>Remark</Text>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Rollers</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.Rollers}
                    onValueChange={(itemValue, i) =>
                      this.setState({Rollers: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Bearing/BUshes</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.bearingBUshes}
                    onValueChange={(itemValue, i) =>
                      this.setState({bearingBUshes: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Brass Plates</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.brassPlates}
                    onValueChange={(itemValue, i) =>
                      this.setState({brassPlates: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Plate</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.steelPlates}
                    onValueChange={(itemValue, i) =>
                      this.setState({steelPlates: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Rubber Seel</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.rubberSeel}
                    onValueChange={(itemValue, i) =>
                      this.setState({rubberSeel: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Guide Tee, Bracket and Channels</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.guideTee}
                    onValueChange={(itemValue, i) =>
                      this.setState({guideTee: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Lifting Brackets</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.liftingBrackets}
                    onValueChange={(itemValue, i) =>
                      this.setState({liftingBrackets: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Lining</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.steelLining}
                    onValueChange={(itemValue, i) =>
                      this.setState({steelLining: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Wall Plates</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.wallPlates}
                    onValueChange={(itemValue, i) =>
                      this.setState({wallPlates: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Beam</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.steelBeam}
                    onValueChange={(itemValue, i) =>
                      this.setState({steelBeam: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Types of air Vents</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.AirVents}
                    onValueChange={(itemValue, i) =>
                      this.setState({AirVents: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Size of air Vents</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.AirVents}
                    onValueChange={(itemValue, i) =>
                      this.setState({AirVents: itemValue, index: i})
                    }>
                    <Picker.Item label="Dropdown" value="Dropdown" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
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
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2
  },
  buttonText: {
    marginTop: 15,
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
    height: Dimensions.get('window').height - 810,
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
    width: '50%',
    padding:4
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
