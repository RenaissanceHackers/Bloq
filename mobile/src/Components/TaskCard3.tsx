import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TaskCard3Prop } from '@/types'
import { CommonStyles } from '@/Constants'
import theme from '@/Assets/theme'


type Props = {
    taskcard3: TaskCard3Prop
    handlePress: () => void
}

const Taskscard3 = ({ taskcard3, handlePress }: Props) => {
    return (
        <View style={styles.view}>
            <View style={styles.frame629434}>
                <Text style={CommonStyles.textXs_leading4_fontNormal}>Completed: {taskcard3.date}</Text>
            </View>
            <View style={styles.frame629439}>
                <View style={styles.frame629481}>
                    <Text style={CommonStyles.textXs_leading4_SemiBold}>{taskcard3.assignment}</Text>
                </View>
                {taskcard3.completed ?
                    <View style={styles.frame629482}>
                        <View style={styles.frame629329}>
                            <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#000000" }]}>
                                You have won a reward.
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handlePress}>
                            <View style={styles.button}>
                                <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF" }]}>
                                    Claim reward
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.frame629282}>
                        <Text numberOfLines={2} style={[CommonStyles.textXs_leading4_fontNormal, { color: "#71717A" }]}>You did not won a reward.
                        </Text>
                    </View>
                }

            </View>
        </View>
    )
}

export default Taskscard3

const styles = StyleSheet.create({
    view: {
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        gap: 1,
        backgroundColor: "#FFFFFF",
        borderColor: "#E4E4E7",
        height: "auto",
        width: 178
    },
    frame629434: {
        gap: 8,
        paddingBottom: 24,
        height: 48,
        width: 146,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    frame629439: {
        gap: 8,
        height: "auto",
        width: 144
    },
    frame629481: {
        gap: 8,
        width: 144
    },
    frame629482: {
        width: 144,
        justifyContent: "space-between",
        height: 56
    },
    frame629329: {
        gap: 8,
        width: 144
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        gap: 6,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        borderRadius: 999,
        width: 114,
    },
    frame629282: {
        width: 144,
        height: "auto"
    }
})