import React, {
    useEffect,
    useState
} from "react";
import {
    StyleSheet,
} from "react-native"
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';
import { TextInput } from "react-native-gesture-handler";
import DronButton from "../../common/buttons/DronButton";


const InputIpModal = ({
    isOpen = true,
    onClick = f => f,
    closeModal = f => f }) => {

    const [text, onChangeText] = useState("192.168.1.33:8080");
    const [isOpenModal, setIsOpenModal] = useState(true)

    useEffect(() => {
        setIsOpenModal(isOpen)
    }, [isOpen])

    return (

        <Dialog
            visible={isOpenModal}
            height={200}
            width={300}
            onTouchOutside={() => {
                setIsOpenModal(false);
                closeModal();
            }}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
        >
            <DialogContent
                style={style.modal}
            >
                <TextInput
                    style={style.textInput}
                    value={text}
                    placeholder={"Enter Camera Ip"}
                    onChange={(event) => onChangeText(event.nativeEvent.text)}
                />
                <DronButton
                    text={"Submit"}
                    onPress={() => {
                        onClick(text);
                        setIsOpenModal(false);
                        closeModal();
                    }}
                    styleAdd={style.btn}

                />
            </DialogContent>
        </Dialog>
    )
}

export default InputIpModal;

const style = StyleSheet.create({
    modal: {
        width: 300,
        height: 200,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    textInput: {
        borderWidth: 1,
        borderLeftColor: "#e66465",
        borderTopColor: "#e66465",
        borderBottomColor: "#9198e5",
        borderRightColor: "#9198e5",
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        width: 260
    },
    btn: {
        width: 240,
        height: 55
    }
})

