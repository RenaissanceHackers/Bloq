import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonStyles, Texts } from '@/Constants'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { SCREEN_WIDTH } from '@/Utils/common'
import PopUpBottomButton from '@/Components/PopUpBottomButton'
type PopUpProps = {
    visible: boolean,
    onClose: () => void
    setSuccessfully: () => void
}
const SendNextContainer = ({ visible, onClose, setSuccessfully }: PopUpProps) => {
    const handlePress = () => {
        onClose()
        setSuccessfully()
    }
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle53}>
                    <View>
                        <View style={CommonStyles.frame629473}>
                            <TabComponent text={Texts.WalletSend} />
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <View style={styles.frame629478}>
                            <Text style={CommonStyles.textXs_leading4_fontNormal}>Send</Text>
                            <Text style={CommonStyles.textBase_leading6_fontSemibold}>0.98 SOL</Text>
                        </View>
                        <View style={styles.frame629483}>
                            <Text style={CommonStyles.textXs_leading4_fontNormal}>To</Text>
                            <Text style={CommonStyles.textBase_leading6_fontSemibold}>
                                BVtAMkq7MbYBgZAX7duEwwuBYkTSV3QkGRvJLGxY3fTt
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handlePress} >
                        <PopUpBottomButton text={"Confirm"} />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

export default SendNextContainer

const styles = StyleSheet.create({
    frame629483: {
        width: SCREEN_WIDTH - 20 - 20,
        gap: 4,
        marginTop: 20,
    },
    frame629478: {
        width: SCREEN_WIDTH - 20 - 20,
        gap: 4,
        marginTop: 16,
    },
})