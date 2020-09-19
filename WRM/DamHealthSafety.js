import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
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

class DamHealthSafety extends React.Component {
  
   

    static navigationOptions = ({ navigation }) => {};
    
    render(){
        return(
            
           <View style={styles.damContainer}>
               <View>

               <Text style={{fontSize:25, textAlign:"center", color:'black',marginTop:30}}>
                   Inspection
               </Text>
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
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#fe6750',padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#fe5137'}}>
               <TouchableWithoutFeedback  onPress={() => {props.navigation.navigate('DamHealth')}}>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Dam Health Inspection</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#d75670',padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#dc6a82'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:18, textAlign:"center", color:'white'}}>Instrument Health Inspection</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#88d97b', padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#76d467'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Gate Health Inspection</Text>
               </TouchableWithoutFeedback>
               </View>
             
           </View>
           <View>
           <Footer/>
       </View>
           </View>
        
        );
    }
}


export default DamHealthSafety;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      damContainer: {
        flex: 1
    },

});
    