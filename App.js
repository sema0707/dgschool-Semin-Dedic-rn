import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/stacknavigator";
import BottomTabNavigator from "./src/navigation/tabnavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}