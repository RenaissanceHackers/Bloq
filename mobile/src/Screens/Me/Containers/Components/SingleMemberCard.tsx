import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'
import { MemberCard } from '@/types'
type Props = {
    item: MemberCard
}
const SingleMemberCard = ({ item }: Props) => {
    return (
        <View style={[CommonStyles.frame629419, { height: 72 }]}>
            <View style={CommonStyles.frame629409}>
                <Image style={CommonStyles.image40} source={{ uri: item.image }}></Image>
                <View style={CommonStyles.frame629407}>
                    <Text style={CommonStyles.textBase_leading6_fontSemibold}>{item.name}</Text>
                </View>
            </View>
        </View>
    )
}

export default SingleMemberCard

const styles = StyleSheet.create({})