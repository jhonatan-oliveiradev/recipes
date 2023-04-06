import { Feather } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export function VideoView({ handleClose, videoUrl }) {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={handleClose}>
				<Feather name="arrow-left" size={24} color="#FFF" />
				<Text style={styles.backText}>Voltar</Text>
			</TouchableOpacity>

			<WebView
				style={styles.contentView}
				source={{ uri: videoUrl}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	backButton: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: 48,
		backgroundColor: "#4CBE6C",
		paddingStart: 14,
	},
	backText: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 14,
	},
	contentView: {
		flex: 1,
		width: "100%",
	},
});
