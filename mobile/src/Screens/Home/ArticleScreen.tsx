import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '@/Components/BackComponent';
import { CommonStyles, Texts } from '@/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '@/Assets';
import theme from '@/Assets/theme';
import ArticleBackComponent from './Containers/Components/ArticleBackComponent';
import ArticleBottomComponent from './Containers/Components/ArticleBottomComponent';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/Utils/common';
import CommentScreen from './CommentScreen';
import ArticleMainContainer from './Containers/ArticleMainContainer';

export default function ArticleScreen({ route }) {
    const { articleId } = route.params;
    const [commentVisible, setCommentVisible] = React.useState(false)
    return (

        <View style={CommonStyles.baseFrame}>
            <ArticleBackComponent />
            <ArticleMainContainer />
            <ArticleBottomComponent like={328} favorite={328} comment={328} share={328} setCommentVisible={() => setCommentVisible(true)} />
            <CommentScreen visible={commentVisible} onClose={() => setCommentVisible(false)} />
        </View>

    )
}

const styles = StyleSheet.create({

})