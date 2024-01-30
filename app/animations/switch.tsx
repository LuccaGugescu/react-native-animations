import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Container from '@/components/Container'
import Switch from '@/components/Switch'

export default function SwitchScreen() {
    const [active, setActive] = useState(false);
    return (

        <Container center disableScroll >
            <Switch size={80} isActive={active} onPress={() => setActive(prev => !prev)} />
        </Container>
    )
}