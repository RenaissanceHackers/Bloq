import { View, StyleSheet, Text, ListRenderItemInfo } from 'react-native'
import React from 'react'
import theme from '@/Assets/theme'

import { Colors, CommonStyles, Texts } from '@/Constants'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import BackButton from '@/Components/BackComponent'
import HeaderText from '@/Components/HeaderText'
import { Icons } from '@/Assets'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import ProfileEditContainer from './Containers/ProfileEditContainer'
import DefaultUserIcon from '@/Components/DefaultUserIcon'
import TwoTabComponent from '@/Components/TwoTabComponent'
import TestNews from 'assets/data/news'
import SingleArticleComponent from './Containers/Components/SingleArticleComponent'
const ProfileScreen = () => {
    const [feedbackVisible, setFeedBackVisible] = React.useState(false)
    const handlePress = () => {
        setFeedBackVisible(true)
    }
    const [tab, setTab] = React.useState(true)
    return (
        <View style={CommonStyles.baseFrame}>
            <HeaderText text={Texts.MeProfile} />
            <View style={CommonStyles.frame629417}>
                <BackButton text={Texts.MeBack} />
                <View style={styles.frame629452}>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={CommonStyles.frame629426}>
                            <Icons.ProfileEdit />
                        </View>
                    </TouchableOpacity>
                    <View style={CommonStyles.frame629426}>
                        <Icons.ProfileShare />
                    </View>
                </View>
            </View>
            <View style={styles.frame629427}>
                <View style={styles.frame629425}>
                    <Text style={CommonStyles.text2xl_leading8_fontSemibold}>
                        {Texts.ProfileName}
                    </Text>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>
                        Bitcoin on Chain Data, Models, Charts and Long-Term Technical Analysis.
                    </Text>
                </View>
                <DefaultUserIcon width={64} height={64} />
            </View>
            <View style={styles.frame629449}>
                <Text style={CommonStyles.textXs_leading4_SemiBold}>
                    123Followers
                </Text>
                <Text style={CommonStyles.textXs_leading4_SemiBold}>
                    123Following
                </Text>
                <Text style={CommonStyles.textXs_leading4_SemiBold}>
                    123Subscribe
                </Text>
            </View>
            <View style={styles.frame629432}>
                <View style={styles.frame629431}>
                    <View style={styles.frame629430}>
                        <Text style={[CommonStyles.textXs_leading4_SemiBold, { color: "#FFFFFF" }]}>
                            Your Points
                        </Text>
                        <Text style={[CommonStyles.textXl_leading7_fontSemibold, { color: "#FFFFFF" }]}>
                            3,456 Points
                        </Text>
                    </View>
                    <View style={styles.frame629429}>
                        <Text style={[CommonStyles.textXs_leading4_SemiBold, { color: "#FFFFFF" }]}>
                            Your Rank
                        </Text>
                        <Text style={[CommonStyles.textXl_leading7_fontSemibold, { color: "#FFFFFF" }]}>
                            #100
                        </Text>
                    </View>
                </View>
                <Icons.ProfileFile />
            </View>
            <View style={[CommonStyles.frame629428, { height: SCREEN_HEIGHT - 342 + 24 }]}>
                <TwoTabComponent textFirst={Texts.ProfileTab1} textSecond={Texts.ProfileTab2} showTabs1or2={setTab} showIcon={false} />
                <FlatList
                    data={TestNews}
                    renderItem={({ item }) => <SingleArticleComponent article={item} />}
                    keyExtractor={item => item.id.toString()}>
                </FlatList>
            </View>
            <ProfileEditContainer visible={feedbackVisible} onClose={() => setFeedBackVisible(false)} />
        </View>
    )
}

const styles = StyleSheet.create({
    frame629452: {
        height: 24,
        gap: 16,
        width: 64,
        flexDirection: "row",
    },
    frame629427: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SCREEN_WIDTH - 20 - 20,
        marginTop: 20,
    },
    frame629425: {
        justifyContent: "flex-start",
        height: 64,
        width: SCREEN_WIDTH - 20 - 20 - 64 - 16
    },
    frame629449: {
        gap: 16,
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: SCREEN_WIDTH - 20 - 20 - 64,
        marginRight: 64
    },
    frame629432: {
        width: SCREEN_WIDTH - 20 - 20,
        height: 76,
        marginTop: 24,
        padding: 16,
        borderRadius: 16,
        gap: 40,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    frame629431: {
        gap: 40,
        height: 44,
        width: 226,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    frame629429: {
        height: 44
    },
    frame629430: {
        height: 44,

    },

});

export default ProfileScreen