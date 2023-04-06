import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/routes";

import 'react-native-gesture-handler';

export default function App() {
	return (
		<NavigationContainer>
			<AppRoutes />
		</NavigationContainer>
	);
}
