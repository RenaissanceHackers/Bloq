import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { GroupDetail } from '@/types'
import { Texts } from '@/Constants'
import { TwoTab } from '@/Components'

import TestGroupDetail from 'assets/data/groupDetail'
import { PlaceholderScreen } from '@/Screens/PlaceholderScreen'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import SinglePostCardComponent from './Components/SinglePostCardComponent'

type DetailMainComponentProps = {
    detail: GroupDetail
}

const DetailMainComponent = ({ detail }: DetailMainComponentProps) => {
    const [showTab1or2, setShowTab1or2] = useState(true)
    return (
        <View style={styles.view}>
            <View style={styles.frame629427}>
                <View style={styles.frame629425}>
                    <Text style={styles.textName}>{detail.name}</Text>
                </View>
                <Image style={styles.groupImage} source={{ uri: detail.groupImage }}></Image>
            </View>
            <View style={styles.frame629448WithText}>
                <View style={styles.frame629448}>
                    <View style={styles.frame629447}>
                        <Text style={styles.textCreator}>
                            {Texts.DetailCreator}
                        </Text>
                        <Image style={styles.creatorImage} source={{ uri: detail.creatorImage }}></Image>
                        <Text style={styles.textCreatorName}>{detail.creator}</Text>
                    </View>
                </View>
                <Text style={styles.textFollowers}>{detail.followers} Followers</Text>
            </View>
            <View style={styles.frame629432}>
                <Text style={styles.textNotes}>{Texts.DetailNotes}</Text>
                <Text style={styles.textNotesContent}>{detail.notes}</Text>
            </View>
            <View style={styles.frame629428}>
                <TwoTab textFirst={Texts.DetailTab1} textSecond={Texts.DetailTab2} showTabs1or2={setShowTab1or2} showIcon={true} />
                <View style={styles.list}>
                    {showTab1or2 ? <FlatList
                        data={TestGroupDetail[0].posts}
                        renderItem={({ item }) => <SinglePostCardComponent post={item} />}
                        keyExtractor={item => item.id.toString()}
                    /> : <PlaceholderScreen />}
                </View>
            </View>
        </View>
    )
}

export default DetailMainComponent

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: "center",
    },
    frame629447: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        height: 114,
        width: "auto"
    },
    frame629425: {
        width: 273,
        height: 64
    },
    frame629428: {
        height: SCREEN_HEIGHT - 326,
        width: SCREEN_WIDTH - 6 - 6,
        backgroundColor: "#FFFFFF",
        paddingTop: 24,
        paddingRight: 10,
        paddingBottom: 24,
        paddingLeft: 10,
        borderRadius: 16,
        marginTop: 20
    },
    list: {
        flexDirection: "column",
        height: SCREEN_HEIGHT - 122 - 48 - 83,
    },
    frame629432: {
        marginTop: 24,
        width: SCREEN_WIDTH - 16 - 16,
        borderRadius: 16,
        padding: 16,
        gap: 8,
        height: 64,
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    frame629448WithText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 24,
        width: SCREEN_WIDTH - 20 - 20,
        marginTop: 12,
    },
    frame629448: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "auto",
        gap: 10,
        height: 24
    },
    textFollowers: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "600",
        color: "#000000",
    },
    textCreator: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "500",
        color: "#000000",
    },
    textCreatorName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "500",
        color: "#71717A",
    },
    creatorImage: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center"
    },
    textName: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: 24,
        color: "#000000",
    },
    textNotes: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "600",
        lineHeight: 16,
        fontSize: 12,
        color: "#17C964",
    },
    textNotesContent: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontWeight: "400",
        lineHeight: 16,
        fontSize: 12,
        color: "#71717A",
    },
    groupImage: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: "#D9D9D9"
    },
    frame629427: {
        width: SCREEN_WIDTH - 20 - 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
    },
})