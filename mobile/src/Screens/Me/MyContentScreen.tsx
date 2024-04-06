import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, RouteName, Texts } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import { TwoTab } from '@/Components'
import TestGroups from 'assets/data/groups'
import SingleArticleComponent from '@/Screens/Me/Containers/Components/SingleArticleComponent'
import TestNews from 'assets/data/news'
import SingleGroupCardComponent from '@/Screens/Me/Containers/Components/SingleGroupCardComponent'
import BottomTabsComponent from '@/Components/BottomTabsComponent'
import HeaderText from '@/Components/HeaderText'
import { SCREEN_HEIGHT } from '@/Utils/common'
import AspectRatio from '@/Constants/AspectRatio'

const MyContentScreen = () => {
    const [showTab1or2, setShowTab1or2] = React.useState(true)
    return (
        <View style={CommonStyles.baseFrame}>
            <View style={{ alignSelf: "flex-start", marginLeft: 20 }}>
                <BackButton text={"Me"} />
            </View>
            <View style={[CommonStyles.frame629428, { height: SCREEN_HEIGHT - 122 - 83 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio }]}>
                <TwoTab textFirst={'Article'} textSecond={Texts.CommunityTab2} showTabs1or2={setShowTab1or2} showIcon={false} />
                <View style={[CommonStyles.list, { height: SCREEN_HEIGHT - 122 - 83 - 48 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio }]}>
                    {showTab1or2 ? <FlatList
                        data={TestNews}
                        renderItem={({ item }) => <SingleArticleComponent article={item
                        } />}
                        keyExtractor={item => item.id.toString()}
                    /> : <FlatList
                        data={TestGroups}
                        renderItem={({ item }) => <SingleGroupCardComponent group={
                            item
                        } />}
                        keyExtractor={item => item.id.toString()} />}
                </View>
            </View>
            <BottomTabsComponent name={RouteName.MainRouter.Me} />
            <HeaderText text={"My content"} />
        </View>
    )
}

export default MyContentScreen

const styles = StyleSheet.create({})