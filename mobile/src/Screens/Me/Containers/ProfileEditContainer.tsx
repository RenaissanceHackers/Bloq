import { Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { CommonStyles, Texts } from '@/Constants'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import LinearGradient from 'react-native-linear-gradient';
import DefaultUserIcon from '@/Components/DefaultUserIcon'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const ProfileEditContainer = ({ visible, onClose }: PopUpProps) => {
    const handleClose = () => {
        onClose();
    };
    const defaultAccountName = "@ABCD"
    const defaultDisplayName = "ABCD"
    const defaultBio = "Bio"
    const [accountNameText, setAccountNameText] = useState('@ABCD');
    const [displayNameText, setDisplayNameText] = useState('ABCD');
    const [bioText, setBioText] = useState('Bio');
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <View style={styles.rectangle56}>
                <View style={styles.rectangle54}>
                    <View style={styles.frame629473}>
                        <TabComponent text={Texts.ProfileEditTab} weight500={true} />
                        <CloseComponent handleClose={handleClose} />
                    </View>
                    <View style={styles.frame629482}>
                        <View style={styles.frame629481}>
                            <View style={styles.frame629480}>
                                <DefaultUserIcon />
                            </View>
                            <View style={styles.frame629479}>
                                <View style={styles.frame629478}>
                                    <Text style={CommonStyles.textXs_leading4_fontNormal}>
                                        {Texts.ProfileEditAccountName}
                                    </Text>
                                    <View style={styles.frame629474}>
                                        <TextInput
                                            onChangeText={setAccountNameText}
                                            value={accountNameText}
                                            style={styles.nameInput}
                                            numberOfLines={1}
                                        />
                                    </View>
                                </View>
                                <View style={styles.frame629478}>
                                    <Text style={CommonStyles.textXs_leading4_fontNormal}>
                                        {Texts.ProfileEditDisplayName}
                                    </Text>
                                    <View style={styles.frame629474}>
                                        <TextInput
                                            onChangeText={setDisplayNameText}
                                            value={displayNameText}
                                            style={styles.nameInput}
                                            numberOfLines={1}
                                        />
                                    </View>
                                </View>
                                <View style={styles.frame629477}>
                                    <Text style={CommonStyles.textXs_leading4_fontNormal}>
                                        {Texts.ProfileEditBio}
                                    </Text>
                                    <View style={styles.frame629475}>
                                        <TextInput
                                            onChangeText={setBioText}
                                            multiline={true}
                                            value={bioText}
                                            style={bioText === "Bio" ? styles.defaultBioInput : styles.bioInput}
                                        />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={styles.button}>
                            <Text style={styles.textSave}>
                                {Texts.ProfileEditSave}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default ProfileEditContainer

const styles = StyleSheet.create({
    rectangle56: {
        paddingTop: 122,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    rectangle54: {
        height: SCREEN_HEIGHT - 122,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        width: SCREEN_WIDTH
    },
    frame629473: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        width: SCREEN_WIDTH - 24 - 24,
        height: 24,
        gap: 227
    },
    frame629482: {
        justifyContent: "space-between",
        marginTop: 20,
        width: SCREEN_WIDTH - 24 - 24,
        height: SCREEN_HEIGHT - 182,
        paddingBottom: 45
    },
    frame629481: {
        width: SCREEN_WIDTH - 24 - 24,
        height: 392,
        gap: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    frame629479: {
        width: SCREEN_WIDTH - 24 - 24,
        gap: 16,
    },
    frame629478: {
        width: SCREEN_WIDTH - 24 - 24,
        height: 56,
    },
    frame629477: {
        width: SCREEN_WIDTH - 24 - 24,
        height: 160,
    },
    frame629474: {
        width: SCREEN_WIDTH - 24 - 24,
        gap: 8,
        borderRadius: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: "#F4F4F5",
    },
    frame629475: {
        height: 140,
        width: SCREEN_WIDTH - 24 - 24,
        gap: 8,
        borderRadius: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: "#F4F4F5",
    },
    button: {
        width: SCREEN_WIDTH - 24 - 24 - 8 - 8,
        height: 36,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        gap: 6,
        backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
    textSave: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "600",
        color: "#FFFFFF"
    },
    defaultBioInput: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#A1A1AA"
    },
    bioInput: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#000000"
    },
    nameInput: {
        fontFamily: theme.global.fontFamilies.poppins.value,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "400",
        color: "#000000"
    },
    frame629480: {
        width: 80,
        height: 80,
        gap: 8,
    },

})