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
                <Pie
                radius={60}
                innerRadius={45}
                sections={[
                  {
                    percentage: 60,
                    color: '#f00',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View
                style={styles.gauge}
              >
                <Text
                  style={styles.gaugeText}
                >
                  60%
                </Text>
              </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        // height: 1050 
    },
    gauge: {
          position: 'absolute',
            width: 135,
          height: 155,
          alignItems: 'center',
          justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 20,
    },
})
