import React from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";


const DronButton = ({ text, onPress = f => f,styleAdd }) => {

    return (
        <TouchableHighlight
            style={[style.card,styleAdd]}
            activeOpacity={0.6}
            delayPressIn={0.5}
            delayPressOut={0.5}
            underlayColor="#e66465"
            onPress={onPress}
        >
            <LinearGradient
                colors={['#e66465', '#9198e5']}
                style={style.gradient}
            >
                <Text style={style.txt} >
                    {
                        text
                    }
                </Text>
            </LinearGradient>

        </TouchableHighlight>
    )

}

export default DronButton;

const style = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        backgroundColor: "#B6B6B6",
        borderRadius: 20,
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        
    },
    gradient: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "center"
    }


})