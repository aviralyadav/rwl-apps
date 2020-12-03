import React, { Component } from "react";
import { ScrollView,StyleSheet,Text , View,Image,TextInput,Picker,TouchableWithoutFeedback,} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
// import DatePicker from 'react-native-datepicker';

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
    Instrument Inspection Details
    Instrument Name (Autopopulated)
</Text>
</View>

      
        <ScrollView>
        <Content style={{backgroundColor: 'white',margin:5}}>
      
   
      
<View >
        <Text style={styles.Text}>No of Instruments (Qty):</Text>
          <TextInput 
          //  numberOfLines={2}
          style={styles.inputBox1}
        //  onChangeText={(text) => this.setState({text})}
        //  value={this.state.text}
         placeholder=""
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>

       <View >
        <Text style={styles.Text}>Location RD/RL:</Text>
          <TextInput 
          //  numberOfLines={2}
          style={styles.inputBox1}
        //  onChangeText={(text) => this.setState({text})}
        //  value={this.state.text}
         placeholder="Location"
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>

      <View >
        <Text style={styles.Text}>No. of Functional Instruments:</Text>
          <TextInput
          //  numberOfLines={2}
          style={styles.inputBox1}
        //  onChangeText={(text) => this.setState({text})}
        //  value={this.state.text}
         placeholder=""
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>
      <View >
        <Text style={styles.Text}>No. of Non Functional Instruments:</Text>
          <TextInput 
          //  numberOfLines={2}
          style={styles.inputBox1}
        
         placeholder=""
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
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
          {/* <View style={styles.buttonView}>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Add New instrument
            </Text>
         </TouchableWithoutFeedback>
         </View> */}
         <View style={styles.container1}>
           
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText1}>
               Save 
            </Text>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText2}>
               Clear
            </Text>
         </TouchableWithoutFeedback> 
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
      Text1:{
        color:'black',
        padding:10,
        fontSize:20,
        marginRight:"50%",
        fontWeight:"bold"
      },

     Picker:{
      
      borderBottomWidth:1,
       borderColor: 'black',
       width: "100%"

     },
     buttonText1: {
      marginTop: 5,
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
   
    buttonText2: {
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
   
    buttonText: {
      marginTop: 20,
      borderWidth: 1,
      // padding: 15,
      paddingVertical: 10,
      paddingHorizontal: 100,
      borderColor: "#F5D657",
      backgroundColor: "#F5D657",
      color: 'black',
      fontSize: 18,
      borderRadius:25,
      marginRight:'1%',
      marginLeft:'1%',
      alignSelf:"center",
      justifyContent:"center",
      
      
    },
    
    container1: {
      flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 2, paddingRight: 5, 
      paddingTop: 30, paddingBottom: 2,marginBottom:20,marginTop:-20
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:20
    },
   
     
  });