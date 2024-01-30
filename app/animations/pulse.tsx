import { View } from 'react-native'
import React from 'react'
import Pulse from '@/components/Pulse'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Container from '@/components/Container'

export default function PulseAnimationScreen() {
  return (
    <Container disableScroll center>
      {[1, 2].map((v, idx) => <Pulse id={v} key={idx} />)}
      <MaterialCommunityIcons name='microphone' size={40} color="white" />

    </Container>
  )
}