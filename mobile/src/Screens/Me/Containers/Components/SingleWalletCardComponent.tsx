import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import DefaultUserIcon from '@/Components/DefaultUserIcon'
import { CommonStyles } from '@/Constants'
import { tokenCard } from '@/types'
type Props = {
    token: tokenCard
}
const SingleWalletCardComponent = ({ token }: Props) => {
    return (
        <View style={CommonStyles.frame629419}>
            <View style={CommonStyles.frame629409}>
                <Image source={{ uri: token.image }} style={CommonStyles.image40} />
                <View style={CommonStyles.frame629407}>
                    <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000" }]}>
                        {token.name}
                    </Text>
                    <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000" }]}>
                        {token.rank.toLocaleString()}
                    </Text>
                </View>
            </View>


        </View>

    )
}

export default SingleWalletCardComponent

const styles = StyleSheet.create({

})