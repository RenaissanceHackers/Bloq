import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons } from '@/Assets'
import theme from '@/Assets/theme'

type CloseProps = {
    handleClose: () => void
}

const CloseComponent = ({ handleClose }: CloseProps) => {
    return (
        <TouchableOpacity onPress={handleClose}>
            <View style={styles.icon}>
                <Icons.XIcon />
            </View>
        </TouchableOpacity>
    )
}

export default CloseComponent

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-1'].value,
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
    },
})