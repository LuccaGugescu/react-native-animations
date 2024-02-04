import { View, Text, Image } from "react-native";
import React from "react";
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler'; import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { StyleSheet } from "nativewind";

export default function Pan() {
	const scale = useSharedValue(1)
	const translateX = useSharedValue(0)
	const translateY = useSharedValue(0)

	const pinchGesture = Gesture.Pinch()

		.onUpdate((e) => {
			scale.value = e.scale
		})
		.onEnd(() => {
			scale.value = withTiming(1)
		})

	const panGesture = Gesture.Pan()
	panGesture.enableTrackpadTwoFingerGesture(true)
	panGesture.minPointers(2)

	panGesture
		.onUpdate(e => {
			'worklet'
			translateX.value = e.translationX
			translateY.value = e.translationY
		})

	panGesture
		.onEnd(e => {
			'worklet'
			translateX.value = withTiming(0)
			translateY.value = withTiming(0)
		})

	const composed = Gesture.Simultaneous(pinchGesture, panGesture)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			zIndex: 50,
			transform: [
				{ scale: scale.value },
				{ translateX: translateX.value },
				{ translateY: translateY.value },
			],
		}
	})
	return (
		<GestureHandlerRootView className="flex-1">
			<View className="flex flex-row items-center justify-center h-full">
				<GestureDetector gesture={composed}>
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