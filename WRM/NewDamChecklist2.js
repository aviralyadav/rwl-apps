import React, { Component } from "react";
import { ScrollView,StyleSheet,Text , View,Image,TextInput,Picker} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class NewDamChecklist2 extends Component {  
 
  constructor() {
    super();
    this.state = {
      inspectionType: '',
      date: '2016-05-15',
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
        <Text style={styles.Text}>Q.1.1.1 : Section of the Dam and UpStream Slope</Text>
          <TextInput style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Description"
          underlineColorAndroid='rgba(0,0,0,0)'/>
       </View>
       <View >
         <TextInput style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Location"
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
     
       
      
         <View style={styles.container1}>
            <Button style={styles.Button1}>          
                <Text  >Save & Next</Text>
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
        borderRadius: 10,
        marginTop:5
       
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