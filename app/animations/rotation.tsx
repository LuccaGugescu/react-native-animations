import { View, Text } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View'

export default function rotation() {
    const rotation = useSharedValue(1);
    const savedRotation = useSharedValue(1);

    const rotationGesture = Gesture.Rotation()
        .onUpdate((e) => {
            rotation.value = savedRotation.value + e.rotation;
        })
        .onEnd(() => {
            savedRotation.value = rotation.value;
        });

    return (
        <GestureHandlerRootView>
            <Container center disableScroll>
                <GestureDetector gesture={rotationGesture}>
                    <AnimatedView style={{ transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }] }} className="bg-red-300 w-32 h-32" />
                </GestureDetector >

            </Container>
        </GestureHandlerRootView>
    )
}