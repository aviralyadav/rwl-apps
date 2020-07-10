import React, { Component } from "react";
import { ScrollView,StyleSheet,Text , View,Image,TextInput,Picker} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';


export default class UserProfile extends Component {  

   render() {
   
  
      return (
   
          <View style={styles.container}> 
        <Container>
        
        <ScrollView>
        <Content style={{backgroundColor: '#D0D3D4'}}>
        <View style={styles.Picker}>
        <Text style={styles.Text}>Construction Season</Text>
        <Picker
          selectedValue={this.state.ConstructionSeason}
          onValueChange={(itemValue) =>
            this.setState({ConstructionSeason: itemValue})
          }
        >
          <Picker.Item value="" label="Select Season" />
          <Picker.Item value="2019-2020" label="2019-2020" />
          
        </Picker>
            
         </View>
         <View style={styles.Picker}>
        <Text style={styles.Text}>Project Name</Text>
        <Picker 
          selectedValue={this.state.ProjectName}
          onValueChange={(itemValue) =>
            this.setState({ProjectName: itemValue})
          }
        >
             <Picker.Item value="" label="select Project " />
          <Picker.Item value="Upper Penganga Project" label="Upper Penganga Project" />
         
        </Picker>
            
         </View>
        <View >
        <Text style={styles.Text}>Component of Work</Text>
          <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>  
      <View >
        <Text style={styles.Text}>Type of Inspection Slip</Text>
          <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>  
      <View style={styles.Picker}>
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
            
         </View>
         <View >
        <Text style={styles.Text}>Construction Officer</Text>
          <TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View> 
      <View style={styles.Picker}>
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
        
         </View>
         <View style={styles.container1}>
            <Button style={styles.Button1}>          
                <Text  >Save</Text>
              </Button >
              <Button   style={styles.Button2}>          
                <Text  >Clear Data</Text>
              </Button > 
           </View>                                  
        </Content>

        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor:"#154360"}}> 
          <Body>
             <Text style={{fontSize:18, fontStyle:'italic' ,textAlign: "left",color:"white" }}>Mechatronics Systems Pvt.Ltd.</Text>
            </Body>
          </FooterTab>
        </Footer>
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
        backgroundColor:'#455a64'
       
    },
    inputBox: {
        width:"98%",
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'black',
        marginLeft:5,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 25
       
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
      padding:60,
      margin:5,
      borderRadius: 25,
      backgroundColor:'#3498DB',
      fontSize:40,
      marginLeft:'8%',
      marginTop:20,
      marginBottom:20
     
    },
    Button2:{
      padding:40,
      margin:5,
      borderRadius: 25,
      backgroundColor:'#3498DB',
      fontSize:40,
      marginRight:'13%',
      marginTop:20,
      marginBottom:20

     
    },
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
     
  });