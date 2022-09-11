import React, { useEffect, useState } from "react";
import {
    
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage"


const TotalView = () => {

    let [totalView,seTotalView]=useState(0)

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@time')
            if (value !== null) {
                return value;
            }
        } catch (e) {
            return "Error";
        }
    }

    useEffect(()=>{
        getData().then(e=>{
            if(e!=undefined)
                seTotalView(e)
        })
    },[])

    return (
        <TouchableHighlight
            style={style.card}
            activeOpacity={0.6}
            delayPressIn={0.5}
            delayPressOut={0.5}
            underlayColor="#e66465"
            onPress={() => 4}
        >
            <LinearGradient
                style={style.grid}
                colors={['#e66465', '#9198e5']}
            >
                <Text
                    style={[style.txt, { marginBottom: 10 }]}
                >
                    Watching:
                </Text>
                <Text
                    style={style.txt}
                >
                    {
                         totalView+" minutes"
                    }
                </Text>
            </LinearGradient>
        </TouchableHighlight>
    )
}

export default TotalView;

const style = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        backgroundColor: "#B6B6B6",
        borderRadius: 20,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
    },
    grid: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    txt: {
        fontSize: 20,
        color: "#FFFFFF",
    }


})