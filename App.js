import { View, Text } from "react-native";
import { AppRoutes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<AppRoutes />
		</NavigationContainer>
	);
}
