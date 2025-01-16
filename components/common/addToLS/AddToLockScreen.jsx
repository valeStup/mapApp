import React, { useState } from 'react' ;
import styles from './addToLS.style' ;
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

const AddToLockScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Acces <Text style={styles.highlight}>QM-quick</Text> anywhere</Text>
            <TouchableOpacity style={[styles.btn, styles.green]}><Text style={styles.btnText}>add to Lockscreen</Text></TouchableOpacity>
         </View>
    )
}
export default AddToLockScreen ;