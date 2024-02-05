import { View, Text } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import { Gesture } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/reanimated2/component/View'

export default function rotation() {
    const rotation = useSharedValue(0);
    // const rotate = Gesture.Rotation().onChange(rotation => )
    return (
        <Container center disableScroll >
            <AnimatedView className="bg-red-300 w-32 h-32" />
        </Container>
    )
}