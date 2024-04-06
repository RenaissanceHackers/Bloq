import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import theme from '@/Assets/theme'
import TestNews from 'assets/data/news'
import SingleArticleComponent from './Components/SingleArticleComponent'
import { CommonStyles, Texts } from '@/Constants'
import { TwoTab } from '@/Components'
import { PlaceholderScreen } from '@/Screens/PlaceholderScreen'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import AspectRatio from '@/Constants/AspectRatio'

export default function FlatListContainer() {
    const [showTabs1or2, setShowTabs1or2] = useState(true);
    return (
        <View style={styles.view}>
            <View style={{ alignSelf: "flex-start" }}>
                <TwoTab textFirst={Texts.HomeTab1} textSecond={Texts.HomeTab2} showTabs1or2={setShowTabs1or2} showIcon={false} />
            </View>
            <View style={[CommonStyles.list, { height: SCREEN_HEIGHT - 260 - SCREEN_HEIGHT * AspectRatio.marginTopRatio - 83 - 48 }]}>
                {showTabs1or2 ? <FlatList
                    data={TestNews}
                    renderItem={({ item }) => <SingleArticleComponent article={item} />}
                    keyExtractor={item => item.id.toString()}
                /> : <PlaceholderScreen />}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    view: {
        width: SCREEN_WIDTH - 6 - 6,
        height: SCREEN_HEIGHT - 260 - SCREEN_HEIGHT * AspectRatio.marginTopRatio - 83,
        alignItems: "center",
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        marginTop: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingTop: 24,
        paddingRight: 10,
        paddingBottom: 24,
        paddingLeft: 10,
    },
})

