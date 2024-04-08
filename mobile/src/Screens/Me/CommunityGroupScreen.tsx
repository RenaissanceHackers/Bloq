import { View, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CommonStyles, Texts } from '@/Constants'
import { Header, TwoTab } from '@/Components'
import theme from '@/Assets/theme'
import { FlatList } from 'react-native-gesture-handler'
import TestGroups from 'assets/data/groups'
import SingleGroupCardComponent from './Containers/Components/SingleGroupCardComponent'

import SingleMessageCardComponent from './Containers/Components/SingleMessageComponent'
import TestMessages from 'assets/data/messages'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import AspectRatio from '@/Constants/AspectRatio'
import { Icons } from '@/Assets'
import HeaderText from '@/Components/HeaderText'
import BackButton from '@/Components/BackComponent'

const CommunityGroupScreen = () => {
    const [showTab1or2, setShowTab1or2] = useState(true)
    return (
        <View style={CommonStyles.baseFrame}>
            <HeaderText text={Texts.Community} />
            <View style={{ flexDirection: "row", width: SCREEN_WIDTH - 16 - 16, justifyContent: "space-between", alignItems: "center", height: 24 }}>
                <BackButton text={Texts.MeBack} />
                <View style={styles.frame629414}>
                    <View style={
                        styles.searchContainer
                    }>
                        <Icons.SearchSmIcon // 替换成你的搜索图标路径
                        />
                        <TextInput
                            placeholder="Search"
                            style={styles.inputStyle}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.frame629428}>
                <TwoTab textFirst={Texts.CommunityTab1} textSecond={Texts.CommunityTab2} showTabs1or2={setShowTab1or2} showIcon={false} />
                <View style={styles.list}>
                    {!showTab1or2 ? <FlatList
                        data={TestGroups}
                        renderItem={({ item }) => <SingleGroupCardComponent group={item} />}
                        keyExtractor={item => item.id.toString()}
                    /> : <FlatList
                        data={TestMessages}
                        renderItem={({ item }) => <SingleMessageCardComponent message={item} />}
                        keyExtractor={item => item.id.toString()} />}
                </View>
            </View>
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
        height: SCREEN_HEIGHT - 122 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio,
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
        height: SCREEN_HEIGHT - 122 - 48 + 78 - SCREEN_HEIGHT * AspectRatio.marginTopRatio,
    },
    searchContainer: {
        minWidth: 95,
        gap: 4,
        borderRadius: 20,
        paddingBottom: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-fill'].value
    },
    inputStyle: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12, // 输入文字大小
        color: theme.global.Semi.usage.disabled['--color-disabled-text'].value
    },
    frame629414: {
        gap: 8,
        flexDirection: 'row',
    },
});

export default CommunityGroupScreen
