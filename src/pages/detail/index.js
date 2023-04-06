import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
	Image,
	Modal,
	Pressable,
	ScrollView,
	Share,
	StyleSheet,
	Text,
	View,
} from "react-native";

import { Ingredients } from "../../components/ingredients";
import { VideoView } from "../../components/video";
import { Instruction } from "../../instructions";
import { isFavorite, removeFavorite, saveFavorite } from "../../utils/storage";

export function Detail() {
	const [showVideo, setShowVideo] = useState(false);
	const [favorite, setFavorite] = useState(false);
	const route = useRoute();
	const navigation = useNavigation();

	useLayoutEffect(() => {
		async function getStatusFavorites() {
			const recipeFavorite = await isFavorite(route.params?.data);
			setFavorite(recipeFavorite);
		}

		getStatusFavorites();

		navigation.setOptions({
			title: route.params?.data
				? route.params?.data.name
				: "Detalhes da receita",
			headerRight: () => (
				<Pressable onPress={() => handleFavoriteRecipe(route.params?.data)}>
					{favorite ? (
						<Ionicons name="heart" size={28} color="#FF4141" />
					) : (
						<Ionicons name="heart-outline" size={28} color="#FF4141" />
					)}
				</Pressable>
			),
		});
	}, [navigation, route.params?.data, favorite]);

	async function handleFavoriteRecipe(recipe) {
		if (favorite) {
			await removeFavorite(recipe.id);
			setFavorite(false);
		} else {
			await saveFavorite("@appreceitas", recipe);
			setFavorite(true);
		}
	}

	function handleOpenVideo() {
		setShowVideo(true);
	}

	async function shareRecipe() {
		try {
			await Share.share({
				url: "https://jhonatanoliveira.com",
				message: `Receita: ${route.params?.data.name}\n
									Ingredientes: ${route.params?.data.total_ingredients}\n
									Vi lá no app receita fácil!`,
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<ScrollView
			contentContainerStyle={{ paddingBottom: 14 }}
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Pressable onPress={handleOpenVideo}>
				<View style={styles.playIcon}>
					<AntDesign name="playcircleo" size={48} color="#FAFAFA" />
				</View>
				<Image
					source={{ uri: route.params?.data.cover }}
					style={styles.cover}
				/>
			</Pressable>

			<View style={styles.headerDetails}>
				<View>
					<Text style={styles.title}>{route.params?.data.name}</Text>
					<Text style={styles.ingredientsText}>
						Ingredientes ({route.params?.data.total_ingredients})
					</Text>
				</View>
				<Pressable onPress={shareRecipe}>
					<Feather name="share-2" size={24} color="#4CBE6C" />
				</Pressable>
			</View>

			{route.params?.data.ingredients.map((item) => (
				<Ingredients key={item.id} data={item} />
			))}

			<View style={styles.instructionsArea}>
				<Text style={styles.instructionsText}>Modo de preparo</Text>
				<Feather name="arrow-down" size={24} color="#FFF" />
			</View>

			{route.params?.data.instructions.map((item, index) => (
				<Instruction key={item.id} data={item} index={index} />
			))}

			<Modal visible={showVideo} animationType="slide">
				<VideoView
					handleClose={() => setShowVideo(false)}
					videoUrl={route.params?.data.video}
				/>
			</Modal>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F3F9FF",
		paddingTop: 14,
		paddingEnd: 14,
		paddingStart: 14,
	},
	cover: {
		width: "100%",
		height: 200,
		borderRadius: 14,
	},
	playIcon: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 9,
	},
	headerDetails: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 14,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
		marginTop: 14,
		marginBottom: 4,
	},
	ingredientsText: {
		marginBottom: 14,
		fontSize: 16,
	},
	instructionsArea: {
		backgroundColor: "#4CBE6C",
		flexDirection: "row",
		padding: 8,
		borderRadius: 4,
		marginBottom: 14,
	},
	instructionsText: {
		fontSize: 18,
		fontWeight: 500,
		color: "#FFF",
		marginRight: 8,
	},
});
