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
// import DatePicker from 'react-native-datepicker';

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
         <View>

<Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:7}}>
    Gate Inspection Details
</Text>
</View>
        <View style={styles.viewArea}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Text style={styles.headingText}>Name of MI Tank</Text>
                  <Text style={styles.headingText}>Mi Tank</Text>
                </View>
               
               
                       
              
              </View>
              <Text style={styles.headingText3}>B.2 Condition of Gate Leaf</Text>
              <View>
                <View style={{flexDirection: 'row',marginTop:4,marginBottom:8, justifyContent:"space-evenly", backgroundColor: 'yellow', alignItems: 'center', padding: 4}}>
                  <Text style={styles.headingText1}>Point</Text>
                  <Text style={styles.headingText1}>Remark</Text>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Rollers</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                  <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Bearing/BUshes</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>
                </View>
                
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Brass Plates</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                  <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Plate</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Rubber Seel</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                  <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Guide Tee, Bracket and Channels</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Lifting Brackets</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Lining</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                  <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Wall Plates</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center',
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Steel Beam</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                  <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Types of air Vents</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText}>Size of air Vents</Text>
                  <View
                
                style={{
                    width: "50%",
                    height: 50,

                    justifyContent: 'center',
                    // flexDirection:"row",
                    borderColor: 'black',
                    borderWidth:1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                 
                  // style={styles.pickerStyle}
                  selectedValue={this.state.inspectionType}
                  onValueChange={(itemValue, i) =>
                    this.setState({inspectionType: itemValue, index: i})
                  }>
                 <Picker.Item label="Select Option" value="Select Option" />
                  <Picker.Item label="JavaScript" value="js" />
                  <Picker.Item label="React Native" value="rn" />
                </Picker>
                </View>

                </View>
               
                <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
           <Text style = {styles.buttonText}>
               Save & Next
            </Text>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText1}>
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
    marginTop: 5,
    borderWidth: 1,
    // padding: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#9ADF8F',
    backgroundColor: '#9ADF8F',
    color: 'black',
    fontSize: 18,
    borderRadius:25,
    marginTop:20
  },
  buttonText1: {
    marginTop: 5,
    borderWidth: 1,
    // padding: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#FE7D6A',
    backgroundColor: '#FE7D6A',
    color: 'black',
    fontSize: 18,
    borderRadius:25,
    marginTop:20
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
    backgroundColor: 'white',
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
    padding:4,
    marginBottom:5
  },
  headingText1: {
    fontSize: 15,
    fontWeight: '700',
    width: '50%',
  },
  headingText3: {
    fontSize: 15,
    fontWeight: '700',
    width: '100%',
    backgroundColor: '#FE7D6A',
    // borderTopWidth:2,
    borderWidth:2,
    borderColor:'gray',
    padding:3,
    alignSelf:"center",
    width: Dimensions.get('window').width,
    marginLeft:30,
    height: Dimensions.get('window').height - 710,
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
