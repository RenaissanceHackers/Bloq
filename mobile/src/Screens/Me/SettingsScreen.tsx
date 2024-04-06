import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import BackButton from '@/Components/BackComponent'
import { CommonStyles, Texts } from '@/Constants'
import theme from '@/Assets/theme'
import { Icons } from '@/Assets'
import Frame629350Component from '@/Components/Frame629350Component'
import { navigate } from '@/Navigators/utils'
import FeedBackScreen from './Containers/FeedBackContainer'
import HeaderText from '@/Components/HeaderText'

const SettingsScreen = () => {
    const [feedbackVisible, setFeedBackVisible] = React.useState(false)
    const firstFrame629350 = [
        {
            icon1: Icons.NotificaitonIcon, text: Texts.SettingsNotification, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/settings/notifications", params: null })
            }
        },
        {
            icon1: Icons.AppearanceIcon, text: Texts.SettingsAppearance, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                navigate({ name: "me/settings/appearance", params: null })
            }
        }

    ]
    const secondFrame629350 = [
        {
            icon1: Icons.FeedBackIcon, text: Texts.SettingsFeedback, icon2: Icons.ChevronRightBigIcon, isNew: false, onPress: () => {
                setFeedBackVisible(true)
            }
        },
        {
            icon1: Icons.SupportIcon, text: Texts.SettingsSupport, icon2: Icons.SettingsShareIcon, isNew: false,
        },
        {
            icon1: Icons.AboutIcon, text: Texts.SettingsAbout, icon2: Icons.ChevronRightBigIcon, isNew: false,
        },
    ]
    return (


        <View style={CommonStyles.baseFrame}>

            {feedbackVisible ? <HeaderText text={Texts.SettingsFeedback} /> : <HeaderText text={Texts.MeSettings} />}
            <View style={styles.header}>
                <BackButton text={Texts.MeBack}></BackButton>
            </View>
            <View style={{ marginTop: 20 }}>
                <Frame629350Component data={firstFrame629350} />
            </View>
            <View style={{ marginTop: 16 }}>
                <Frame629350Component data={secondFrame629350}></Frame629350Component>
            </View>
            <View style={styles.signOut}>
                <Text style={styles.signOutText}>Sign out</Text>
            </View>
            <FeedBackScreen visible={feedbackVisible} onClose={() => setFeedBackVisible(false)} />
        </View>


    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    view: {
        paddingTop: 78,
        height: SCREEN_HEIGHT,
        alignItems: "center",
    },
    header: {
        height: 24,
        width: SCREEN_WIDTH - 20 - 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    frame629350: {
        width: SCREEN_WIDTH - 16 - 16,
        borderRadius: 16,
        gap: 24,
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        padding: 16
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