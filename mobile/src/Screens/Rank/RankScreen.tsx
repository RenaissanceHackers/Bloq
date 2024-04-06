import { SafeAreaView, View, StyleSheet } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import BottomTabsComponent from '@/Components/BottomTabsComponent'
import { CommonStyles, RouteName, Texts } from '@/Constants'
import MyRankCardContainer from './Containers/MyRankCardContainer'
import FlatListContainer from './Containers/FlatListContainer'
import { Header } from '@/Components'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
const RankScreen = () => {
    return (
        <View style={CommonStyles.baseFrame}>
            <Header showCard={false} text={Texts.Rank} />
            <MyRankCardContainer />
            <View style={styles.line} />
            <FlatListContainer />
            <BottomTabsComponent name={RouteName.MainRouter.Rank} />
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        width: SCREEN_WIDTH - 16 - 16,
        height: 1,
        marginTop: 16,
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-border'].value
    }
});

export default RankScreen