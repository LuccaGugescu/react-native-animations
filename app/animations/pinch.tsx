import { View, Text, Image } from "react-native";
import React from "react";
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler'; import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { StyleSheet } from "nativewind";

export default function Pan() {
	const scale = useSharedValue(1);
	const savedScale = useSharedValue(1);

	const pinchGesture = Gesture.Pinch()
		.onUpdate((e) => {
			scale.value = savedScale.value * e.scale;
		})
		.onEnd(() => {
			savedScale.value = scale.value;
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<GestureHandlerRootView className="flex-1">
			<View className="flex flex-row items-center justify-center h-full">
				<GestureDetector gesture={pinchGesture}>
					<Animated.View style={[styles.box, animatedStyle]}>
						<Image style={[StyleSheet.absoluteFill, styles.box]} source={{ uri: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=sph" }} />
					</Animated.View>
				</GestureDetector>
			</View>
		</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	box: {
		height: 170,
		width: 170,
		backgroundColor: '#b58df1',
		borderRadius: 20,
		marginBottom: 30,
	},
});