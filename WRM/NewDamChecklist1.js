import React, { Component } from "react";
import { ScrollView,StyleSheet,Text , View,Image,TextInput,Picker} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class NewDamChecklist1 extends Component {  
 
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: '',
    };
  }
  
   render() {
   
// console.log('create', this.props.navigation.state.params.userDetail);
  
      return (
   
          <View style={styles.container}> 
        <Container>
        <View>

<Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:5}}>
    Dam Inspection Checklist
</Text>
</View>
      
        <ScrollView>
        <Content style={{backgroundColor: 'white',margin:5}}>
        <View >
        <Text style={styles.Text}>Dam Name :</Text>
          <TextInput style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Enter Dam Name"
          underlineColorAndroid='rgba(0,0,0,0)'/>
       </View>
       <View >
        <Text style={styles.Text}>Inspection Type :</Text>
        <View
                
                  style={{
                      width: "95%",
                      // height: '23%',
                      padding:3,
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
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                  </View>

       </View>
        <View >
        <Text style={styles.Text}>Date of Inspection</Text>
        <DatePicker
                  
                  style={{width: '100%', }}
                  date={this.state.date}
                  mode="date"
                  placeholder="Select inspection date"
                  format="YYYY-MM-DD"
                  minDate="1990-05-01"
                  maxDate="2090-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      // marginLeft: 10,
                      marginHorizontal: 12,
                      borderColor: 'black',
                      borderWidth:1,
                      borderRadius: 10,
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
             
      
      <View >
        <Text style={styles.Text}>Remarks :</Text>
          <TextInput multiline={true}
           numberOfLines={4}
          style={styles.inputBox1}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder="Remark"
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>  
      {/* <View style={styles.Picker}>
        <Text style={styles.Text}>Compliance Office</Text>
        <Picker 
          selectedValue={this.state.ComplianceOffice}
          onValueChange={(itemValue) =>
            this.setState({ComplianceOffice: itemValue})
          }
        >
             <Picker.Item value="" label="select Compliance Office " />
          <Picker.Item value="Deputy Engineer,Upper Penganga Project" label="Deputy Engineer,Upper Penganga Project" />
          <Picker.Item value="Deputy Engineer,Upper Penganga Project" label="Deputy Engineer,Upper Penganga Project" />
          <Picker.Item value="Deputy Engineer,Upper Penganga Project" label="Deputy Engineer,Upper Penganga Project" />
        </Picker>
            
         </View>
         <View style={styles.Picker}>
        <Text style={styles.Text}>Designation</Text>
        <Picker 
          selectedValue={this.state.Designation}
          onValueChange={(itemValue) =>
            this.setState({Designation: itemValue})
          }
        >
             <Picker.Item value="" label="select Project " />
          <Picker.Item value="Upper Penganga Project" label="Upper Penganga Project" />
         
        </Picker>
            
         </View> */}
         {/* <View >
        <Text style={styles.Text}>Construction Officer</Text>
          <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>  */}
      {/* <View style={styles.Picker}>
        <Text style={styles.Text}>Select Type of Work</Text>
        <Picker
          selectedValue={this.state.TypeOfWork}
          onValueChange={(itemValue) =>
            this.setState({TypeOfWork: itemValue})
          }
        >
          <Picker.Item value="" label="Select Season" />
          <Picker.Item value="2019-2020" label="2019-2020" />
          
        </Picker>
        
         </View> */}
         <View style={styles.container1}>
            <Button style={styles.Button1}>          
                <Text  >Save & Checklist</Text>
              </Button >
              <Button   style={styles.Button2}>          
                <Text  >Cancel</Text>
              </Button > 
           </View>                                  
        </Content>

        </ScrollView>

    
      </Container>
      </View >
    
      );
   }
   
} 

const styles=StyleSheet.create({
    container: {
      flex:1,
        flexDirection: "column",
        justifyContent: "space-around", 
        width: '100%',
        backgroundColor:'#455a64',
        marginTop:10
       
    },
    inputBox: {
        width:"95%",
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'black',
        marginLeft:10,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 10
       
      },
      inputBox1: {
        width:"95%",
      //  padding:40,
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'black',
        marginLeft:10,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 10
       
      },

      Text:{
        color:'black',
        padding:10,
        fontSize:20
      },

     Picker:{
      
      borderBottomWidth:1,
       borderColor: 'black',
       width: "100%"

     },
     Button1:{
      padding:50,
      margin:5,
      borderRadius: 25,
      backgroundColor:'#9ADF8F',
      fontSize:70,
      marginLeft:'8%',
      marginTop:40,
      marginBottom:20
     
    },
    Button2:{
      padding:40,
      margin:5,
      borderRadius: 25,
      backgroundColor:'#FE7D6A',
      fontSize:50,
      marginRight:'13%',
      marginTop:40,
      marginBottom:20

     
    },
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
     
  });