import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import ChangeHud from './pages/changeHud';
import Treiner from './pages/treiner';

const Stack = createStackNavigator();

const Routes = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name='treiner' component={Treiner} />
				<Stack.Screen name='edit' component={ChangeHud} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes;
