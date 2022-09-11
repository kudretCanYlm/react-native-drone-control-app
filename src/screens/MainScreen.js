import 'react-native-gesture-handler';
import React, {
    useState,
    useEffect
} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
} from "react-native";
import soft from "../media/images/soft_2.jpeg"
import PresentationCard from "../components/base/carts/PresentationCard"
import SupporterCard from '../components/base/carts/SupporterCard';


const MainScreen = ({ navigation }) => {

    const scholl = "http://cdn.onlinewebfonts.com/svg/img_109318.png";

    return (
        <View
            style={style.main}
        >
            <ScrollView
                style={style.scroll}
                contentContainerStyle={{ alignItems: "center" }}
            >
                <Text
                    style={style.title}
                >
                    Test Title
                </Text>
                <PresentationCard
                    img={soft}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                />
                <Text
                    style={style.title}
                >
                    Test Title
                </Text>
                <PresentationCard
                    img={soft}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                />
                <Text
                    style={style.title}
                >
                    Test Title
                </Text>
                <PresentationCard
                    img={soft}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                    toleft
                />
                <Text
                    style={style.title}
                >
                    Test Title
                </Text>
                <SupporterCard
                    img={scholl}
                    supporter={"Test Supporter"}
                />
            </ScrollView>
        </View>
    )
}

export default MainScreen;

const style = StyleSheet.create({
    main: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: "#ffffff",

    },
    title: {
        fontSize: 25,
        color: "#252525",
        fontWeight: "600",
        marginBottom: 15,

    },
    scroll: {
        marginBottom: 70,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        display: "flex",
        flexDirection: "column",
        paddingTop: 10,

    },
    model: {
        width: 400,
        height: 300,
        borderWidth: 1,
        borderColor: "red"
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: Dimensions.get("window").width
    },
    btnText: {
        textAlign: "center",
        padding: 10,
        color: "red",
        fontSize: 18,
        fontWeight: "600",
    }
})