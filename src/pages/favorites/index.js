import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

import { FoodList } from "../../components/foodlist";
import { getFavorites } from "../../utils/storage";

export function Favorites() {
	const [recipes, setRecipes] = useState([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		let isActive = true;

		async function getRecipes() {
			const result = await getFavorites("@appreceitas");
			if (isActive) {
				setRecipes(result);
			}
		}

		if (isActive) {
			getRecipes();
		}

		return () => {
			isActive = false;
		};
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Receitas favoritas</Text>

			{recipes.length === 0 && (
				<Text style={{ marginTop: 14 }}>
					Você ainda não possui nenhuma receita salva.
				</Text>
			)}

			<FlatList
				showsVerticalScrollIndicator={false}
				data={recipes}
				style={{ marginTop: 14 }}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <FoodList data={item} />}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F3F9FF",
		paddingStart: 14,
		paddingEnd: 14,
		paddingTop: 36,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#000",
	},
});
