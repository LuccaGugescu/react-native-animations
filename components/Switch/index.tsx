import React, { useMemo, useState } from 'react'
import { MotiTransitionProp, MotiView } from 'moti'
import { Pressable, View } from 'react-native'
import { Easing } from 'react-native-reanimated'
interface SwitchProps {
    size: number
    onPress: () => void,
    isActive: boolean
}

const transitions: MotiTransitionProp = {
    type: "timing",
    duration: 300,
    easing: Easing.inOut(Easing.ease)
}

const _switchVariants = {
    inactive: "#1f1c1c",
    active: "#a3a0a0"
}
export default function Switch({ size, onPress, isActive }: SwitchProps) {
    const trackWidth = useMemo(() => size * 1.6, [size]);
    const trackHeight = useMemo(() => size * 0.6, [size]);
    const knobSize = useMemo(() => size * 0.5, [size]);

    const background = isActive ? _switchVariants.active : _switchVariants.inactive;
    return (
        <Pressable onPress={onPress}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MotiView
                    animate={
                        {
                            backgroundColor: background
                        }
                    }

                    transition={transitions}
                    style={{
                        position: "absolute",
                        width: trackWidth,
                        height: trackHeight,
                        borderRadius: trackHeight / 2,
                        backgroundColor: _switchVariants.inactive
                    }}
                />
                <MotiView
                    transition={transitions}
                    animate={{
                        translateX: isActive ? trackWidth / 4 : -trackWidth / 4
                    }}
                    style={{
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <MotiView
                        transition={transitions}
                        animate={{
                            width: isActive ? 0 : knobSize,
                            borderColor: background

                        }}
                        style={{
                            width: knobSize,
                            height: knobSize,
                            borderRadius: knobSize / 2,
                            borderWidth: size * 0.1,
                            borderColor: _switchVariants.active
                        }}
                    />

                </MotiView>
            </View>
        </Pressable>
    )
}