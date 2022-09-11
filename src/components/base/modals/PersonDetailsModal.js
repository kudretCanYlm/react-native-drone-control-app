import React, {
    useState,
    useEffect
} from "react"
import { memo } from "react";
import { useCallback } from "react";
import {
    Modal,
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    ScrollView,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import ImageBackgroundCard from "../carts/ImageBackgroundCard";

const PersonDetailsModal = ({
    person,
    isVisible = false,
    change = f => f
}) => {

    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);

    }, [isVisible]);

    const setVisibleFalse = useCallback(() => {
        setVisible(false)
        change()
    }, [visible])

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
        >
            <View
                style={style.modal}
            >
                <View style={style.top}>
                    <Text style={style.topText} >
                        {
                            person.name
                        }
                    </Text>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#D5D5D5"
                        onPress={setVisibleFalse}
                        style={style.btn}
                    >
                        <Text style={style.icon}>
                            <Icon name="times" size={24} />
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={style.content}>
                    <ScrollView
                        contentContainerStyle={
                            {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-around"
                            }
                        }
                        style={style.scrollView}

                    >
                        <ImageBackgroundCard
                            name={"Age"}
                            value={person.details.age}
                        />
                        <ImageBackgroundCard
                            name={"Gender"}
                            value={person.details.sex}
                        />
                        <ImageBackgroundCard
                            name={"School"}
                            value={person.details.school}
                        />
                        <ImageBackgroundCard
                            name={"Position"}
                            value={person.details.dep}
                        />
                        <ImageBackgroundCard
                            name={"Class"}
                            value={person.details.class}
                        />
                        
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default memo(PersonDetailsModal);

//style

const style = StyleSheet.create({
    modal: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff"
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 10,

        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 1,
    },
    topText: {
        fontWeight: "600",
        fontSize: 22,
        color: "#000000",
        opacity: 0.8
    },
    icon: {
        color: "#000000",
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 500,
        overflow: "hidden"
    },
    content: {
        height: Dimensions.get("screen").height * 0.84,
        display: "flex",
    },
    scrollView: {
        flex: 1,
        padding: 10,

    }
})

