import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import { UserRankCard } from '@/types';
import { SCREEN_WIDTH } from '@/Utils/common';


type UserRankItemProps = {
    userRank: UserRankCard
}


function SingleUserRankComponent({ userRank }: UserRankItemProps) {

    return (
        <View style={styles.frame629419}>
            <View style={styles.frame629409}>
                <Image style={styles.userRankImage} source={{ uri: userRank.image }} />
                <View style={styles.frame629407}>
                    <View style={{ height: 24 }}>
                        <Text style={styles.userRankName}>{userRank.name}</Text>
                    </View>
                    <View style={{ height: 24 }}>
                        <Text style={styles.rankNumber}>#{userRank.rank}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SingleUserRankComponent

const styles = StyleSheet.create({
    frame629419: {
        flexDirection: "row",
        width: SCREEN_WIDTH - 6 - 6 - 10 - 10,
        height: 72,
        borderBottomWidth: 1,
        borderBottomColor: theme.global.Semi.usage.default['--color-default'].value,
        paddingTop: 16,
        paddingRight: 0,
        paddingBottom: 16,
        paddingLeft: 0,
        gap: 8,
    },
    frame629409: {
        flexDirection: "row",
        width: SCREEN_WIDTH - 6 - 6 - 10 - 10,
        alignItems: "center",
        justifyContent: "space-between",
        height: 40,
        gap: 10
    },
    userRankName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        lineHeight: 24,
        fontSize: 16,
        fontWeight: "600",
        color: "#000000"
    },
    rankNumber: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        lineHeight: 24,
        fontSize: 16,
        fontWeight: "600",
        color: "#000000"
    },
    userArea: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    userRankImage: {
        borderRadius: 44,
        width: 40,
        height: 40,
        backgroundColor: "#F4F4F5"
    },
    frame629407: {
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 0,
        paddingLeft: 0,
        justifyContent: "space-between",
        flexDirection: "row",
        height: 24,
        width: SCREEN_WIDTH - 6 - 6 - 10 - 10 - 40 - 10,
        alignItems: "center",
    }


})