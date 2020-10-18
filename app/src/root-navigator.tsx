import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MessagesScreen from './screens/Messages';
import DetailsScreen from './screens/Details';

type RootStackParamList = {
  Messages: undefined;
  Details: { id: string | null };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
