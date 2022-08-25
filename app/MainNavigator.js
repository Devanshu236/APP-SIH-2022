import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppForm from './components/AppForm';
// import ImageUpload from './components/ImageUpload';
//import UserProfile from './components/UserProfile';
import { useLogin } from './context/LoginProvider';
import DrawerNavigator from './DrawerNaviagator';
import AppFormAdmin from './components/AppFormAdmin';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} independent={true}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={DrawerNavigator} name='DrawerNavigator' />
      <Stack.Screen component={AppFormAdmin} name='UserProfile' />
   
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;