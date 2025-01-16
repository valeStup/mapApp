import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    btn: {
        marginTop: SIZES.large ,
        marginBottom: SIZES.large ,
        width: 200,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
     },

    container: {
        marginTop: SIZES.xxLarge,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'col',
        gap: 10,
    },

    btnText: {
        fontSize: SIZES.large ,
        fontWeight: 500 ,
        color: COLORS.white ,
    },

    gradient: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    regText: {
        fontFamily: FONT.regular ,
    },
    medText: {
        fontFamily: FONT.medium ,
    },
    boldText: {
        fontFamily: FONT.bold ,
    },
    highlight: {
        fontWeight: '700',
    },
    navBar: {
        height: SIZES.navBar,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10 ,
    },

    primary: {
        backgroundColor: COLORS.primary ,
    },
    secondary: {
        backgroundColor: COLORS.secondary ,
    },
    tertiary: {
        backgroundColor: COLORS.tertiary ,
    },
    green: {
        backgroundColor: COLORS.green ,
    },
    gray: {
        backgroundColor: COLORS.gray ,
    },
    gray2: {
        backgroundColor: COLORS.gray2 ,
    },
    white: {
        backgroundColor: COLORS.white ,
    },
    lightwhite: {
        backgroundColor: COLORS.lightWhite ,
    },
}) 

export default styles ;