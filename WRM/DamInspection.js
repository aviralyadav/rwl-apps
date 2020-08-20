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
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:8,backgroundColor:'#FE7D6A',padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#fe5137'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Dashboard</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:8,backgroundColor:'#9ADF8F',padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#76d467'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:18, textAlign:"center", color:'white'}}>Dam Safety (Inspection)</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:8,backgroundColor:'#E17F93', padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#dc6a82'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Dam Storage</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:8,backgroundColor:'#F1C40F', padding:18,borderRadius: 10, borderWidth:2,
    borderColor: '#dab10d'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Food Management</Text>
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


export default DamInspection;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      damContainer: {
        flex: 1
    },

});
    