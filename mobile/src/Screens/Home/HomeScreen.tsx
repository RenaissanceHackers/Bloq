import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'
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
            <Image style={styles.image} source={{ uri: "https://solana.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fce0c7323a97a4d91bd0baa7490ec9139%252F3c06c6410aac457b876b3eee1625945f&w=1080&q=75" }}></Image>
            <LineComponent />
            <FlatListContainer />
            <BottomTabsComponent name={RouteName.MainRouter.Home} />
            <FlagActionComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "92%", // 容器宽度
        height: 184,
        marginTop: 12,
        borderRadius: 12,
        backgroundColor: theme.global.Semi.usage.default['--color-default-hover'].value,
    },
});

export default HomeScreen