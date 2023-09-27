import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Productos from "../Screens/Productos";
import ProductDetail from "../Screens/ProductDetail";

const Stack = createNativeStackNavigator();

const RouteNavigation = () =>{
    return (
        <Stack.Navigator initialRouteName="ProductDetail" screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name="home"/>
            <Stack.Screen component={Productos} name="productos"/>
            <Stack.Screen component={ProductDetail} name="productDetail"/>
        </Stack.Navigator>
    )
}

export default RouteNavigation