import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { FoodList } from "../../components/foodlist";
import api from "../../services/api";

export function Search() {
	const [recipes, setRecipes] = useState([]);
	const route = useRoute();

	useEffect(() => {
		async function fetchRecipes() {
			const response = await api.get(`/foods?name_like=${route.params?.name}`);
			setRecipes(response.data);
		}

		fetchRecipes();
	}, [route.params?.name]);

	return (
		<View style={styles.container}>
			<FlatList
				data={recipes}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <FoodList data={item} />}
				ListEmptyComponent={() => (
					<Text style={styles.text}>Sem resultados para esta busca...</Text>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F3F9FF",
		paddingStart: 14,
		paddingEnd: 14,
		paddingTop: 14,
	},
	text: {
		fontSize: 18,
		fontStyle: "italic",
	},
});
