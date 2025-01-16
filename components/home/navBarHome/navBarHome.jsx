import React  from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import styles from "./navBarHome.style" ;

import AccountCircleSvg from "../../SVGS/AccountCircleSvg";
import GlockSvg from "../../SVGS/GlockSvg";

const NavBarHome = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity>
                <AccountCircleSvg />
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Start</Text>
            <TouchableOpacity>
                <GlockSvg />
            </TouchableOpacity>
        </View>
    )
}

export default NavBarHome ;