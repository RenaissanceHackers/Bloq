import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { CommonStyles, Texts } from '@/Constants'
import { Icons } from '@/Assets'
type PopUpProps = {
    visible: boolean,
    onClose: () => void
}
const SendSuccessfullyContainer = ({ visible, onClose }: PopUpProps) => {

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle53}>
                    <View style={{ alignItems: "center" }}>
                        <View style={CommonStyles.frame629473}>
                            <TabComponent text={Texts.WalletSend} />
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <View style={CommonStyles.frame629489}>
                            <Icons.SuccessIcon />
                        </View>
                        <View style={CommonStyles.singleText}>
                            <Text style={[CommonStyles.textBase_leading6_fontNormal, { color: "#000000", textAlign: "center" }]}>
                                You have successfully sent {'\n'}
                                <Text style={{ fontWeight: "600" }} numberOfLines={1} ellipsizeMode="middle">
                                    0.98 SOL{' '}
                                </Text>
                                to{' '}
                                <Text style={{ fontWeight: "600" }} numberOfLines={1} ellipsizeMode="middle">
                                    BVtA...fTt
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default SendSuccessfullyContainer

const styles = StyleSheet.create({})