import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#121212",

				tabBarStyle: {
					backgroundColor: "#fff",
					borderTopWidth: 0,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return <Ionicons name="home" color="#000" size={size} />;
						}

						return <Ionicons name="home-outline" color={color} size={size} />;
					},
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return <Ionicons name="heart" color="#FF4141" size={size} />;
						}

						return <Ionicons name="heart-outline" color={color} size={size} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}
