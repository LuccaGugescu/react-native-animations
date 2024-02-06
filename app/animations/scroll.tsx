import * as React from 'react';
import { faker } from '@faker-js/faker';
import Animated, { SharedValue, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.person.bio(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(['women', 'men'])}/${faker.number.int(60)}.jpg`,
        name: faker.person.fullName(),
        jobTitle: faker.person.jobTitle(),
        email: faker.internet.email(),
    };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default function Scroll() {
    const scrollY = useSharedValue(0);
    const handleScroll = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image blurRadius={5} source={{ uri: "https://plus.unsplash.com/premium_photo-1706625695154-d8a6a1c275d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={StyleSheet.absoluteFillObject} />
            <StatusBar hidden />
            <Animated.FlatList
                onScroll={handleScroll}
                contentContainerStyle={{ padding: SPACING }}
                scrollEventThrottle={16}
                data={DATA}
                keyExtractor={item => item.key}
                renderItem={item =>


                    <ListItem scrollY={scrollY} item={item.item} index={item.index} />

                }

            />
        </View>
    )
}





function ListItem({ item, index, scrollY }: {
    item: {
        key: string;
        image: string;
        name: string;
        jobTitle: string;
        email: string;
    }, index: number, scrollY: SharedValue<number>
}) {
    const scaleStyle = useAnimatedStyle(() => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const outputRange = [1, 1, 1, 0]
        const scale = interpolate(scrollY.value, inputRange, outputRange);
        return {
            transform: [{ scale }]
        }
    })


    const opacityStyle = useAnimatedStyle(() => {
        const inputRange = [-1, 0, ITEM_SIZE * (index + .5), ITEM_SIZE * (index + 1)];
        const outputRange = [1, 1, 1, 0]
        const opacity = interpolate(scrollY.value, inputRange, outputRange);
        return {
            opacity
        }
    })
    return (
        <Animated.View className='flex flex-row bg-gray-200 shadow-xl shadow-black rounded-2xl' style={[{ padding: SPACING, marginBottom: SPACING }, scaleStyle, opacityStyle]}>
            <Image src={item.image} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2 }} />
            <View style={{ marginLeft: SPACING }}>
                <Text className='font-bold text-lg'>{item.name}</Text>
                <Text className='text-blue-300'>{item.email}</Text>
                <Text>{item.jobTitle}</Text>
            </View>
        </Animated.View >)
}