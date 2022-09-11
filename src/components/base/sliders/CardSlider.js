import React, {
    useState
} from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import {
    View,
    Dimensions,
    StyleSheet,
    ScrollView
} from "react-native"
import PersonCart from "../carts/PersonCard"
import PersonDetailsModal from "../modals/PersonDetailsModal"

const CardSlider = ({ people }) => {

    let [id, setId] = useState(0);
    let [visible, setVisible] = useState(false);

    const openDetails = useCallback((id) => {
        setVisible(!visible);
        setId(id)
    }, [visible, id])

    const CloseDetails = useCallback(() => {
        setVisible(!visible);
    }, [visible])

    return (
        <View
            style={style.slider}
        >

            <ScrollView
                horizontal
                style={style.scrollView}
                contentContainerStyle=
                {
                    {
                        alignItems: "flex-start",
                    }
                }
            >
                {
                    people.map((person, id) => (
                        <PersonCart
                            onPress={() => openDetails(id)}
                            person={person}
                            key={id}
                        />
                    ))
                }
            </ScrollView>

            <PersonDetailsModal
                person={people[id]}
                isVisible={visible}
                change={CloseDetails}
            />

        </View>
    )
}

export default CardSlider;

//style
const style = StyleSheet.create({
    slider: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        display: "flex",
        flexDirection: "row",
        left: 0,
        marginTop: 10,
    },
});