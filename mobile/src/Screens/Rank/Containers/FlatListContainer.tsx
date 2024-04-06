import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import Rank from 'assets/data/rank'
import SingleUserRankComponent from './Components/SingleUserRankComponent'
import { CommonStyles, Texts } from '@/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import TabComponent from '@/Components/TabComponent'
import AspectRatio from '@/Constants/AspectRatio'

export default function FlatListContainer() {
    return (
        <View style={styles.frame629428}>
            <View style={CommonStyles.tabBar}>
                <TabComponent text={Texts.RankTab} />
            </View>
            <View style={[CommonStyles.list, { height: SCREEN_HEIGHT - 306 - 83 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio - 48 }]}>
                <FlatList
                    data={Rank}
                    renderItem={({ item }) => <SingleUserRankComponent userRank={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    frame629428: {
        width: SCREEN_WIDTH - 6 - 6,
        height: SCREEN_HEIGHT - 306 - 83 + 82 - SCREEN_HEIGHT * AspectRatio.marginTopRatio,
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        marginTop: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingTop: 24,
        paddingRight: 10,
        paddingBottom: 24,
        paddingLeft: 10,
    },

    tabBar: {
        flexDirection: "row",
        alignSelf: "flex-start",
        width: 140,
        height: 24,
        gap: 4
    },
})

