import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    navBar: {
        paddingTop: SIZES.small ,
        paddingBottom: SIZES.small ,
        height: SIZES.navBar,
        width: "90%" ,
        marginLeft: "5%" ,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
})

export default styles ;