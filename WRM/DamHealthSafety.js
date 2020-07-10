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

class DamHealthSafety extends React.Component {
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
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#47F80A',padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Dam Health Inspection</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#F1C40F',padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:18, textAlign:"center", color:'white'}}>Instrument Health Inspection (Inspection)</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:5,backgroundColor:'#F80AA9', padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Mechanical Health Inspection</Text>
               </TouchableWithoutFeedback>
               </View>
             
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
    