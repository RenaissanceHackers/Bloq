import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import BackButton from '@/Components/BackComponent'
import { Icons } from '@/Assets'
import { CommonStyles, Texts } from '@/Constants'
import Frame629350Component from '@/Components/Frame629350Component'
import theme from '@/Assets/theme'
import HeaderText from '@/Components/HeaderText'

const AppearanceScreen = () => {
    type CheckType = "Day" | "Night" | "System";
    const [check, setCheck] = React.useState<CheckType>("System")
    const firstFrame629350 = [
        {
            icon1: Icons.AppearanceSystem, text: Texts.AppearanceSystem, icon2: check === "System" ? Icons.AppearanceCheckFill : Icons.AppearanceCheck, isNew: false, onPress: () => { setCheck("System") }
        },
        {
            icon1: Icons.AppearanceDay, text: Texts.AppearanceDay, icon2: check === "Day" ? Icons.AppearanceCheckFill : Icons.AppearanceCheck, isNew: false, onPress: () => { setCheck("Day") }
        },
        {
            icon1: Icons.AppearanceNight, text: Texts.AppearanceNight, icon2: check === "Night" ? Icons.AppearanceCheckFill : Icons.AppearanceCheck, isNew: false, onPress: () => { setCheck("Night") }
        }
    ]
    return (
        <View style={CommonStyles.baseFrame}>
            <HeaderText text={Texts.AppearanceHeader} />
            <View style={styles.header}>
                <BackButton text={Texts.SettingsBack}></BackButton>
                <View style={styles.frame629452}>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Frame629350Component data={firstFrame629350} />
            </View>
        </View>
    )
}

export default AppearanceScreen

const styles = StyleSheet.create({
    header: {
        height: 24,
        width: SCREEN_WIDTH - 20 - 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerText: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        textAlign: "center"
    },
    frame629452: {
        flexDirection: "row",
        gap: 16,
        height: 24,
        justifyContent: "space-between",
    }
})