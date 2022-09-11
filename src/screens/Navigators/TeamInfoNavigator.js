import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import DronScreen from "../DronScreen";
import TeamInfoScreen from "../TeamInfoScreen";
import CameraScreen from "../CameraScreen";

const Stack = createStackNavigator();


const TeamInfoNavigator = ({ }) => {

    return (
       
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: "left",
                    animationEnabled: true,
                    animationTypeForReplace: "push",
                    
                }}
                detachInactiveScreens={true}
            >
                <Stack.Screen
                    name="DronMain"
                    component={DronScreen}
                    options={
                        {
                            headerTitle: "Drone Main Screeen"
                        }}

                />
                <Stack.Screen
                    name="DronCamera"
                    component={CameraScreen}
                    options={
                        {
                            headerTitle: "Camera Watching Screen"
                        }}
                />

            </Stack.Navigator>
        
    )
}

export default TeamInfoNavigator;