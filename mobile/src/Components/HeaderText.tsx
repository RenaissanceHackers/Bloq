import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

const HeaderText = ({ text }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default HeaderText

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        textAlign: "center",
    },
    header: {
        position: "absolute", alignSelf: "center", height: 24
    }

})