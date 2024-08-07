import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors';
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false ,
            tabBarActiveTintColor:Colors.primary
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color}/>,
                }}
            />
        </Tabs>
    )
}