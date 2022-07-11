import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{ headerTitleAlign: 'center', headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="register" options={{ title: 'Création compte', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={RegisterScreen} />
            <Stack.Screen name="home" options={{ title: 'Accueil', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={HomeScreen} />

        </Stack.Navigator>
        </NavigationContainer>
    )
}

/*const homeName = "Home";
const accountName = "Account";
const StatsName = "Statistiques";
const TabNavigation = () => {
    return (
            <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#222222', paddingBottom: 5 },
                tabBarLabelStyle: {
                  fontSize: 10,
                  fontWeight: 'bold',
                },
                tabBarActiveTintColor: '#9F8236',
                tabBarInactiveTintColor: '#adabab',
                headerTitleAlign: 'center',
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;
        
                  if (rn === homeName) {
                    iconName = Platform.OS === 'ios' ? `home${focused ? '' : 'home'}` : 'home';
                  } else if (rn === accountName) {
                    iconName = Platform.OS === 'ios' ? `bank${focused ? '' : 'bank'}` : 'bank';
                  } else if (rn === StatsName) {
                    iconName = Platform.OS === 'ios' ? `chart-timeline-variant${focused ? '' : 'chart-timeline-variant'}` : 'chart-timeline-variant';
                  }
        
                  return <Icon name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'} style={{ marginTop: 5 }} />
        
        
                }
    })}>
                <Tab.Screen name="Home" options={{title: 'Accueil', headerShown: false}} component={HomeScreen} />
                <Tab.Screen name="Account" options={{title: 'Compte', headerShown: false}} component={AccountScreen} />
                <Tab.Screen name="Statistiques" options={{headerShown: false}} component={StatsScreen} />

            </Tab.Navigator>
    )
}*/

export default StackNavigation