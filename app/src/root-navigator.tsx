import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MessagesScreen from './screens/Messages';
import DetailsScreen from './screens/Details';

export type RootStackParamList = {
  Messages: undefined;
  Details: { id: string; title: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Messages"
        screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
