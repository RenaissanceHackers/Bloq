import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import BackButton from '@/Components/BackComponent'
import { Icons } from '@/Assets'
import { CommonStyles, Texts } from '@/Constants'
import Frame629350Component from '@/Components/Frame629350Component'
import theme from '@/Assets/theme'
import HeaderText from '@/Components/HeaderText'

const NotificationsScreen = () => {
    const [check1, setCheck1] = React.useState(true)
    const [check2, setCheck2] = React.useState(false)
    const [check3, setCheck3] = React.useState(false)
    const [check4, setCheck4] = React.useState(true)
    const [check5, setCheck5] = React.useState(false)
    const [check6, setCheck6] = React.useState(true)
    const firstFrame629350 = [
        {
            icon1: null, text: Texts.NotificationAccept, icon2: check1 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck1(!check1) }
        },
    ]
    const secondFrame629350 = [
        {
            icon1: null, text: Texts.NotificationReply, icon2: check2 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck2(!check2) }
        },
        {
            icon1: null, text: Texts.NotificationMessages, icon2: check3 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck3(!check3) }
        },
        {
            icon1: null, text: Texts.NotificationGroupPosts, icon2: check4 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck4(!check4) }
        },
    ]
    const thirdFrame629350 = [
        {
            text1: Texts.NotificationNewTasks, text2: Texts.NotificationFollowed, icon2: check5 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck5(!check5) }
        },
        {
            text1: Texts.NotificationReware, text2: Texts.NotificationCompleted, icon2: check6 ? Icons.NotificationCheckFill : Icons.NotificationCheck, isNew: false, onPress: () => { setCheck6(!check6) }
        },
    ]
    return (
        <>
            <HeaderText text={Texts.NotificationHeader} />
            <View style={CommonStyles.baseFrame}>
                <View style={styles.header}>
                    <BackButton text={Texts.SettingsBack}></BackButton>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Frame629350Component data={firstFrame629350} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <Frame629350Component data={secondFrame629350} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={styles.frame629350}>
                        {thirdFrame629350.map((item, index) => (
                            <TouchableOpacity onPress={item.onPress} key={index}>
                                <View style={styles.frame629351}>
                                    <View style={styles.frame629483}>
                                        <View style={{ height: 24 }}>
                                            <Text style={styles.text1}>{item.text1}</Text></View>
                                        <View style={{ height: 16 }}>
                                            <Text style={styles.text2}>{item.text2}</Text>
                                        </View>
                                    </View>
                                    <item.icon2 />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </View>
        </>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    view: {
        marginTop: 78,
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

    frame629351: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 24,
        width: SCREEN_WIDTH - 16 - 16 - 16 - 16,
    },
    frame629483: {
        height: 40,
    },
    text1: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: "#000000"
    },
    text2: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#A1A1AA"
    },
    frame629350: {
        width: SCREEN_WIDTH - 16 - 16,
        borderRadius: 16,
        gap: 24,
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        padding: 16
    },
})