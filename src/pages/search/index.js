import { View, Text, StyleSheet } from "react-native";

export function Search() {
	return (
		<View style={styles.container}>
			<Text>Buscar</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "green",
	},
});
