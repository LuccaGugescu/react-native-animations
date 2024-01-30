import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { ANIMATINOS } from '@/constants/common'
import { router } from 'expo-router'

export default function HomeScreen() {
    return (
        <View className='p-5'>
            <FlatList data={ANIMATINOS} renderItem={v => <AnimationItem name={v.item} />} />
        </View>
    )
}

const AnimationItem = ({ name }: { name: string }) => <Pressable onPress={() => router.push("/animations/" + name)} className='bg-gray-900 p-4  rounded-2xl'><Text className='text-white'>{name}</Text></Pressable>