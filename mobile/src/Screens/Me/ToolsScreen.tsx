import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles } from '@/Constants'
import BackButton from '@/Components/BackComponent'
import { Icons } from '@/Assets'
import { SCREEN_WIDTH } from '@/Utils/common'
import { TextInput } from 'react-native-gesture-handler'

const ToolsScreen = () => {
    const defaultTitle = 'Untitled'
    const defaultDescription = 'Description:'
    const defaultContent = 'Share your perspective'
    const [title, setTitle] = React.useState(defaultTitle)
    const [description, setDescription] = React.useState(defaultDescription)
    const [content, setContent] = React.useState(defaultContent)
    return (
        <View style={CommonStyles.baseFrame}>
            <View style={styles.frame629417}>
                <BackButton text={"My content"} />
                <View style={styles.frame629433}>
                    <Text style={CommonStyles.textXs_leading4_fontNormal}>Last edit: Mar 17, 24</Text>
                    <View style={styles.icon}>
                        <Icons.MyContentSaveIcon />
                    </View>
                </View>
            </View>
            <View style={[CommonStyles.rectangle54, { marginTop: 20, width: SCREEN_WIDTH - 6 - 6, alignItems: "flex-start", paddingRight: 18, paddingLeft: 18, paddingTop: 12, justifyContent: "flex-start" }]}>
                <TextInput
                    onChangeText={setTitle}
                    multiline={true}
                    value={title}
                    style={[CommonStyles.text2xl_leading8_fontSemibold, { color: title === defaultTitle ? "#D4D4D8" : "#000000" }]}
                />
                <TextInput
                    onChangeText={setDescription}
                    multiline={true}
                    value={description}
                    style={[CommonStyles.textXs_leading4_fontNormal, { color: description === defaultDescription ? "#D4D4D8" : "#000000" }]}
                />

                <View style={[CommonStyles.line10, { marginTop: 16, marginBottom: 16 }]}></View>
                <TextInput
                    onChangeText={setContent}
                    multiline={true}
                    value={content}
                    style={[CommonStyles.textXs_leading4_fontNormal, { color: content === defaultContent ? "#D4D4D8" : "#000000" }]}
                />

            </View>
        </View>
    )
}

export default ToolsScreen

const styles = StyleSheet.create({
    frame629417: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SCREEN_WIDTH - 20 - 20,
        alignItems: "center"
    },
    frame629433: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
    },

})