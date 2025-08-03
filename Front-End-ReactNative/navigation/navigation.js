import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../screens/accueilContact';// fichier accueil.js
import Recent from '../screens/recentContact'; // fichier app.js (page récents)

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Recent" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Recent" component={Recent} />
                <Stack.Screen name="Contacts" component={Accueil} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}