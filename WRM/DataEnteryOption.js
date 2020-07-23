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

class DataEnteryOption extends React.Component {
  
   
    static navigationOptions = ({ navigation }) => {};
    
    render(){
        return(
            
           <View style={styles.damContainer}>
               <View>

               <Text style={{fontSize:25,  color:'black',marginTop:30}}>
                   Dam/Tank Name
               </Text>
               </View>
               <View
                style={{
                flex:1,
                backgroundColor: "white",
              flexDirection: "column",
                justifyContent: "flex-start",
                 alignItems: "stretch",
                height: 510,
                padding: 9,
                margin: 1,
                
                   }}
                         
               >
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:20,backgroundColor:'#E17F93',padding:8,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback  >
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Enter Lake Level</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:50,backgroundColor:'#FE7D6A',padding:8,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:18, textAlign:"center", color:'white'}}>Enter Rainfall</Text>
               </TouchableWithoutFeedback>
               </View>
               <View style={{ flexDirection: "column", width: "100%" ,justifyContent:"space-around",marginTop:50,backgroundColor:'#9ADF8F', padding:8,borderRadius: 10, borderWidth:2,
    borderColor: '#999999'}}>
               <TouchableWithoutFeedback>
               <Text style={{fontSize:20, textAlign:"center", color:'white'}}>Enter Evaporation</Text>
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


export default DataEnteryOption;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      damContainer: {
        flex: 1
    },

});
    