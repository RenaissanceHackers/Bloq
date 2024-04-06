import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyles } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import { SCREEN_HEIGHT } from '@/Utils/common'
import TwoTabComponent from '@/Components/TwoTabComponent'
import { FlatList } from 'react-native-gesture-handler'
import GroupMember from 'assets/data/member'
import SingleMemberCard from './Containers/Components/SingleMemberCard'
import { PlaceholderScreen } from '../PlaceholderScreen'

const ManagementScreen = () => {
    const [showTabs1or2, setShowTabs1or2] = useState(true);
    return (
        <View style={CommonStyles.baseFrame}>
            <View style={{ alignSelf: "flex-start", marginLeft: 20 }}>
                <BackButton text={"Group"} />
            </View>
            <View style={[CommonStyles.frame629428, { height: SCREEN_HEIGHT - 122 }]}>
                <TwoTabComponent textFirst={"Number"} textSecond={'Analysis'} showTabs1or2={setShowTabs1or2} showIcon={false} />
                <View style={[CommonStyles.list, { height: SCREEN_HEIGHT - 122 - 48, marginRight: 20 }]}>
                    {showTabs1or2
                        ? <FlatList data={GroupMember} renderItem={({ item }) => <SingleMemberCard item={item} />} keyExtractor={(item) => item.id.toString()} />
                        : <PlaceholderScreen />
                    }
                </View>
            </View>

        </View>
    )
}

export default ManagementScreen

const styles = StyleSheet.create({})