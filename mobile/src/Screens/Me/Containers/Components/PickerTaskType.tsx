import { Modal, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const PickerTaskType = ({ visible, onClose }: PopUpProps) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.frame629393}>
                <View style={{ gap: 8 }}>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>Draft</Text>
                    <View style={styles.line6}></View>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>Submitted</Text>
                    <View style={styles.line6}></View>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>Completed</Text>
                </View>
            </View>

        </Modal>
    )
}

export default PickerTaskType

const styles = StyleSheet.create({
    frame629393: {
        position: "absolute",
        zIndex: 1,
        right: 16,
        top: 146,
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 16,
        gap: 8,
        backgroundColor: "#FAFAFA",
        borderColor: "#F4F4F5",
        width: 104,
        height: 112
    },
    line6: {
        width: 68,
        height: 2,
        backgroundColor: "#E4E4E7"
    }
})