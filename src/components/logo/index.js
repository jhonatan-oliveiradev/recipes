import { View } from "moti";
import { StyleSheet, Text } from "react-native";

export function Logo() {
	return (
		<View
			style={styles.logoArea}
			from={{
				opacity: 0,
				translateX: -50,
			}}
			animate={{
				opacity: 1,
				translateX: 0,
			}}
			transition={{
				type: "spring",
				duration: 700,
			}}
		>
			<Text style={styles.logo}>Receita Fácil</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	logoArea: {
		backgroundColor: "#4CBE6C",
		alignSelf: "flex-start",
		padding: 8,
		paddingLeft: 16,
		paddingRight: 20,
		borderTopRightRadius: 8,
		borderBottomLeftRadius: 8,
		borderTopLeftRadius: 8,
		borderBottomRightRadius: 32,
		marginBottom: 8,
	},
	logo: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFF",
	},
});
