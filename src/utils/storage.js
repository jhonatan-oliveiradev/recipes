import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key) {
	const favorites = await AsyncStorage.getItem(key);
	return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
	let myFavorites = await getFavorites(key);

	const hasFavorite = myFavorites.some((item) => item.id === newItem.id);

	if (hasFavorite) {
		console.log("JÁ ESTÁ NA LISTA DE FAVORITOS!");
		return;
	}

	myFavorites.push(newItem);

	await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
	console.log("SALVO COM SUCESSO!");
}

export async function removeFavorite(id) {
	let recipes = await getFavorites("@appreceitas");

	let myFavorites = recipes.filter((item) => {
		return item.id !== id;
	});

	await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
	console.log("ITEM EXCLUÍDO COM SUCESSO!");
	return myFavorites;
}

export async function isFavorite(recipe) {
	let myRecipes = await getFavorites("@appreceitas");

	const isFavorite = myRecipes.find((item) => item.id === recipe.id);

	if (isFavorite) {
		return true;
	}

	return false;
}
