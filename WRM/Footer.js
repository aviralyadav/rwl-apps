import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';

class Footer extends Component {
    render(){
        return(
            <View style={styles.footer} >
                <Text style={{fontSize:14 ,color:'white',fontStyle:'italic'}}>Designed and Developed by Mechatronics Systems Pvt. Ltd.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'#009ACD',
        justifyContent:'center',
        alignItems:"center",
        height:35
    }
});

export default Footer;