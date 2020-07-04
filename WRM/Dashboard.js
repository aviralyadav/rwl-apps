/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import MapView from 'react-native-maps';
import PieChart from './PieChart';
import Storage from './Storage';
import Map from './Map';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.dashboardContainer}>
                        <Text>Dashboard HEADER</Text>
                        <View style={styles.mapSection}>
                            <Map />
                        </View>
                        <View style={styles.storageSection}>

                        <Storage/>
                        </View>
                        
                        <View style={styles.pieChartSec}>
                            <View>
                                <Text>Number of Dam: 500</Text>
                                <Text>Inspection remaining: 40%</Text>
                            </View>
                            <PieChart />
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        // width: '100%',
        // height: '100%'
    },
    dashboardContainer: {
        flex: 1
    },
    storageSection: {
        height: 200, width: '100%'
    },
    mapSection: {
        height: 250, width: '100%'
    },
    
    pieChartSec: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // fontSize: 20, 
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        borderColor: 'green', 
        // paddingTop: 5, 
        // paddingBottom: 5, 
        // marginTop: 4, 
        // marginBottom: 4
    }
    // engine: {
    //     position: 'absolute',
    //     right: 0,
    // },
    // body: {
    //     backgroundColor: Colors.white,
    // },
    // sectionContainer: {
    //     marginTop: 32,
    //     paddingHorizontal: 24,
    // },
    // sectionTitle: {
    //     fontSize: 24,
    //     fontWeight: '600',
    //     color: Colors.black,
    // },

});

export default Dashboard;
