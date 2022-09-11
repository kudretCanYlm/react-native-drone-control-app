import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Provider } from "react-redux";
import PersonStore from './src/redux/store/PersonStore';
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from "react-native-vector-icons/Ionicons";
import TeamInfoScreen from "./src/screens/TeamInfoScreen"
import MainScreen from './src/screens/MainScreen';
import SplashScreen from 'react-native-splash-screen';
import DronScreen from './src/screens/DronScreen';
//import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import TeamInfoNavigator from './src/screens/Navigators/TeamInfoNavigator';

const Tab = createBottomTabNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={PersonStore}>
      <NavigationContainer   >
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#6FFF1C",
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveBackgroundColor: "white",

        }}
          backBehavior={"none"}
          initialRouteName="Dron"
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (<Icon4 color={color} name="people" size={22} />),

            }}

            name="Team"
            component={TeamInfoScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (<Icon2 color={color} name="home" size={22} />),

            }}

            name="Main"
            component={MainScreen} />
          <Tab.Screen

            options={{
              tabBarIcon: ({ color }) => (<Icon3 color={color} name="drone" size={22} />),
              tabBarActiveBackgroundColor: "#e66465"
            }}
            name="Dron"
            component={TeamInfoNavigator} >

          </Tab.Screen>


        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
