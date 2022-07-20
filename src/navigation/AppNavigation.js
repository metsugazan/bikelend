import * as React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ResetMDPScreen from '../screens/ResetMDPScreen';

import HistoScreen from '../screens/HistoScreen';
import LendBikeScreen from '../screens/LendBikeScreen';
import ListBikeScreen from '../screens/ListBikeScreen';
import DetailsBikeScreen from '../screens/DetailsBikeScreen';
import ListBikeRenterScreen from '../screens/ListBikeRenterScreen';

import CustomDrawer from '../components/CustomDrawer';
import RNBootSplash from "react-native-bootsplash";



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{ headerTitleAlign: 'center', headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="register" options={{ title: 'Création compte', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={RegisterScreen} />
            <Stack.Screen name="reset" options={{ title: 'Réinitialisation', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={ResetMDPScreen} />
        </Stack.Navigator>

    )
}

const LendNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="list">
            <Stack.Screen name="list" options={{ title: 'Vélos disponibles', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={ListBikeScreen} />
            <Stack.Screen name="details" options={{ title: 'Fiche vélo', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={DetailsBikeScreen} />
        </Stack.Navigator>

    )
}


const AppNavigation = () => {
    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <Drawer.Navigator initialRouteName="Login" drawerContent={props => <CustomDrawer {...props} screenOptions={{ headerShown: false }} />}>
                <Drawer.Screen name="Login" options={{ headerShown: false, drawerLockMode: 'locked-closed', swipeEnabled: false, gestureEnabled: false }} component={LoginNavigation} />

                <Drawer.Screen name="home" options={{ title: 'Accueil', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={HomeScreen} />
                <Drawer.Screen name="List" options={{ headerShown: false }} component={LendNavigation} />
                <Drawer.Screen name="ListRenter" options={{ headerShown: false }} component={ListBikeRenterScreen} />
                <Drawer.Screen name="lend" options={{ title: 'Prêter', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#5b8e7d' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} component={LendBikeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation