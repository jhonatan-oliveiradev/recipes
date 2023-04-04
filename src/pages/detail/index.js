import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function Detail() {
	const route = useRoute();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: route.params?.data
				? route.params?.data.name
				: "Detalhes da receita",
			headerRight: () => (
				<Pressable onPress={() => console.log("testando")}>
					<Ionicons name="heart" size={28} color="#FF4141" />
				</Pressable>
			),
		});
	}, [navigation, route.params?.data]);

	return (
		<View style={styles.container}>
			<Text>Detalhes da receita</Text>
			<Text>{route.params?.data.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "gray",
	},
});
