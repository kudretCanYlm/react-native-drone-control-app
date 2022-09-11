import React from "react"
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native"

const width = Dimensions.get("window").width * 0.85;
const height = Dimensions.get("window").height

const PersonCart = ({
    person,
    onPress = f => f,
    onPressIn = f => f,
    onPressOut = f => f }) => {

    return (
        <View style={style.card}>
            <Image
                source={person.img}
                resizeMode={"cover"}
                style={style.img}
            />
            <View style={style.content}>
                <Text style={style.title}>
                    {
                        person.name
                    }
                </Text>
                <Text style={style.subTitle}>
                    {
                        person.subTitle
                    }
                </Text>
                <Text style={style.about}>
                    {
                        person.about.substring(0,130) 
                    }
                </Text>
            </View>
            <View style={style.bottom}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#83FF3C"
                    onPress={onPress}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                    style={style.btn}
                >
                    <Text
                        style={style.btnText}
                    >
                        Detaylar
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default PersonCart;

//style

const style = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width,
        overflow: "hidden",
        borderRadius: 15,
        backgroundColor: "#ffffff",
        height: height * 0.86,
        margin: 10,

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
        height: height * 0.5,
        width
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,

    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        color: "#000000",
        marginBottom: 3
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 10
    },
    about: {
        fontSize: 17,
        color: "#484848"
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width
    },
    btn: {
        margin: 10,
        width: 300,
        borderRadius: 20,
        backgroundColor: "#6FFF1C",

    },
    btnText: {
        textAlign: "center",
        padding: 10,
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    }

})