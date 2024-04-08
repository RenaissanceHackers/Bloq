import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import { SCREEN_WIDTH } from '@/Utils/common'
import HeaderText from '@/Components/HeaderText'
import { Icons } from '@/Assets'
import LineComponent from '@/Components/LineComponent'
import theme from '@/Assets/theme'
import { navigate } from '@/Navigators/utils'

const TaskDetailScreen = ({ route }) => {
    const { taskId } = route.params
    return (
        <View style={CommonStyles.baseFrame}>
            <HeaderText text={"Detail"} />
            <View style={{ alignItems: 'flex-start', width: SCREEN_WIDTH - 20 - 20 }}>
                <BackButton text={"Back"} />
            </View>
            <View style={[CommonStyles.rectangle54, { marginTop: 20 }]}>
                <View style={styles.frmae629330}>
                    <View style={styles.frame629308}>
                        <Text style={CommonStyles.text2xl_leading8_fontSemibold}>RenzoProtocol</Text>
                        <View style={styles.frame629326}>
                            <View style={CommonStyles.icon32}>
                                <Icons.Telegram />
                            </View>
                            <View style={CommonStyles.icon32}>
                                <Icons.Twitter />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#52525B" }]}>Renzo is a Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer. Renzo serves as the interface to the EigenLayer ecosystem by securing Actively Validated Services (AVSs) and offering a higher yield than ETH staking.</Text>
                    </View>
                    <LineComponent />
                    <View style={styles.frame629302}>
                        <View style={styles.frame629295}>
                            <View style={styles.frame629296}>
                                <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000" }]}>1.  Task Information</Text>
                            </View>
                            <View style={styles.frame629294}>
                                <View style={styles.frame629285}>
                                    <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#11181C" }]}>Write a research article on “ What are Token Extensions? ”</Text>
                                </View>
                                <View style={styles.frame629287}>
                                    <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#27272A" }]}><Text style={{ fontWeight: "600" }}>Description:</Text> The article should revolve around the concept of Token Extensions, their technical implementation, potential applications, advantages, and challenges. We expect the article to provide in-depth technical analysis while also being readable for non-professional audiences.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.frame629293}>
                            <View style={styles.frame629300}>
                                <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000" }]}>2.  Requirements</Text>
                            </View>
                            <View style={styles.frame629288}>
                                <View style={styles.frame629291}>
                                    <Text style={[CommonStyles.textBase_leading6_fontNormal, { color: "#000000" }]}>
                                        Contribution points :
                                    </Text>
                                    <Text style={[CommonStyles.textXl_leading7_fontSemibold, { color: "#17C964" }]}>
                                        1,234.00
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.frame629292}>
                            <View style={styles.frame629300}>
                                <Text style={[CommonStyles.textBase_leading6_fontSemibold, { color: "#000000" }]}>3.  Reward</Text>
                            </View>
                            <View style={styles.frame629435}>
                                <View style={styles.rewardTags}>
                                    <Icons.TaskCardStar />
                                    <View style={{ width: "auto" }}>
                                        <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF", flexShrink: 1 }]}>1000 Point</Text>
                                    </View>
                                </View>
                                <View style={styles.rewardTags}>
                                    <Icons.TaskCardLock />
                                    <Text style={[CommonStyles.textXs_leading4_fontNormal, { color: "#FFFFFF" }]}>1000 Token</Text>
                                </View>
                            </View>
                            <View style={styles.frame629288}>
                                <Text style={CommonStyles.textXs_leading4_fontNormal}>The top ten are allocated this share based on the quality of content, with specific distribution rules available for more information here.</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.twoButton}>
                        <View style={styles.buttonFirst}>
                            <Text style={[CommonStyles.textSm_leading5_fontNormal, { color: "#000000" }]}>Cancel</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate({ name: "me/mycontent/article/tools", params: null })}>
                            <View style={styles.buttonSecond}>
                                <Text style={[CommonStyles.textSm_leading5_fontSemiBold, { color: "#FFFFFF" }]}>Accept</Text>
                                <Icons.ChevronRightIcon></Icons.ChevronRightIcon>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default TaskDetailScreen

const styles = StyleSheet.create({
    frmae629330: {
        width: SCREEN_WIDTH - 24 - 24,
        gap: 8,
        marginTop: 16
    },
    frame629308: {
        width: SCREEN_WIDTH - 24 - 24,
        justifyContent: "space-between",
        height: 32,
        flexDirection: "row"
    },
    frame629326: {
        flexDirection: "row",
        gap: 8,
        height: 32,
    },
    frame629302: {
        width: SCREEN_WIDTH - 24 - 24,
        marginTop: 16,
        gap: 24
    },
    frame629295: {
        gap: 16,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629293: {
        gap: 8,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629292: {
        gap: 16,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629296: {
        height: 24,
        gap: 8
    },
    frame629294: {

    },
    frame629285: {
        gap: 4,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629287: {
        gap: 4,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629300: {
        gap: 8,
        height: 24,
        width: SCREEN_WIDTH - 24 - 24,
    },
    frame629288: {
        gap: 4,
        width: SCREEN_WIDTH - 24 - 24,

    },
    frame629291: {
        gap: 18,
        width: SCREEN_WIDTH - 24 - 24,
        flexDirection: "row",
        alignItems: "center"
    },
    frame629435: {
        width: SCREEN_WIDTH - 24 - 24,
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 8,
        height: 24,
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
    twoButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SCREEN_WIDTH - 24 - 24,
        height: 36,
        marginTop: 40
    },
    buttonFirst: {
        height: 36,
        width: 165,
        borderWidth: 1,
        borderRadius: 999,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        borderColor: "#D4D4D8",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonSecond: {
        height: 36,
        width: 165,
        borderRadius: 999,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 8

    }


})