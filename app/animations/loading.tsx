import { View, Text } from 'react-native'
import React from 'react'
import Container from '@/components/Container'
import Loading from '@/components/Loading'

export default function LoadingScreen() {
    return (
        <Container disableScroll center>
            <Loading size={150} />
        </Container>
    )
}