import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants/index';
import { Home, Profile, Search } from '../screens';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    }
}

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Icon name="home"
                            size={24}
                            color={focused ? COLORS.gray : COLORS.black} />
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="search"
                            size={24}
                            color={focused ? COLORS.gray : COLORS.black}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Icon name="user"
                            size={24}
                            color={focused ? COLORS.gray : COLORS.black} />
                    }
                }}
            /> 
        </Tab.Navigator>
    )
}

// const styles = StyleSheet.create({

// })

export default BottomNavigation
