import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navigate } from '@/Navigators/utils'
import { Icons } from '@/Assets'
import theme from '@/Assets/theme'

import { RouteName } from '@/Constants'
import { SCREEN_WIDTH } from '@/Utils/common'

type nameProp = {
    name: string
}
const BottomTabsComponent = ({ name }: nameProp) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <TouchableOpacity onPress={() => navigate({ name: 'Home', params: undefined })}>
                    {name === RouteName.MainRouter.Home ? <Icons.HomeIconFocused /> : <Icons.HomeIcon />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate({ name: 'Rank', params: undefined })}>
                    {name === RouteName.MainRouter.Rank ? <Icons.RankIconFocused /> : <Icons.RankIcon />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate({ name: 'Community', params: undefined })}>
                    {name === RouteName.MainRouter.Community ? <Icons.CommunityIconFocused /> : <Icons.CommunityIcon />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate({ name: 'Me', params: undefined })}>
                    {name === RouteName.MainRouter.Me ? <Icons.MeIconFocused /> : <Icons.MeIcon />}
                </TouchableOpacity>
            </View >
        </View>
    )
}

export default BottomTabsComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        borderTopWidth: 1,
        borderTopColor: theme.global.Semi.usage.border['--color-border'].value,
        width: SCREEN_WIDTH,
        height: 83,
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    view: {
        flexDirection: "row",
        width: SCREEN_WIDTH,
        marginTop: 7,
        paddingTop: 8,
        paddingRight: 64,
        paddingBottom: 8,
        paddingLeft: 64,
        justifyContent: "space-between",
    }
})