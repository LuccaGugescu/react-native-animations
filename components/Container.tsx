import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'moti'

function Container({ children, disableScroll, center = false, ...props }: { children: React.ReactNode, disableScroll: boolean, center?: boolean }) {
    if (disableScroll)
        return <View className={`py-5 w-full h-full ${center ? "flex flex-row items-center justify-center " : ""}`}>{children}</View>
    return (
        <ScrollView className='py-5' {...props}>
            {children}
        </ScrollView>
    )
}

export default Container;