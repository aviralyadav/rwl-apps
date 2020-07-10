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

class DamHealth extends React.Component {
    render(){
        return(
            
           <View style={styles.damContainer}>
              
                <View
               style={{
                flex:1,
                backgroundColor: "white",
                 flexDirection: "column",
                 justifyContent: "flex-start",
                 alignItems: "stretch",
                 height: 510,
                 padding: 10,
                 margin:2
                
                  }}
                         
               > 
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:15,backgroundColor:'#47F80A',padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Dam 1</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:15,backgroundColor:'#F1C40F',padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:18, textAlign:"center", color:'white'}}>Dam 2</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:15,backgroundColor:'#F80AA9', padding:20,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Tank 1</Text>
               </TouchableWithoutFeedback>
               </View>
             
           </View>
          </View>
        
        );
    }
}


export default DamHealth;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      damContainer: {
        flex: 1
    },

});
    