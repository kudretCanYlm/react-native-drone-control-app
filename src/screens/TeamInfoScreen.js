import {
    View,
    StyleSheet,
    Dimensions
} from "react-native"
import React, {
    useEffect,
} from "react";
import {
    useSelector,
    useDispatch,
    connect
} from "react-redux"
import {
    GET_ALL
} from "../redux/actions/PersonActions"
import CardSlider from "../components/base/sliders/CardSlider";

const TeamInfoScreen = ({ navigation }) => {

    const personReducer = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_ALL })
    }, [])

    return (
        <View style={style.screen}>
            <CardSlider people={personReducer} />
        </View>
    )
}

export default connect(null, { GET_ALL })(TeamInfoScreen);

//style
const style = StyleSheet.create({
    screen: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})