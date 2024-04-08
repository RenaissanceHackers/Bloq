import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme';
import { SCREEN_WIDTH } from '@/Utils/common';

const MyRankCardContainer = () => {
    return (
        <View style={styles.frame629432}>
            <View style={styles.frame629431}>
                <View style={styles.frame629430}>
                    <Text style={styles.textYourPoints}>Your Points</Text>
                    <Text style={styles.numberPoint}>2,751 Points</Text>
                </View>
            </View>
            <View style={styles.frame629495}>
                <View>
                    <Text style={styles.textYourPoints}>Next update</Text>
                    <Text style={styles.numberPoint}>#73</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    frame629432: {
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        gap: 16,
        width: SCREEN_WIDTH - 16 - 16,
        height: 140,
        marginTop: 20,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        borderRadius: 16,
    },
    frame629431: {
        width: SCREEN_WIDTH - 32 - 32,
        height: 48,
        gap: 40,
    },
    frame629430: {
        height: 48
    },
    frame629495: {
        width: SCREEN_WIDTH - 32 - 32,
        height: 44,
        gap: 40
    },
    textYourPoints: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    textNextUpdate: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16
    },
    textYourRank: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 16
    },
    numberPoint: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 32,
        color: "#FFFFFF",
    },
});


export default MyRankCardContainer