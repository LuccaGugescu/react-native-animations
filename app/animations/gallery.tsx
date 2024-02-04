import {
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const IMAGE_SIZE = 80;
const IMAGE_SPACE = 20;

export default function GalleryPage() {
	const [data, setData] = useState(null);
	const [index, setIndex] = useState(0);
	const { width, height } = Dimensions.get("screen");

	useEffect(() => {
		fetchImagesFromPexels().then((val) => {
			setData(val);
		});
	}, []);

	const topRef = useRef<FlatList>(null);
	const bottomRef = useRef<FlatList>(null);
	function setActiveIndex(index: number) {
		setIndex(index);
		topRef.current?.scrollToIndex({ index });
		if (index * (IMAGE_SIZE * IMAGE_SPACE) - IMAGE_SIZE / 2 > width / 2)
			bottomRef.current?.scrollToOffset({
				offset:
					index * (IMAGE_SIZE + IMAGE_SPACE) - width / 2 + IMAGE_SPACE * 2 + 15,
				animated: true,
			});
	}
	if (!data) return <Text>Loading...</Text>;

	return (
		<View className="flex-1 w-full h-full">
			<MaterialCommunityIcons
				onPress={() => router.back()}
				name="chevron-left"
				color="white"
				size={50}
				className="absolute z-20 top-5 left-5"
			/>
			<FlatList
				onMomentumScrollEnd={(ev) =>
					setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
				}
				ref={topRef}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				data={data}
				//@ts-ignore
				extraData={(item) => item.id.toString()}
				renderItem={(image) => (
					<View style={{ width, height }}>
						<Image
							style={StyleSheet.absoluteFill}
							source={{ uri: image.item.src.portrait }}
						/>
					</View>
				)}
			/>

			<FlatList
				ref={bottomRef}
				className="absolute bottom-12"
				showsHorizontalScrollIndicator={false}
				horizontal
				data={data}
				contentContainerStyle={{ paddingHorizontal: IMAGE_SPACE }}
				//@ts-ignore
				extraData={(item) => item.id.toString()}
				renderItem={(image) => (
					<TouchableOpacity onPress={() => setActiveIndex(image.index)}>
						<Image
							style={{
								width: IMAGE_SIZE,
								height: IMAGE_SIZE,
								borderRadius: 12,
								marginRight: IMAGE_SPACE,
								borderColor: "white",
								borderWidth: index === image.index ? 2 : 0,
							}}
							source={{ uri: image.item.src.tiny }}
						/>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const PEXELS_URL = "https://api.pexels.com/v1/search?query=nature";
async function fetchImagesFromPexels() {
	const data = await fetch(PEXELS_URL, {
		headers: {
			Authorization: process.env.EXPO_PUBLIC_API_URL,
		},
	});
	const { photos } = await data.json();

	return photos;
}
