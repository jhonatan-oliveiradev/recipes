import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function FoodList({ data }) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.5}>
			<Image source={{ uri: data.cover }} style={styles.cover} />
			<View style={styles.info}>
				<Text style={styles.name}>{data.name}</Text>
				<Text style={styles.description}>
					{data.total_ingredients} ingredientes | {data.time} min
				</Text>
			</View>
			<LinearGradient
				style={styles.gradient}
				colors={["transparent", "rgba(0,0,0,0.70)", "rgba(0,0,0,0.95)"]}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 14,
	},
	cover: {
		width: "100%",
		height: 200,
		borderRadius: 14,
	},
	info: {
		position: "absolute",
		bottom: 14,
		left: 14,
		zIndex: 99,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFF",
	},
	description: {
		color: "#FFF",
	},
	gradient: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "55%",
		borderRadius: 14,
		zIndex: 1,
		backgroundColor: "transparent",
	},
});
