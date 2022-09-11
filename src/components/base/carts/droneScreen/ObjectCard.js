import React, {
    useState,
    useCallback
} from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from "react-native"
import ModelView from "react-native-gl-model-view"
import ArrowButton from '../../../common/buttons/ArrowButton';

const ObjectCard = ({ modelUri, textureUri }) => {

    const [rotateY, setRotateY] = useState(450);

    const toLeft = useCallback(() => {

        setRotateY(rotateY - 5)

    }, [rotateY])

    const toRight = useCallback(() => {

        setRotateY(rotateY + 5)

    }, [rotateY])


    return (
        <View style={style.objectCard} >
            <ModelView
                model={{
                    uri: modelUri,
                }}
                texture={{
                    uri: textureUri,
                }}

                scale={0.17}
                translateZ={-2}
                translateY={-0.5}
                rotateZ={0}
                rotateY={rotateY}
                style={style.model}
            />
            <ArrowButton
                isToLeft
                onPress={toLeft}
                styleCustom={[style.buttonsCommon, style.buttonLeft]}
            />
            <ArrowButton
                onPress={toRight}
                styleCustom={[style.buttonsCommon, style.buttonRight]}
            />
        </View>
    )
}

export default ObjectCard;

const style = StyleSheet.create({
    objectCard: {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 15,

        //box shadow
        shadowColor: "#EFEFEF",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.36,
        shadowRadius: 1,
        elevation: 5,
    },
    model: {
        width: Dimensions.get("window").width * 0.95,
        height: 250
    },
    buttonsCommon: {
        position: "absolute"
    },
    buttonLeft: {
        left: 100,
        bottom: 2
    },
    buttonRight: {
        right: 100,
        bottom: 2
    },


})