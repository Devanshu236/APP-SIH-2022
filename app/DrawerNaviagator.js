import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './components/Home';
import Tasks from './components/Tasks';
import { useLogin } from './context/LoginProvider';

import MyCourses from './components/MyCourses';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import GrievencePortal from './components/GrievencePortal';
import AppFormAdmin from './components/AppFormAdmin';
import About from './components/About';



const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  const { setIsLoggedIn, profile } = useLogin();
  return (
    <View  style={{ flex: 1,  backgroundColor: '#B6FAF5' }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#4FA5AC',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>{profile.fullname}</Text>
            <Text>{profile.email}</Text>
          </View>
          <Image
            source={{
              uri:
                profile.avatar ||
                'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#4FA5AC',
          padding: 20,
        }}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='Home' />
      <Drawer.Screen component={About} name='About Shiksha Vardhan' />
      <Drawer.Screen component={Tasks} name='Tasks' />
      <Drawer.Screen component={EditProfile} name='Edit Profile' />
      <Drawer.Screen component={MyCourses} name='My Courses' />
      <Drawer.Screen component={ChangePassword} name='Change Password' />
      <Drawer.Screen component={GrievencePortal} name='Grievence Portal' />
      <Drawer.Screen component={AppFormAdmin} name='Log In To Upload Resource' />
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;