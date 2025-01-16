import React  from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import styles from "../navBarHome/navBarHome.style" ;

import SettingsSvg from "../../SVGS/SettingsSvg";
import MapSvg from "../../SVGS/mapSvg";
import HomeSvg from "../../SVGS/HomeSvg";
import { Link } from 'expo-router' ;

const NavBarBtm = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity >
                <HomeSvg />
            </TouchableOpacity>
            <TouchableOpacity>
                <MapSvg />
            </TouchableOpacity>
            <TouchableOpacity>
                <SettingsSvg />
            </TouchableOpacity>
        </View>
    )
}

export default NavBarBtm ;