import React  from "react";
import { View, Text } from "react-native";
import styles from "../../common/addToLS/addToLS.style";

import AccountCircleSvg from "../../SVGS/AccountCircleSvg";
import GlockSvg from "../../SVGS/GlockSvg";
import SettingsSvg from "../../SVGS/SettingsSvg";

const AboutText = () => {
    return (
        <View>
            <Text style={styles.sectionDescription}>
                QM-Quick provides a fast solution for anyone needing Quick Acces to Directions. 
                It comes with built.in features focused on improving day-to-day activities of cyclists, runners, hikers etc.
            </Text>
        </View>
    )
}

export default AboutText ;