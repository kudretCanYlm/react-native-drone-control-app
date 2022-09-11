import React from "react"
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';


const ImageBackgroundCard = ({ name, value }) => {

    return (
        <View style={style.card}
        >
            <TouchableHighlight
                style={style.btn}
                activeOpacity={0.6}
                delayPressIn={20}
                delayPressOut={20}
                underlayColor="#dddddd"
                onPress={(x)=>x}
            >
                <LinearGradient
                    colors={['#F1F1F1', '#dddddd', "#dddddd"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={style.img}
                >
                    <Text
                        style={style.txt}
                    >
                        {
                            name
                        }
                    </Text>
                    <Text
                        style={style.txt}
                    >
                        {
                            value
                        }
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}

export default ImageBackgroundCard;

//style

const style = StyleSheet.create({

    card: {
        width: 150,
        height: 150,
        display: "flex",
        margin: 10,
        overflow: "hidden",
        borderRadius: 20,
        backgroundColor: "pink",

        shadowColor: "pink",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 7,
    },
    btn: {
        flex: 1,
        display: "flex"
    },
    img: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,

    },
    txt: {
        fontSize: 25,
        color: "#000000",
        maxWidth: 130,
        opacity: 0.7
    }

})

