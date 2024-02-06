import * as React from 'react';
import { StatusBar, FlatList, Image, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, Animated } from 'react-native';
import { faker } from '@faker-js/faker';

const { width, height } = Dimensions.get('screen');
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

export default function Scroll() {
    const scrollY = 0;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image blurRadius={5} source={{ uri: "https://plus.unsplash.com/premium_photo-1706625695154-d8a6a1c275d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={StyleSheet.absoluteFillObject} />
            <StatusBar hidden />
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                contentContainerStyle={{ padding: SPACING }}
                scrollEventThrottle={16}
                data={DATA}
                keyExtractor={item => item.key}
                renderItem={item => {
                    return (
                        <Animated.View className='flex flex-row bg-gray-200 shadow-xl shadow-black rounded-2xl' style={{ padding: SPACING, marginBottom: SPACING }}>
                            <Image src={item.item.image} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2 }} />
                            <View style={{ marginLeft: SPACING }}>
                                <Text className='font-bold text-lg'>{item.item.name}</Text>
                                <Text className='text-blue-300'>{item.item.email}</Text>
                                <Text>{item.item.jobTitle}</Text>
                            </View>
                        </Animated.View>)
                }
                }

            />
        </View>
    )
}