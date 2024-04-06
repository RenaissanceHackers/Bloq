import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BottomTabsComponent from '@/Components/BottomTabsComponent'
import { CommonStyles, RouteName, Texts } from '@/Constants'
import { Header, TwoTab } from '@/Components'
import theme from '@/Assets/theme'
import { FlatList } from 'react-native-gesture-handler'
import TestGroups from 'assets/data/groups'
import SingleGroupCardComponent from './Containers/Components/SingleGroupCardComponent'
import { PlaceholderScreen } from '../PlaceholderScreen'
import SingleMessageCardComponent from './Containers/Components/SingleMessageComponent'
import TestMessages from 'assets/data/messages'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import AspectRatio from '@/Constants/AspectRatio'

const GroupScreen = () => {
    const [showTab1or2, setShowTab1or2] = useState(true)
    return (
        <View style={CommonStyles.baseFrame}>
            <Header text={Texts.Community} showCard={false} />
            <View style={styles.frame629428}>
                <TwoTab textFirst={Texts.CommunityTab1} textSecond={Texts.CommunityTab2} showTabs1or2={setShowTab1or2} showIcon={false} />
                <View style={styles.list}>
                    {showTab1or2 ? <FlatList
                        data={TestGroups}
                        renderItem={({ item }) => <SingleGroupCardComponent group={item} />}
                        keyExtractor={item => item.id.toString()}
                    /> : <FlatList
                        data={TestMessages}
                        renderItem={({ item }) => <SingleMessageCardComponent message={item} />}
                        keyExtractor={item => item.id.toString()} />}
                </View>
            </View>
            <BottomTabsComponent name={RouteName.MainRouter.Community} />
        </View>




    )
}


const styles = StyleSheet.create({
    view: {
        paddingTop: 78,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-1'].value,
        height: SCREEN_HEIGHT,
    },
    frame629428: {
        height: SCREEN_HEIGHT - 122 - 83 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio,
        width: SCREEN_WIDTH - 6 - 6,
        backgroundColor: "#FFFFFF",
        paddingTop: 24,
        paddingRight: 10,
        paddingBottom: 24,
        paddingLeft: 10,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        marginTop: 12,
    },
    list: {
        flexDirection: "column",
        height: SCREEN_HEIGHT - 122 - 48 - 83 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio,
    }
});

export default GroupScreen
