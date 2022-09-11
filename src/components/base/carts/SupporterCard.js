import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgCssUri } from "react-native-svg";

const width = Dimensions.get("window").width * 0.95;
const height = Dimensions.get("window").height;

const SupporterCard = ({ img, supporter }) => {

    return (
        <View
            style={style.card}

        >
            <SvgCssUri
                style={style.img}
                uri={img}
            />
        </View>
    )
}

export default SupporterCard;

//style

const style = StyleSheet.create({
    card: {
        backgroundColor: "#F0F0F0",
        width:width*0.99,
        height:300,
        borderRadius: 10,
        padding: 20,
        //box shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        marginBottom:40

    },
    img: {
        borderRadius: 5000,
        width: 250,
        height: 250,
        //will change
        
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        color: "#2B2B2B"
    }


})