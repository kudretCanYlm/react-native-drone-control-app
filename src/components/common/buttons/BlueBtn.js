import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    Dimensions
} from "react-native"

const BlueBtn = ({ onpress = f => f, text = "START" }) => {


    return (
        <TouchableHighlight
            style={style.btn}
            activeOpacity={0.6}
            delayPressIn={0.5}
            delayPressOut={0.5}
            underlayColor="#94FFF8"
            onPress={onpress}
        >
            <Text
                style={style.txt}
            >
                {
                    text
                }
            </Text>
        </TouchableHighlight >
    )
}

export default BlueBtn;

//style

const style = StyleSheet.create({
    btn: {
        backgroundColor: "#37FFF3",
        margin: 10,
        display: "flex",
        borderRadius: 20,
    },
    txt: {
        textAlign: "center",
        fontSize: 16,
        padding: 10,
        color: "#ffffff",
        fontWeight: "700",
        width:Dimensions.get("window").width
    }
})