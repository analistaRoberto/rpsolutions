import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Screens/Profile";
import RouteNavigation from "./RouteNavigation";
import Shop from "../Screens/Shop";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../theme/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator 
        activeColor="red"
        style= {{backgroundColor: 'black'}} screenOptions={{ title: "", headerShown: false }}>
            <Tab.Screen
                options={{ tabBarIcon: ({focused}) => 
                <Entypo 
                name="shopping-basket" 
            size={focused ? 36 : 30} 
                color={focused ? colors.contFonts : "black" } /> }}
                name="routeNavegation"
                component={RouteNavigation} />
            <Tab.Screen
                options={{ tabBarIcon: ({focused}) => <FontAwesome name="shopping-cart" size={30} color={focused ? colors.contFonts: "black"} /> }}
                name="shop"
                component={Shop}
            />
            <Tab.Screen
                options={{ tabBarIcon: ({focused}) => <FontAwesome name="user-circle-o" size={30} color={focused ? colors.contFonts: "black"} /> }}
                name="profile"
                component={Profile} 
            />
        </Tab.Navigator>
    )
}
export default TabNav;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.headerButton
    }
})