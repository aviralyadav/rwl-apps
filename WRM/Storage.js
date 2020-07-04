import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Pie from 'react-native-pie'

export default () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                      paddingVertical: 15,
                    //   flexDirection: 'row',
                    // width: 40,
                    //   justifyContent: 'space-between',
                }}
            >
               <Text style={styles.liveStorageText}>Live Storage of Important Dam</Text>
              <View
                
              >
                <Text
                  
                >
                  Storage Level
                </Text>
              </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        // alignItems: 'center', 
        // justifyContent: 'center', 
        // height: 1050 
    },
    liveStorageText: {
        textAlign: 'center', 
        fontSize: 20, 
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        borderColor: 'green', 
        paddingTop: 5, 
        paddingBottom: 5, 
        marginTop: 4, 
        marginBottom: 4
    },
})
