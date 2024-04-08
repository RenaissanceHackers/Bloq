import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteName } from '@/Constants';
import TaskDetailScreen from '@/Screens/TasksCenter/TaskDetailScreen';
import TasksCenterScreen from '@/Screens/TasksCenter/TasksCenterScreen';

const Stack = createNativeStackNavigator();

export default function TasksCenterNavigator() {
    return (
        <Stack.Navigator initialRouteName={RouteName.TasksCenterRouter.explore.explore} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteName.TasksCenterRouter.explore.detail} component={TaskDetailScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name={RouteName.TasksCenterRouter.explore.explore} component={TasksCenterScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
