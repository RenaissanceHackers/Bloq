import { Modal, StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'

import { CommonStyles, Texts } from '@/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'

import TabComponent from '@/Components/TabComponent'
import CloseComponent from '@/Components/CloseComponent'
import { TextInput } from 'react-native-gesture-handler'
import theme from '@/Assets/theme'
import PopUpBottomButton from '@/Components/PopUpBottomButton'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const FeedBackContainer = ({ visible, onClose }: PopUpProps) => {
    const handleClose = () => {
        onClose();
    };

    const defaultText = "Found an issue? Or do you have a better idea to help us improve the user experience?"
    const [text, setText] = useState(defaultText);
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle54}>
                    <View style={CommonStyles.frame629473}>
                        <TabComponent text={Texts.FeedbackTab} />
                        <CloseComponent handleClose={handleClose} />
                    </View>
                    <View style={styles.frame629482}>
                        <View style={styles.frame629481}>
                            <View style={styles.frame629479}>
                                <View style={styles.frame629475}>
                                    <TextInput
                                        onChangeText={setText}
                                        multiline={true}
                                        value={text}
                                        style={text === defaultText ? styles.defaultInput : styles.userInput}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <PopUpBottomButton text={Texts.FeedbackSave} />
                </View>

            </View>
        </Modal >
    )
}

export default FeedBackContainer

const styles = StyleSheet.create({
    frame629482: {
        justifyContent: "space-between",
        marginTop: 20,
        width: SCREEN_WIDTH - 24 - 24,
        height: SCREEN_HEIGHT - 182,
        paddingBottom: 45
    },
    frame629481: {
        width: SCREEN_WIDTH - 24 - 24,
        gap: 8,
    },
    frame629479: {
        width: SCREEN_WIDTH - 24 - 24,
        gap: 16,
        height: SCREEN_HEIGHT - 45 - 182,
        justifyContent: "space-between"
    },
    frame629475: {
        width: SCREEN_WIDTH - 24 - 24,
        minHeight: 224,
        gap: 8,
        borderRadius: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: "#F4F4F5",
    },


    userInput: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#000000"
    },
    defaultInput: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#A1A1AA"
    },

})


