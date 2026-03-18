import { createBottomTabNavigator } from "@react-navigationbottom-tabs";
import { AboutStackNavigator, MainStackNavigator } from "./stacknavigator";
import Entypo from '@expo/vector-icons/Entypo';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    RETURN (
        <Tab.Navigator screenOptions={{ 
            tabBarStyle: { 
                backgroundColor: 'red',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'lightgray',
            tabBarLabelStyle: {
                fontSize: 12,
            },
        }}>
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="About" component={AboutStackNavigator} />
        </Tab.Navigator>
    );
}


export default BottomTabNavigator;