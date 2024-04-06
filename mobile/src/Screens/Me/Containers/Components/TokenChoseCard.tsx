import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, Texts } from '@/Constants'
import { Icons } from '@/Assets'
import { SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'

type Props = {
    tokenName: string,
    text1: string,
    number?: number,
    text2?: string,
}

const TokenChoseCard = ({ tokenName, text1, number, text2 }: Props) => {
    return (
        <View style={styles.frame629494}>
            <Text style={CommonStyles.textXs_leading4_fontNormal}>{text1}</Text>
            <View style={styles.frame629488}>
                <View style={styles.frame629475}>
                    <View style={styles.tokenArea}>
                        <View style={CommonStyles.image40}></View>
                        <Text style={CommonStyles.textXs_leading4_SemiBold}>{tokenName}</Text>
                    </View>
                    <Icons.SendChevron />
                </View>
                <View style={styles.frame629474}>
                    <Text style={number ? CommonStyles.textBase_leading6_fontSemibold : CommonStyles.textXs_leading4_fontNormal}>{number ? number : text2}</Text>
                </View>
            </View>
        </View>
    )
}

export default TokenChoseCard

const styles = StyleSheet.create({
    frame629494: {
        height: 124,
        gap: 4,
        width: SCREEN_WIDTH - 20 - 20
    },
    frame629488: {
        height: 104,
        gap: 8,
        width: SCREEN_WIDTH - 20 - 20,
    },
    frame629475: {
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.global.Semi.usage.primary['--color-primary'].value,
        height: 56,
        width: SCREEN_WIDTH - 20 - 20,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        flexDirection: "row",
    },
    frame629474: {
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "#F4F4F5",
        height: 40,
        width: SCREEN_WIDTH - 20 - 20,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        alignItems: "flex-start",
    },
    tokenArea: {
        gap: 8,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})