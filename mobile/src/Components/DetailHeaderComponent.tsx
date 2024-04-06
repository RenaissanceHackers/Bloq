import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import { SCREEN_WIDTH } from '@/Utils/common'

const DetailHeaderComponent = ({ detailName, groupImage }) => {
    return (
        <View style={styles.frame629427}>
            <Text style={styles.textName}>{detailName}</Text>
            <View style={styles.groupImage}>
                <Image source={{ uri: groupImage }}></Image>
            </View>
        </View>
    )
}

export default DetailHeaderComponent

const styles = StyleSheet.create({
    textName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: 24,
        color: "#000000",
    },
    groupImage: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: "#D9D9D9"
    },
    frame629427: {
        width: SCREEN_WIDTH - 20 - 20,
        flexDirection: "row",
        alignItems: "center",
        top: 122,
        justifyContent: "space-between",
        height: 64,
    },
})