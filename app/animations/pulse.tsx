import { View } from 'react-native'
import React from 'react'
import Pulse from '@/components/Pulse'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function PulseAnimationScreen() {
  return (
    <View className='h-full w-full relative flex flex-row items-center justify-center'>
      {[1, 2].map((v, idx) => <Pulse id={v} key={idx} />)}
      <MaterialCommunityIcons name='microphone' size={40} color="white" />

    </View>
  )
}