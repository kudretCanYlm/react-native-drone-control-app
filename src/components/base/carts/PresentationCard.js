import React from "react"
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions
} from "react-native"
import LinearGradient from "react-native-linear-gradient";

const width = Dimensions.get("window").width * 0.95;
const height = Dimensions.get("window").height

const PresentationCard = ({ text, img, toleft = false }) => {

    let direction = toleft ? "column" : "column";

    return (
        <LinearGradient
            colors={['#5AFF15', '#00B712']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={[style.card, { flexDirection: direction }]}>
            <Image
                source={img}
                style={style.img}
            />
            <Text
                style={style.text}
            >
                {
                    text
                }
            </Text>
        </LinearGradient>
    )
}

export default PresentationCard;

//style
const style = StyleSheet.create({
    card: {
        display: "flex",
        backgroundColor: "rgb(64, 224, 208)",
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 30,
        overflow: "hidden",
        width,

        //box shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    img: {

        height: height * 0.4,
        flexShrink: 0.1,
        marginBottom: 10,
        width
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        fontSize: 18,
        borderRadius: 10,
        color: "#ffffff",
        padding: 10,
        width,
        textAlign: "center"
    }
})