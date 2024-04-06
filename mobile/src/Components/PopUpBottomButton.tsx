import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'

const PopUpBottomButton = ({ text }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

export default PopUpBottomButton

const styles = StyleSheet.create({
    button: {
        width: SCREEN_WIDTH - 24 - 24 - 8 - 8,
        height: 36,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        gap: 6,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        bottom: 45
    },
    text: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "600",
        color: "#FFFFFF"
    },
})