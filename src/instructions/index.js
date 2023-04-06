import { StyleSheet, Text, View } from "react-native";

export function Instruction({ data, index }) {
	return (
		<View style={styles.container}>
			<Text style={styles.index}>{index + 1}. </Text>
			<Text style={styles.text}>{data.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 8,
		marginBottom: 14,
	},
	index: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#4CBE6C",
	},
	text: {
		lineHeight: 20,
	},
});
