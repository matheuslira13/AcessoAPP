import React from 'react';

import Login from './src/pages/Login';
import Main from './src/pages/Main';
import Character from './src/pages/Character';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown:false }} 
                />
                <Stack.Screen 
                name="Main" 
                component={Main} 
                options={{ headerShown:false }} 
                />
                <Stack.Screen 
                name="Character" 
                component={Character} 
                options={{ headerShown:false }} 
                />
              
            </Stack.Navigator>
              
        </NavigationContainer>
    );
}

export default Routes;