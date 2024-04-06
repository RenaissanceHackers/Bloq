import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { CommonStyles, Texts } from '@/Constants'
import PopUpBottomButton from '@/Components/PopUpBottomButton'
import { SCREEN_WIDTH } from '@/Utils/common'
import { Icons } from '@/Assets'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const ReceiveContainer = ({ visible, onClose }: PopUpProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle54}>
                    <View style={{ alignItems: "center" }}>
                        <View style={CommonStyles.frame629473}>
                            <TabComponent text={Texts.WalletReceive} />
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <View style={styles.headerText}>
                            <Text style={[CommonStyles.textBase_leading6_fontSemibold, { textAlign: "center" }]}>
                                QR Code Payment Scan
                            </Text>
                            <Text style={[CommonStyles.textXs_leading4_fontNormal, { textAlign: "center" }]}>
                                To make a payment, simply scan the QR code with your mobile device's camera.
                            </Text>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 40 }}>
                            <Icons.DefaultQR />
                        </View>
                        <View style={styles.frame629491}>
                            <Text style={CommonStyles.textBase_leading6_fontSemibold}>Your Solana Address</Text>
                            <View style={CommonStyles.icon32}>
                                <Icons.WalletCopy />
                            </View>
                        </View>
                        <View style={styles.frame629490}>
                            <Text style={[CommonStyles.textBase_leading6_fontNormal, { textAlign: "center" }]}>
                                <Text style={{ fontWeight: "600" }}>BVtAMk</Text>
                                q7MbYBgZAX7duEwwuBYkTSV3QkGRvJLGx
                                <Text style={{ fontWeight: "600" }}>Y3fTt</Text>
                            </Text>
                        </View>
                    </View>
                    <PopUpBottomButton text={"Copy"} />
                </View>
            </View>
        </Modal>
    )
}

export default ReceiveContainer

const styles = StyleSheet.create({
    headerText: {
        marginTop: 20,
        height: 69,
        width: SCREEN_WIDTH - 33 - 33,
        justifyContent: "space-between"
    },
    frame629491: {
        gap: 4,
        height: 32,
        marginTop: 32,
        marginLeft: 22,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    frame629490: {
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
        gap: 8,
        width: SCREEN_WIDTH - 50 - 50,
        marginTop: 16,
        backgroundColor: "#F4F4F5",
        borderRadius: 16
    }
})