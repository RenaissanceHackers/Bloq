import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import BottomTabsComponent from '@/Components/BottomTabsComponent'
import { CommonStyles, RouteName, Texts } from '@/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import { Icons } from '@/Assets'
import Frame629351Component from '@/Components/Frame629350Component'
import { navigate } from '@/Navigators/utils'

const MeScreen = () => {
    const firstFrame629350 = [
        {
            icon1: Icons.WalletIcon, text: Texts.MeWallet, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/wallet", params: null })
            }
        },
        {
            icon1: Icons.UserIcon, text: Texts.MeProfile, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/profile", params: null })
            }
        },
        {
            icon1: Icons.GridIcon, text: Texts.MeMyContent, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/mycontent/article", params: null })
            }
        },
        {
            icon1: Icons.MeCommunityIcon, text: Texts.MeCommunity, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/community/group", params: null })
            }
        }
    ]
    const secondFrame629350 = [
        {
            icon1: Icons.BoxIcon, text: Texts.MeHistory, icon2: Icons.ChevronRightBigIcon, isNew: false,
        },
        {
            icon1: Icons.SettingsIcon, text: Texts.MeSettings, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/settings", params: null })
            },
        },
        {
            icon1: Icons.ExitIcon, text: Texts.MeQuit, icon2: Icons.ChevronRightBigIcon, isNew: false,
        },
    ]
    return (
        <View style={[CommonStyles.baseFrame,]}>
            <Image style={styles.meImage} source={{
                uri: 'https://img2.baidu.com/it/u=3231431255,2365970740&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
            }}>
            </Image>
            <View style={styles.frame629425}>
                <Text style={styles.meName}>Name</Text>
                <Text style={styles.meIntroduction}>Bitcoin on Chain Data, Models, Charts and Long-Term Technical Analysis.</Text>
            </View>
            <ScrollView contentContainerStyle={{ minHeight: 500 }}>
                <View style={{ marginTop: 24 }}>
                    <Frame629351Component data={firstFrame629350} ></Frame629351Component>
                </View>
                <View style={{ marginTop: 16 }}>
                    <Frame629351Component data={secondFrame629350}></Frame629351Component>
                </View>
            </ScrollView>
            {/* SignOut 放错地方了 */}
            <BottomTabsComponent name={RouteName.MainRouter.Me} />
            <View style={styles.qrCode}>
                <Icons.QRIcon />
            </View>
        </View >

    )
}

export default MeScreen
const styles = StyleSheet.create({
    view: {
        marginTop: 78,
        height: SCREEN_HEIGHT,
        alignItems: "center",
    },
    meImage: {
        width: 80,
        height: 80,
        borderRadius: 99
    },
    frame629425: {
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
        width: SCREEN_WIDTH - 60 - 60
    },
    meName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 32,
        color: theme.global.Semi.usage.text['--color-text-0'].value,
    },
    meIntroduction: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: theme.global.Semi.usage.text['--color-text-3'].value,
        textAlign: "center",
    },
    frame629350: {
        width: SCREEN_WIDTH - 16 - 16,
        borderRadius: 16,
        gap: 24,
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        padding: 16
    },
    qrCode: {
        width: 24,
        height: 24,
        right: 16,
        borderRadius: 99,
        position: "absolute",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
    },
    signOut: {
        width: SCREEN_WIDTH - 16 - 16,
        height: 36,
        borderRadius: 999,
        borderWidth: 1,
        gap: 6,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        borderColor: "#D4D4D8",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,

    },
    signOutText: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        color: "#F31260"
    }
})

