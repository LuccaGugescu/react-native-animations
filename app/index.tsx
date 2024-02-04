import { Text, FlatList, Pressable } from "react-native";
import React from "react";
import { ANIMATIONS } from "@/constants/common";
import { router } from "expo-router";
import Container from "@/components/Container";

export default function HomeScreen() {
	return (
		<Container disableScroll>
			<FlatList
				className="px-5"
				data={ANIMATIONS}
				renderItem={(v) => <AnimationItem name={v.item} />}
			/>
		</Container>
	);
}

const AnimationItem = ({ name }: { name: string }) => (
	<Pressable
		/** @ts-ignore */
		onPress={() => router.push("/animations/" + name)}
		className="bg-gray-900 p-4 rounded-2xl mt-4"
	>
		<Text className="text-white">{name}</Text>
	</Pressable>
);
