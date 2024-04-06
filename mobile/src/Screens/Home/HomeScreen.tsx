import { SafeAreaView, View, StyleSheet } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
import AdvertisementContainer from './Containers/AdvertisementContainer'
import FlatListContainer from './Containers/FlatListContainer'
import FlagActionComponent from './Containers/Components/FlagActionComponent'
import BottomTabsComponent from '@/Components/BottomTabsComponent'
import { CommonStyles, RouteName, Texts } from '@/Constants'
import { Header } from '@/Components'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import LineComponent from '@/Components/LineComponent'
const HomeScreen = () => {
    return (
        <View style={CommonStyles.baseFrame}>
            <Header text={Texts.HomeText} showCard={true} />
            <AdvertisementContainer />
            <LineComponent />
            <FlatListContainer />
            <BottomTabsComponent name={RouteName.MainRouter.Home} />
            <FlagActionComponent />
        </View>
    )
}

const styles = StyleSheet.create({
});

export default HomeScreen