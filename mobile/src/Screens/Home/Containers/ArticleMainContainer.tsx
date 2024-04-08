import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Icons } from '@/Assets'
import theme from '@/Assets/theme'
import { SCREEN_WIDTH } from '@/Utils/common'
import { Texts } from '@/Constants'

const ArticleMainContainer = () => {
    return (
        <View style={styles.view}>
            <View style={styles.title}>
                <Text style={styles.textTitle} numberOfLines={2}>Top Solana News of the Week - January 22, 2023</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.textDescription} numberOfLines={3}>
                    Jupiter's rise to become the leading DeFi trading platform, with over 1 million monthly active users and a pivotal role in onboarding new Solana users, underscores its innovative approach and market dominance.
                </Text>
            </View>

            <View style={styles.frame629401WithAccept}>
                <View style={styles.frame629398}>
                    <Image style={styles.image} source={{ uri: 'https://solana.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fce0c7323a97a4d91bd0baa7490ec9139%252Fd6398d22e46f45e0bf09e452c21241f7&w=1920&q=75' }} />
                    <Text style={styles.authorName}>
                        SOLANAFLOOR
                    </Text>
                </View>
                <Text style={styles.articleDate}>
                    Mar 17,24
                </Text>
                <View style={styles.acceptButton}>
                    <Text style={styles.accept}>{Texts.ArticleAccept}</Text>
                    <Icons.ChevronRightIcon />
                </View>
            </View>
            <View style={styles.line}></View>
            <ScrollView style={styles.content}>
                <Text style={styles.textContent} numberOfLines={undefined} lineBreakMode="head">
                    Jupiter, the premier DEX aggregator on the Solana blockchain, has firmly established itself as a pivotal player. With a mission to onboard the world into a parallel, open financial system, Jupiter offers a comprehensive trading platform that simplifies access to liquidity and diverse trading options across the Solana ecosystem.{"\n"}
                    {"\n"}
                    Jupiter announced the launch of its $JUP token airdrop on November 2nd, setting a new precedent for token distribution in the DeFi space. The airdrop is Scheduled for release in less than 3 hours. It aims to distribute 1 billion $JUP tokens to the Solana community, reinforcing Jupiter's commitment to fostering inclusivity and participation within its ecosystem. Approximately 955,000 wallets that interacted with Jupiter's platform before the announcement date are eligible to claim the airdrop, marking a significant milestone in the platform's journey toward creating a more democratized DeFi environment.{"\n"}
                    {"\n"}
                    Jupiter's dominance as the top DeFi trading platform is highlighted by its impressive monthly active users (MAU), with 1M unique wallets surpassing industry giants like Uniswap and PancakeSwap. This reflects Jupiter's widespread appeal and effectiveness in offering a user-friendly interface, competitive rates, and a secure trading environment. Moreover, Jupiter has become a key onboarding tool for new users on Solana, contributing to the blockchain's growth. In just the second week of December, Solana witnessed a 133% increase in new active wallets, underlining Jupiter's pivotal role in attracting and engaging a vibrant and growing community of traders.{"\n"}
                    {"\n"}
                    Jupiter's remarkable journey from 10th to second place on the Top DeFi Platforms by volume leaderboard within months highlights its rapid growth in decentralized finance. Jupiter outpaced Uniswap in trading volumes multiple times over the past two months; this demonstrates not only its robust growth but also its strong potential to emerge as the number one DeFi platform by volume, signaling a significant shift in the competitive landscape.{"\n"}
                    {"\n"}
                    At the core of Jupiter's unparalleled growth is its commanding grip on trading volumes within the Solana ecosystem. Capturing 80% of organic volume and 65% of all volume, Jupiter not only serves as the main avenue for decentralized exchanges but also as the primary hub for traders seeking liquidity and diversity. This significant share of the market volume is a testament to Jupiter's effectiveness in providing a seamless trading experience bolstered by its deep liquidity pools and efficient order routing. Such dominance in volume not only signifies Jupiter's central role in the Solana ecosystem but also reflects the trust and reliability it has cultivated among its users.{"\n"}
                    {"\n"}
                    Launched concurrently with the announcement of the $JUP airdrop on November 2nd, Jupiter's perpetual trading platform has experienced remarkable growth over the past three months, swiftly becoming a leading platform in the DeFi space for perpetual trades. Achieving a total trading volume of $1.4 billion in this short timeframe underscores the platform's rapid success and highlights Jupiter's innovative approach to DeFi trading.{"\n"}
                    {"\n"}
                    As Jupiter advances in the DeFi arena, the founder's commitment, expressed just before the $JUP launch, encapsulates its mission: "I fully intend to use $JUP to drive as many users as possible into the Solana ecosystem." This ambition highlights Jupiter's role as a gateway to Solana's diverse offerings and underscores its commitment to the ecosystem's growth and success. Jupiter's strategic efforts pave the way for a future where it remains a key player in DeFi, promoting a broader digital economy.{"\n"}
                </Text>
            </ScrollView>
        </View>
    )
}

export default ArticleMainContainer

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
    },
    textTitle: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 32,
        color: theme.global.Semi.usage.text['--color-text-0'].value
    },
    title: {
        width: SCREEN_WIDTH - 24 - 24,
        height: 64,
        marginTop: 20,
    },
    description: {
        width: SCREEN_WIDTH - 24 - 24 - 27,
        height: 48,
        marginRight: 27,
    },
    textDescription: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    frame629401WithAccept: {
        height: 24,
        width: SCREEN_WIDTH - 24 - 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16
    },
    frame629398: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 24,
        gap: 8
    },
    authorName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        backgroundColor: theme.global.Semi.usage.fill['--color-fill-0'].value
    },
    articleDate: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-2'].value
    },
    acceptButton: {
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        paddingTop: 8,
        paddingRight: 12,
        paddingBottom: 8,
        paddingLeft: 20,
        borderRadius: 999,
        gap: 8,
        width: 100,
        height: 32,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    accept: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.white['--color-white'].value
    },
    line: {
        height: 1,
        width: SCREEN_WIDTH - 16 - 16,
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-border'].value,
        marginTop: 16,
    },
    textContent: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-1'].value,
    },
    content: {
        width: SCREEN_WIDTH - 24 - 24,
        marginTop: 16,
    }
})