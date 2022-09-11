import React, {
    useState
} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import ObjectCard from '../components/base/carts/droneScreen/ObjectCard';
import TotalView from '../components/base/carts/droneScreen/TotalView';
import DronButton from '../components/common/buttons/DronButton';
import InputIpModal from '../components/base/modals/InputIpModal';


const DronScreen = ({ navigation }) => {

    const [isIpPopUpVisiable, setIpPopUpVisiable] = useState(false);

    const closeIpPopUp = () => {
        setIpPopUpVisiable(false)
    }

    const openIpPopUp = () => {
        setIpPopUpVisiable(true)
    }

    const navigateToCameraScreen = (ip) => {
        navigation.navigate("DronCamera", {
            ipNum: `http://${ip}//video`
        })
    }



    return (
        <View
            style={style.screen}
        >
            <View
                style={style.scroll}
            >

                <ObjectCard
                    modelUri={"Dron.obj"}
                    textureUri={"Diffuse.jpg"}
                />
                <View style={style.content}>
                    <TotalView />
                    <DronButton
                        text={"Drone features"}
                        onPress={() => {
                            navigation.navigate("DronTest")
                        }}
                    />

                    <DronButton
                        text={"Take Display"}
                        onPress={() => openIpPopUp()}
                    />

                    <DronButton
                        text={"Reset Data"}
                        onPress={() => 4}
                    />
                </View>

                <InputIpModal
                    isOpen={isIpPopUpVisiable}
                    closeModal={closeIpPopUp}
                    onClick={navigateToCameraScreen}
                />
            </View>

        </View>


    )
}

export default DronScreen;

//style

const style = StyleSheet.create({
    screen: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: "#ffffff",

    },
    content: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
        padding: 10

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
        borderColor: "red",
        alignItems: "center",
        display: "flex",

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
    },
    backgroundVideo: {
        width: 380,
        height: 300,
        marginBottom: 30
    },
})