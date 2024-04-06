import { StyleSheet, Text, Image, View, Modal, Animated, ModalBaseProps, ModalProps, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import TabComponent from '@/Components/TabComponent'
import { Texts } from '@/Constants'

import CommentBottomComponent from './Containers/Components/CommentBottomComponent'
import TestComments from 'assets/data/comments'
import SingleCommentContainer from './Containers/SingleCommentContainer'
import CloseComponent from '@/Components/CloseComponent'

type PopUpProps = {
    visible: boolean,
    onClose: () => void
}

const CommentScreen = ({ visible, onClose }: PopUpProps) => {
    const handleClose = () => {
        onClose();
    };
    return (
        <Modal
            visible={visible}
            transparent={false}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.contentArea}>
                    <View style={styles.frame629473}>
                        <TabComponent text={Texts.CommentTab} />
                        <CloseComponent handleClose={handleClose} />
                    </View>
                    <FlatList
                        data={TestComments}
                        renderItem={({ item }) => <SingleCommentContainer comment={item} />}
                        keyExtractor={item => item.id.toString()}
                    />
                    <CommentBottomComponent />
                </View>
            </View>
        </Modal>
    );
}

export default CommentScreen

const styles = StyleSheet.create({
    modalContainer: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: theme.global.Semi.usage.overlay['--color-overlay-bg'].value,
        justifyContent: "flex-end"
    },
    contentArea: {
        backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: SCREEN_HEIGHT - 122,
        alignItems: "center"
    },
    frame629473: {
        height: 24,
        marginTop: 16,
        width: SCREEN_WIDTH - 24 - 24,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

})