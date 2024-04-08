import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/Utils/common'
import theme from '@/Assets/theme'
import { Comment } from '@/types'
import { Texts } from '@/Constants'
import { CommentDepthGreaterThanOneComponent, CommentDepthOneComponent, CommentDepthZeroComponent } from './Components/CommentDepthComponent'
type SingleCommentComponentProps = {
    comment: Comment
}

function flattenAndSortComments(comment: Comment): Comment[] {
    const flattenedComments: Comment[] = [];

    function flatten(comment: Comment) {
        flattenedComments.push(comment);
        if (comment.replies && comment.replies.length > 0) {
            comment.replies.forEach(flatten);
        }
    }

    flatten(comment);

    // 根据replyUser和depth进行排序
    flattenedComments.sort((a, b) => {
        // 首先按照depth升序排序
        if (a.depth !== b.depth) {
            return a.depth - b.depth;
        }
        // 如果depth相同，则根据replyUser排序，没有replyUser的排在最前面
        if (!a.replyUser && b.replyUser) {
            return -1;
        } else if (a.replyUser && !b.replyUser) {
            return 1;
        } else if (a.replyUser && b.replyUser && a.replyUser !== b.replyUser) {
            return a.replyUser.localeCompare(b.replyUser);
        }
        // 如果replyUser相同，则保持原顺序
        return 0;
    });

    return flattenedComments;
}


const SingleCommentContainer = ({ comment }: SingleCommentComponentProps) => {
    const result = flattenAndSortComments(comment);

    return (
        <View style={styles.frame629471}>
            {result.map(comment => {
                switch (comment.depth) {
                    case 0:
                        return <CommentDepthZeroComponent name={comment.name} content={comment.content} date={comment.commentDate} id={comment.id} key={comment.id} image={comment.image} />;
                    case 1:
                        return <CommentDepthOneComponent name={comment.name} content={comment.content} date={comment.commentDate} id={comment.id} key={comment.id} image={comment.image} />;
                    default:
                        return <CommentDepthGreaterThanOneComponent name={comment.name} content={comment.content} date={comment.commentDate} id={comment.id} key={comment.id} replyName={comment.replyUser} image={comment.image} />;
                }
            })}
            <View style={styles.line} />
        </View>
    )
}

export default SingleCommentContainer

const styles = StyleSheet.create({

    frame629471: {
        width: SCREEN_WIDTH - 16 - 16,
        marginTop: 24,
        gap: 16
    },

    line: {
        height: 1,
        backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-border'].value,
        width: SCREEN_WIDTH - 16 - 16
    },
})