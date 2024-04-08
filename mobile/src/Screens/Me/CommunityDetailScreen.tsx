import { View, StyleSheet } from 'react-native'
import React from 'react'

import theme from '@/Assets/theme'

import DetailHeaderComponent from '../../Components/DetailHeaderComponent'
import DetailMainComponent from './Containers/DetailMainContainer'
import TestGroupDetail from 'assets/data/groupDetail'

import BackButton from '@/Components/BackComponent'
import { CommonStyles, Texts } from '@/Constants'
import { Icons } from '@/Assets'
import { SCREEN_WIDTH } from '@/Utils/common'

const CommunityDetailScreen = ({ route }) => {
    const { groupId } = route.params;
    return (
        <View style={CommonStyles.baseFrame}>
            <View style={styles.frame629433}>
                <BackButton text={"Back"} />
                <View style={styles.icon}>
                    <Icons.ShareIcon></Icons.ShareIcon>
                </View>
            </View>
            <DetailMainComponent detail={TestGroupDetail[0]} />
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        top: 78,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-1'].value
    },
    frame629433: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SCREEN_WIDTH - 20 - 20,
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    },


});

export default CommunityDetailScreen
