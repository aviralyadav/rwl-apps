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
import LiveStorage2 from './LiveStorage2';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './Footer';

class GISView extends React.Component {
    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.dashboardContainer}>
                        <View style={styles.mapSection}>
                            <Map />
                        </View>
                       
                        
                        <View >
                           
                            <LiveStorage2 />
                        </View>
                        
                    </View>
                    
                </ScrollView>
                <View>
                            <Footer/>
                        </View>
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
        // alignItems: 'center',
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        borderColor: 'green', 
    }
    ,labelSection: {
        width: '60%',
        borderColor: 'green',
        borderRightWidth: 1,
        // alignItems: 'center'
        justifyContent: 'center'
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

export default GISView;
