import React from 'react';
import {  ScrollView,StyleSheet,Text , View,Image,TextInput, Button,TouchableWithoutFeedback,Picker } from 'react-native';
import { Container,Content} from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class NewDamChecklist2 extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: null,
      inspectionType: '',
      date: '2016-05-15',
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    return (
      
      <View style={styles.container}> 
      <Container>
      <View>

      <Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:5}}>
  Gate Inspection Detail
</Text>
</View>
    
      <ScrollView>
      <Content style={{backgroundColor: 'white',margin:5}}>
        <View >
        <Text style={styles.Text}>Q.2 : Capacity :</Text>
          <TextInput style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder=""
          underlineColorAndroid='rgba(0,0,0,0)'/>
       </View>
       <View >
        <Text style={styles.Text}>Observations :</Text>
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
                    <Picker.Item label="Select Option" value="Select Option" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React Native" value="rn" />
                  </Picker>
                  </View>
                  <View >
        <Text style={styles.Text}>Category :</Text>
          <TextInput style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Auto-populated"
          underlineColorAndroid='rgba(0,0,0,0)'/>
       </View>

       </View>
       <View style={styles.inputBox2}>
       <View style={styles.headerContent}>
       <Text style={styles.Text1}>Upload Image</Text>
       <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 115, height: 115,marginBottom:8 }}
          />
        )}
        <Button style={styles.Button3} title="Upload Image" onPress={this.handleChoosePhoto} />
      </View>
        </View>
        </View>
      <View >
        <Text style={styles.Text}>Remark :</Text>
          <TextInput multiline={true}
           numberOfLines={4}
          style={styles.inputBox1}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder="Remark"
         placeholderTextColor="grey"
          underlineColorAndroid='rgba(0,0,0,0)'/>
             
      </View>
      <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Submit
            </Text>
         </TouchableWithoutFeedback>
         
                </View>
       {/* <View style={styles.container1}>
            <Button style={styles.Button1}>          
                <Text  >Save & Next</Text>
              </Button >
              <Button   style={styles.Button2}>          
                <Text  >Cancel</Text>
              </Button > 
           </View>   */}
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
      marginTop:5,
      marginBottom:10
     
    },
    inputBox3: {
      width:"95%",
      backgroundColor:'rgba(255,255,255,0.3)',
      color:'black',
      marginLeft:10,
      borderWidth:1,
      borderColor: 'black',
      borderRadius: 10,
      marginTop:10,
      
     
    },
    
    inputBox2: {
     
      marginLeft:10,
     
      marginTop:20
     
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
      marginTop:-5,
      color:'black',
      padding:10,
      fontSize:20
    },

   Picker:{
    
    borderBottomWidth:1,
     borderColor: 'black',
     width: "100%"

   },
   buttonView: {
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingLeft: 2, paddingRight: 5, 
    paddingTop: 30, paddingBottom: 2
  },
  buttonText: {
    marginTop: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
      borderRadius: 25,
      borderColor: '#9ADF8F',
      backgroundColor:'#9ADF8F',
      fontSize:18,
      marginLeft:'2%',
      marginTop:10,
      marginBottom:30
  },
 
  buttonText1: {
    marginTop: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
      borderRadius: 25,
      backgroundColor:'#FE7D6A',
      fontSize:18,
      marginLeft:'4%',
      marginTop:20,
      marginBottom:20
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
 
});
