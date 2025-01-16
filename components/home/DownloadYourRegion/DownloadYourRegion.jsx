import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../../common/addToLS/addToLS.style";
import { COLORS, SIZES, images } from "../../../constants";
import DownloadSvg from "../../SVGS/DownloadSvg";

const DownloadYourRegion = () => {
    return (
        <View style={[styles.container, {
        }]}>
            <View style={{flexDirection: "row"}}>
                <Text style={[styles.sectionTitle, {marginRight: SIZES.large}]}>Download Your Region</Text>
                <DownloadSvg/>
            </View>
            <View style={{
                marginTop: SIZES.large ,
                height: 300 ,
                width: 300 ,
                alignItems: 'center' ,
                justifyContent: 'center' ,
                borderRadius: '50%' ,
                overflow: 'hidden' ,
            }}>
            <ImageBackground
                source={images.bawu}
                style={{
                    flex: 1 ,
                    resizeMode: 'cover' ,
                }}
            >
                <View style={{
                    width: 300,
                    height: 300 ,
                    borderWidth: 2 ,
                    borderRadius: "50%" ,
                    borderColor: COLORS.green ,
                }}></View>
            </ImageBackground>
            </View>
        </View>
    )
} 

export default DownloadYourRegion ;