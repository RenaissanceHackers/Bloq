import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, Texts } from '@/Constants'
import BottomTabsComponent from '@/Components/BottomTabsComponent'
import BackButton from '@/Components/BackComponent'
import HeaderText from '@/Components/HeaderText'
import { Icons } from '@/Assets'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import LineComponent from '@/Components/LineComponent'
import TabComponent from '@/Components/TabComponent'
import { FlatList } from 'react-native-gesture-handler'
import Token from 'assets/data/token'
import SingleWalletCardComponent from './Containers/Components/SingleWalletCardComponent'
import WalletCardContainer from './Containers/WalletCardContainer'

const WalletScreen = () => {

    return (
        <View style={CommonStyles.baseFrame}>
            <View style={CommonStyles.frame629417}>
                <BackButton text={Texts.MeWallet} />
                <View style={CommonStyles.frame629426}>
                    <Icons.WalletSetting />
                </View>
            </View>
            <WalletCardContainer />

            <LineComponent />
            <View style={[CommonStyles.frame629428, { marginTop: 16 }]}>
                <View style={[CommonStyles.tabBar, { width: 69 }]}>
                    <TabComponent text={"Token"} />
                </View>
                <View style={CommonStyles.list}>
                    <FlatList data={Token} renderItem={({ item }) => <SingleWalletCardComponent token={item} />} keyExtractor={(item, index) => index.toString()} />
                </View>

            </View>
            <BottomTabsComponent name={"Me"} />
            <HeaderText text={Texts.MeWallet} />

        </View>
    )
}

export default WalletScreen

const styles = StyleSheet.create({



})

