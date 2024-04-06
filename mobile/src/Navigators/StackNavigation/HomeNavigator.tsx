import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/Screens/Home/HomeScreen';

import ArticleScreen from '@/Screens/Home/ArticleScreen';
import { RouteName } from '@/Constants';
import CommentScreen from '@/Screens/Home/CommentScreen';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName={RouteName.HomeRouter.home} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteName.HomeRouter.home} component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.HomeRouter.article.article} component={ArticleScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.HomeRouter.article.comment} component={CommentScreen} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    );
}
