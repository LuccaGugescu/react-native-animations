import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { ANIMATIONS } from "@/constants/common";
import { router } from "expo-router";
import Container from "@/components/Container";

export default function HomeScreen() {
	return (
		<Container disableScroll>
			<FlatList
				data={ANIMATIONS}
				renderItem={(v) => <AnimationItem name={v.item} />}
			/>
		</Container>
	);
}

const AnimationItem = ({ name }: { name: string }) => (
	<Pressable
		onPress={() => router.push("/animations/" + name)}
		className="bg-gray-900 p-4 rounded-2xl mt-4"
	>
		<Text className="text-white">{name}</Text>
	</Pressable>
);
