import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Footer from './Footer';

class DamInspection extends React.Component {
    render(){
        return(
            
           <View style={styles.damContainer}>
            
               <View>

               {/* <Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:30}}>
                   Dam Safety
               </Text> */}
               </View>
               
               <View
               style={{
                flex:1,
                backgroundColor: "white",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "stretch",
                height: 510,
                padding: 9,
                margin: 1,
                
                  }}
                         
               >
                      <ScrollView>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:30,backgroundColor:'#FE7D6A',padding:5,borderRadius: 10, borderWidth:2,
    borderColor: '#fe5137'}}>
               <TouchableWithoutFeedback>

               <View style={styles.text}>
               <View  style={{ width: '35%', borderColor: "#7bb272", borderRightWidth: 1, justifyContent: "space-between"}}>
              <Image source={require('./Images/LakeLevel.png')} style={styles.image} />
              </View>
              <Text style={{fontSize:21, textAlign:"center", color:'white'}}>Enter Lake Level</Text>
            </View>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:20,backgroundColor:'#9ADF8F',padding:5,borderRadius: 10, borderWidth:2,
    borderColor: '#76d467'}}>
               <TouchableWithoutFeedback>
               <View style={styles.text1}>
               <View  style={{ width: '35%', borderColor: "#7bb272", borderRightWidth: 1, justifyContent: "space-between"}}>
              <Image source={require('./Images/Rainfall.jpg')} style={styles.image} />
              </View>
               
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Enter Rainfall</Text>
             
               </View>
              
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:20,backgroundColor:'#E17F93', padding:5,borderRadius: 10, borderWidth:2,
    borderColor: '#dc6a82'}}>
               <TouchableWithoutFeedback>
               <View style={styles.text2}>
               <View  style={{ width: '35%', borderColor: "#7bb272", borderRightWidth: 1, justifyContent: "space-between"}}>
              <Image source={require('./Images/Evaporation.jpg')} style={styles.image} />
              </View>
               <Text style={{fontSize:21, textAlign:"center", color:'white'}}>Enter Evaporation</Text>
               </View>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:20,backgroundColor:'#F1C40F', padding:5,borderRadius: 10, borderWidth:2,
    borderColor: '#dab10d'}}>
               <TouchableWithoutFeedback>
               <View style={styles.text3}>
               <View  style={{ width: '35%', borderColor: "#d8b00d", borderRightWidth: 1, justifyContent: "space-between"}}>
              <Image source={require('./Images/Drinking.png')} style={styles.image} />
              </View>
               <Text style={{fontSize:21, textAlign:"center", color:'white'}}>Enter Drinking {"\n"} & {"\n"}
                                                                              Irrigation Uses</Text>
               </View>
           </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:20,backgroundColor:'#44a6c6', padding:5,borderRadius: 10, borderWidth:2,
    borderColor: '#3899b8',marginBottom:25}}>
               <TouchableWithoutFeedback>
               <View style={styles.text3}>
               <View  style={{ width: '35%', borderColor: "#d8b00d", borderRightWidth: 1, justifyContent: "space-between"}}>
              <Image source={require('./Images/Industry.png')} style={styles.image} />
              </View>
               <Text style={{fontSize:21, textAlign:"center", color:'white'}}>Enter Industrial Uses</Text>
               </View>
           </TouchableWithoutFeedback>
               </View>
               </ScrollView>
           </View>
           {/* </ScrollView> */}
           <View>
           <Footer/>
       </View>

           </View>
        
        );
    }
}


export default DamInspection;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      damContainer: {
        flex: 1
    },

    text :{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
         width: "100%" ,
         height:85,
      //  borderWidth:2 ,
      //  borderColor: '#e4705f',
        paddingRight: 15
    
      },
      text1 :{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
         width: "100%" ,
         height:85,
      //  borderWidth:2 ,
      //  borderColor: '#7bb272',
        paddingRight: 15
       
      
      },
      text2 :{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
         width: "100%" ,
         height:85,
      //  borderWidth:2 ,
      //  borderColor:'#ca7284',
        paddingRight: 15
       
      
      },
      text3 :{
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
         width: "100%" ,
         height:85,
      //  borderWidth:2 ,
      //  borderColor: '#d8b00d',
        paddingRight: 15
       
      
      },
      
        image: {
          
          width: 70,
          height: 70,
          marginTop:17,
          marginLeft:20 ,
          marginBottom:17
      
        },
      
      
});
    