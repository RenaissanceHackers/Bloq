import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { CommonStyles, Texts } from '@/Constants'
import { Icons } from '@/Assets'
import { BottomTabs } from '@/Components'
import PopUpBottomButton from '@/Components/PopUpBottomButton'
type PopUpProps = {
    visible: boolean,
    onClose: () => void
}
const ClaimRewardContainer = ({ visible, onClose }: PopUpProps) => {

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={[CommonStyles.rectangle53, { height: 271 }]}>
                    <View style={{ alignItems: "center" }}>
                        <View style={[CommonStyles.frame629473, { justifyContent: "flex-end" }]}>
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <View style={styles.rewardTags}>
                            <Icons.CompletedCreditDown />
                            <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF" }]}>3000 Point</Text>
                        </View>
                        <View style={styles.frame629496}>
                            <View>
                                <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000", textAlign: "center" }]}>
                                    Congratulations
                                </Text>
                            </View>
                            <View>
                                <Text numberOfLines={2} style={[CommonStyles.textXs_leading4_fontNormal, { textAlign: "center", }]}>
                                    Successful claim, and the amount will be available in your wallet shortly.
                                </Text>
                            </View>
                        </View>


                    </View>
                    <TouchableOpacity onPress={onClose}>

                        <PopUpBottomButton text={"Okay"} />

                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}

export default ClaimRewardContainer

const styles = StyleSheet.create({
    rewardTags: {
        height: 32,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        width: 121,
        gap: 8,
        backgroundColor: "#F9C97C",
        borderRadius: 99,
        alignItems: "center",
        flexDirection: "row"
    },
    frame629496: {
        gap: 4,
        marginTop: 18,
        width: 300,
        height: 60
    }
})