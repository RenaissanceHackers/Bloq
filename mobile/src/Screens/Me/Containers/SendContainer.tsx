import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { CommonStyles, Texts } from '@/Constants'
import { SCREEN_WIDTH } from '@/Utils/common'

import PopUpBottomButton from '@/Components/PopUpBottomButton'
import TokenChoseCard from './Components/TokenChoseCard'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
    nextOpen: () => void
}

const SendContainer = ({ visible, onClose, nextOpen }: PopUpProps) => {
    const [text, setText] = React.useState<string>("Address")

    const handlePress = () => {
        onClose()
        nextOpen()
    }
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle54}>
                    <View>
                        <View style={CommonStyles.frame629473}>
                            <TabComponent text={Texts.WalletSend} />
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <TokenChoseCard tokenName={"SOL"} text={"Send"} number={"0.98"} />

                        <View style={styles.frame629483}>
                            <Text style={CommonStyles.textXs_leading4_fontNormal}>To</Text>
                            <View style={styles.frame629474}>
                                <TextInput
                                    onChangeText={setText}
                                    numberOfLines={1}
                                    value={text}
                                    style={CommonStyles.textXs_leading4_fontNormal}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handlePress} >
                        <PopUpBottomButton text={"Next"} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SendContainer

const styles = StyleSheet.create({


    frame629483: {
        gap: 4,
        width: SCREEN_WIDTH - 20 - 20,
        height: 56,
        marginTop: 16,
    },
    frame629474: {
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#F4F4F5",
        height: 40,
        width: SCREEN_WIDTH - 20 - 20,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        alignItems: "flex-start",

    }
})