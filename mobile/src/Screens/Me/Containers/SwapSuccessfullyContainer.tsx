import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, Texts } from '@/Constants'
import TabComponent from '@/Components/TabComponent'
import CloseComponent from '@/Components/CloseComponent'
import { Icons } from '@/Assets'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const SwapSuccessfullyContainer = ({ visible, onClose }: PopUpProps) => {
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
                                You have successfully from {'\n'}
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

export default SwapSuccessfullyContainer

const styles = StyleSheet.create({})