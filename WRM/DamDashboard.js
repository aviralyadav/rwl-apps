import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
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

export default class DamDashboard extends Component {
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: '2016-05-15',
      searchTasil: '',
      searchDis: ''
    };
  }

  updateSearch = (search) => {
    this.setState({ searchTasil: search });
  };
  updateSearchDis = (search) => {
    this.setState({ searchDis: search });
  };

  render() {
    const { searchTasil, searchDis } = this.state;
    console.log(this.state);
    return (
      <View style={styles.damCheckListContainer}>
        <View style={styles.viewArea}>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <View>
            
        
              <View>
                <View style={{flexDirection: 'row', justifyContent:"center", backgroundColor: 'yellow', alignItems: 'center', padding: 5}}>
                  <Text style={styles.headingText1}>Add Dam to View in Dashboard</Text>
                  
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.headingText3}>District:</Text>
                
                  <View style={{width: '60%',marginTop:10,marginRight:50}}>
                  <SearchBar 
                   showLoading={false}
                  
                   platform={Platform.OS}
                   clearIcon={true}
                   onChangeText={this.updateSearchDis}
                   value={searchDis}
                   onClearText={() => console.log('onClearText')}
                   placeholder='Search..'
                   cancelButtonTitle='Cancel'
                  //  containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
                   containerStyle={Platform.OS==="android"? {backgroundColor: 'white',
                    borderWidth: 1, borderRadius: 5,flex:1, justifyContent:'center', height:45}: {flex:1, justifyContent:'center', height:49} }
                  inputStyle={{height:37}}
      />
        
                </View>
                
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',}}>
                  <Text style={styles.headingText3}>Tasil:</Text>
                
                  <View style={{width: '60%',marginTop:10,marginRight:50}}>
                  <SearchBar 
                   showLoading={false}
                  
                   platform={Platform.OS}
                   clearIcon={true}
                   onChangeText={this.updateSearch}
                   value={searchTasil}
                   onClearText={() => console.log('onClearText')}
                   placeholder='Search..'
                   cancelButtonTitle='Cancel'
                  //  containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
                   containerStyle={Platform.OS==="android"? {backgroundColor: 'white',
                    borderWidth: 1, borderRadius: 5,flex:1, justifyContent:'center', height:45}: {flex:1, justifyContent:'center', height:49} }
                  inputStyle={{height:37}}
      />
        
                </View>
                
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam1</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam2</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam3</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam4</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam5</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam6</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam7</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam8</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam9</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam10</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>              
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam11</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam12</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam13</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
                </View>
                <View style={styles.textInputView}>
                  <Text style={styles.headingText2}>Dam14</Text>
                  <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
            Add
            </Text>
         </TouchableWithoutFeedback>
        
                </View>
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
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 5, paddingRight: 5, 
    paddingTop: 2, paddingBottom: 2,
  marginBottom:5},
  buttonText: {
    marginTop: 8,
    marginRight:8,
    borderWidth: 1,
    // padding: 15,
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderColor: '#9ADF8F',
    backgroundColor: '#9ADF8F',
    color: '#fff',
    fontSize: 18
  },
  textInputView: {flexDirection: 'row',
   justifyContent: 'space-between',
    alignItems: 'center',
     paddingLeft: 5,
      paddingRight: 5, paddingTop: 2, paddingBottom: 2, borderBottomWidth: 1, 
     
      borderColor: 'gray', },

     
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
    width: '45%',
  },
  headingText1: {
    fontSize: 15,
    fontWeight: '700',
    width: '65%',
  
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
  headingText2: {
    fontSize: 15,
    fontWeight: '700',
    width: '40%',
    marginLeft:25
  },
  headingText3: {
    fontSize: 20,
    fontWeight: '700',
    width: '25%',
    marginLeft:25
  },
});
