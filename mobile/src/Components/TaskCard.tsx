import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'
import { TaskCardProp } from '@/types'
import { Icons } from '@/Assets'
import { navigate } from '@/Navigators/utils'

type Props = {
    taskcard: TaskCardProp
}

const TaskCard = ({ taskcard }: Props) => {
    return (
        <TouchableOpacity onPress={() => {
            navigate({ name: "taskscenter/explore/detail", params: { taskId: taskcard.id } })
        }}>
            <View style={styles.view}>
                <View style={styles.frame629434}>
                    <View style={styles.frame629328}>
                        <Image style={CommonStyles.icon24} source={{ uri: taskcard.image }} />
                        <Text style={CommonStyles.textXs_leading4_SemiBold}>{taskcard.name}</Text>
                    </View>
                </View>
                <View style={styles.frame629439}>
                    <Text style={CommonStyles.textXs_leading4_SemiBold}>{taskcard.assignment}</Text>
                    <View style={styles.frame629435}>
                        <View style={styles.rewardTags}>
                            <Icons.TaskCardStar />
                            <View style={{ width: "auto" }}>
                                <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF", flexShrink: 1 }]}>{taskcard.point} Point</Text>
                            </View>
                        </View>
                        {taskcard.token ? <View style={styles.rewardTags}>
                            <Icons.TaskCardLock />
                            <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF" }]}>{taskcard.token} Token</Text>
                        </View> : null}
                    </View>
                    <View style={CommonStyles.line10}></View>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>{taskcard.participants} Participants</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    view: {
        padding: 16,
        gap: 1,
        width: 176,
        height: "auto",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E4E4E7",
    },
    frame629434: {
        gap: 8,
        paddingBottom: 24,
        height: 48,
        width: 146,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    frame629328: {
        gap: 8,
        height: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    frame629435: {
        gap: 8,
        width: "auto",
        alignItems: "flex-start"
    },
    rewardTags: {
        gap: 8,
        backgroundColor: "#F9C97C",
        borderRadius: 12,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "auto"

    },
    frame629439: {
        gap: 8,
        width: 146
    }
})