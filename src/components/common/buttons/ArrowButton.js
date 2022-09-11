import React, {
    useState,
    useEffect
} from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"

const ArrowButton = ({ isToLeft = false,
    iconColor = "#575757",
    onPress = f => f,
    onPressIn=f=>f,
    OnPressOut=f=>f,
    styleCustom }) => {

    return (

        <TouchableHighlight
            style={[style.btn,styleCustom]}
            activeOpacity={0.6}
            delayPressIn={0.5}
            delayPressOut={0.5}
            underlayColor="#EFEFEF"
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={OnPressOut}
        >
            {
                isToLeft ?
                    (
                        <Icon
                            color={iconColor}
                            name="left"
                            size={22} />
                    )
                    :
                    (
                        <Icon
                            color={iconColor}
                            name="right"
                            size={22} />
                    )
            }
        </TouchableHighlight>

    )

}


export default ArrowButton;

const style = StyleSheet.create({
    btn: {
        display: "flex",
        alignItems: "center",
        padding: 15,
        borderRadius: 500,
        backgroundColor: "#ffff",

        //box shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        margin:5
    }
})