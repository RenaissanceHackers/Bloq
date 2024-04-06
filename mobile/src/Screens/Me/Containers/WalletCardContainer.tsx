import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'
import { Icons } from '@/Assets'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SwapContainer from './SwapContainer'
import SwapNextContainer from './SwapNextContainer'
import SendContainer from './SendContainer'
import ReceiveContainer from './ReceiveContainer'
import SendNextContainer from './SendNextContainer'
import SendSuccessfullyContainer from './SendSuccessfullyContainer'
import SwapSuccessfullyContainer from './SwapSuccessfullyContainer'

const WalletCardContainer = () => {
    const [sendVisible, setSendVisible] = React.useState(false)
    const [receiveVisible, setReceiveVisible] = React.useState(false)
    const [swapVisible, setSwapVisible] = React.useState(false)
    const [nextVisible, setNextVisible] = React.useState<boolean>(false)
    const [sendSuccessfullyVisible, setSendSuccessfullyVisible] = React.useState<boolean>(false)
    const [swapNextVisible, setSwapNextVisible] = React.useState<boolean>(false)
    const [swapSuccessfullyVisible, setSwapSuccessfullyVisible] = React.useState<boolean>(false)
    const handleSend = () => {
        setSendVisible(true)
    }
    const handleReceive = () => {
        setReceiveVisible(true)
    }
    const handleSwap = () => {
        setSwapVisible(true)
    }
    return (
        <View style={styles.frame629486}>
            <View style={styles.frame629485}>
                <Text style={CommonStyles.textBase_leading6_fontNormal}>BVtA...3fTt</Text>
                <View style={styles.frame629484}>
                    <View style={styles.frame629427}>
                        <View style={styles.frame629425}>
                            <Text style={[CommonStyles.text3xl_leading9_fontSemibold, { color: "#000000" }]}>
                                $1,234
                            </Text>
                        </View>
                    </View>
                    <View style={[CommonStyles.frame629426, { width: 32, height: 32 }]}>
                        <Icons.WalletCopy />
                    </View>
                </View>
            </View>
            <View style={styles.frame629487}>
                <TouchableOpacity onPress={handleSend}>
                    <View style={styles.frame629432}>
                        <View style={styles.frame629431}>
                            <View style={styles.frame629430}>
                                <Text style={[CommonStyles.textXs_leading4_SemiBold, { color: "#FFFFFF" }]}>
                                    Send
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReceive}>
                    <View style={styles.frame629451}>
                        <View style={styles.frame629431}>
                            <View style={styles.frame629430}>
                                <Text style={[CommonStyles.textXs_leading4_SemiBold, { color: theme.global.Semi.usage.primary['--color-primary'].value }]}>
                                    Receive
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSwap}>
                    <View style={styles.frame629451}>
                        <View style={styles.frame629431}>
                            <View style={styles.frame629430}>
                                <Text style={[CommonStyles.textXs_leading4_SemiBold, { color: theme.global.Semi.usage.primary['--color-primary'].value }]}>
                                    Swap
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


            </View>
            <SwapContainer visible={swapVisible} onClose={() => setSwapVisible(false)} setNextVisibleTrue={() => setSwapNextVisible(true)} />
            <SendContainer visible={sendVisible} onClose={() => setSendVisible(false)} nextOpen={() => setNextVisible(true)} />
            <ReceiveContainer visible={receiveVisible} onClose={() => setReceiveVisible(false)} />
            <SendNextContainer visible={nextVisible} onClose={() => setNextVisible(false)} setSuccessfully={() => setSendSuccessfullyVisible(true)} />
            <SendSuccessfullyContainer visible={sendSuccessfullyVisible} onClose={() => setSendSuccessfullyVisible(false)} />
            <SwapNextContainer visible={swapNextVisible} onClose={() => setSwapNextVisible(false)} setSuccessfully={() => setSwapSuccessfullyVisible(true)} />
            <SwapSuccessfullyContainer visible={swapSuccessfullyVisible} onClose={() => setSwapSuccessfullyVisible(false)} />
        </View>
    )
}

export default WalletCardContainer

const styles = StyleSheet.create({
    frame629486: {
        marginTop: 20,
        borderRadius: 16,
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        gap: 24,
        backgroundColor: "#FFFFFF",
        height: 164,
        width: SCREEN_WIDTH - 16 - 16,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    frame629487: {
        gap: 8,
        height: 40,
        width: SCREEN_HEIGHT - 32 - 32,
        flexDirection: "row",
    },
    frame629427: {
        gap: 18,
        height: 36
    },
    frame629425: {
        height: 36
    },
    frame629485: {
        height: 60,
    },
    frame629484: {
        gap: 16,
        height: 36,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    frame629432: {
        height: 40,
        borderRadius: 16,
        gap: 8,
        width: 104,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        alignItems: "center",
        justifyContent: "center"
    },
    frame629431: {
        height: 16,
        gap: 40
    },
    frame629430: {
        height: 16,
    },

    frame629451: {
        height: 40,
        borderRadius: 16,
        gap: 8,
        width: 104,
        borderWidth: 1,
        borderColor: theme.global.Semi.usage.primary['--color-primary'].value,
        alignItems: "center",
        justifyContent: "center"
    }
})