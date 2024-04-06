import { View, StyleSheet, Text, PixelRatio } from 'react-native'
import React from 'react'

import BackButton from '@/Components/BackComponent'
import { Icons } from '@/Assets'
import { CommonStyles } from '@/Constants'
import { SCREEN_WIDTH } from '@/Utils/common'
import LineComponent from '@/Components/LineComponent'
import theme from '@/Assets/theme'

const MyContentDetailScreen = ({ route }) => {
    const { articleId } = route.params;
    const parentFontSize = 16; // 假设父元素的字体大小为 16
    const letterSpacingPercentage = 2; // 字间距百分比

    // 计算字间距
    const letterSpacing = PixelRatio.getFontScale() * parentFontSize * (letterSpacingPercentage / 100);

    return (
        <View style={CommonStyles.baseFrame}>
            <View style={styles.frame629417}>
                <BackButton text={"My content"} />
                <View style={styles.frame629433}>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>Last edit: Mar 17, 24</Text>
                    <View style={styles.icon}>
                        <Icons.MyContentSaveIcon />
                    </View>
                </View>
            </View>
            <View style={[CommonStyles.rectangle54, { marginTop: 20 }]}>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.titleArea}>
                        <Text style={CommonStyles.text2xl_leading8_fontSemibold}>Top Solana News of the Week - Jan</Text>
                    </View>
                    <View style={styles.descriptionArea}>
                        <Text style={CommonStyles.textXs_leading4_fontNormal}>Jupiter's rise to become the leading DeFi trading platform, with over 1 million monthly active users and a pivotal role in onboarding new Solana users, underscores its innovative approach and market dominance.</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <LineComponent />
                    </View>
                    <View style={styles.contentArea}>
                        <Text style={[styles.content, { letterSpacing: letterSpacing }]}>Jupiter, the premier DEX aggregator on the Solana blockchain, has firmly established itself as a pivotal player. With a mission to onboard the world into a parallel, open financial system, Jupiter offers a comprehensive trading platform that simplifies access to liquidity and diverse trading options across the Solana ecosystem.
                            {'\n'}{'\n'}Jupiter announced the launch of its $JUP token airdrop on November 2nd, setting a </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    frame629417: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SCREEN_WIDTH - 20 - 20,
        alignItems: "center"
    },
    frame629433: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    },
    titleArea: {
        width: SCREEN_WIDTH - 24 - 24,
        height: 64,
    },
    descriptionArea: {
        width: SCREEN_WIDTH - 24 - 24,
        marginTop: 4
    },
    contentArea: {
        width: SCREEN_WIDTH - 24 - 24,
        marginTop: 16
    },
    content: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18,
        color: "#3F3F46"
    }
});

export default MyContentDetailScreen
