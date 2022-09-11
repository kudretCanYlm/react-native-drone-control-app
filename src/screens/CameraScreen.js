import React, {
    useState
} from "react"
import {
    Dimensions,
    StyleSheet,
    View,
    AppState
} from "react-native"
import WebView from "react-native-webview"
import AsyncStorage from "@react-native-async-storage/async-storage"

const CameraScreen = ({ route, navigation }) => {

    const { ipNum } = route.params;

    //ilk önce geçen zamanı bul
    const [firstTime, setFirstTime] = useState(Date.now);
    const [lastTime, setLasTTime] = useState(firstTime);

    const storeData = async (value) => {


        await AsyncStorage.setItem('@time', JSON.stringify(value))
            .then(() => {
                console.log("kaydetme başarılı..");
            })

    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@time')
            if (value !== null) {
                return JSON.parse(value);
            }
        } catch (e) {
            return "hata var";
        }
    }

    //burayı bitir
    //https://react-native-async-storage.github.io/async-storage/docs/usage

    AppState.addEventListener("change", nextAppState => {


        if (nextAppState === "active") {
            //console.log("kayıtta: " + new Date(Date.now()));

        }
        else {
            setLasTTime(Date.now);
            let gap = lastTime - firstTime;
            if (gap > 0) {
                setFirstTime(Date.now);

                //depolamadan zamanı çek
                getData().then((e) => {
                    if (e == undefined) {
                        storeData(gap)
                    }
                })
            }
        }



    });



    //zamanı depolamaya ekle







    const toDronScreen = () => {
        navigation.navigate("DronMain")
    }

    return (
        <View style={style.screen} >
            <WebView
                source={{ uri: ipNum }}
                style={style.video}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onError={() => toDronScreen()}
                onHttpError={() => toDronScreen()}

            />
        </View>
    )
}

export default CameraScreen;

const style = StyleSheet.create({
    screen: {
        borderColor: "red",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        display: "flex",
    },
    video: {
        width: 660,
        borderWidth: 1,
        borderColor: "red",
        transform:
            [
                {
                    rotateZ: "90deg"
                },
                {
                    translateX: -30
                },
                {
                    translateY: 130
                }
            ]
    }
})