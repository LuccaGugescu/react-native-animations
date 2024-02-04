import React from 'react'
import { Stack } from 'expo-router'

export default function AnimationsLayot() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name='gallery' options={{ headerShown: false, statusBarHidden: true }} />
        </Stack>
    )
}