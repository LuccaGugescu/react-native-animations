import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
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
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar hidden />
            <FlatList
                data={DATA}
                keyExtractor={item => item.key}
                renderItem={item => <View className='flex flex-row items-center m-4 p-1 bg-gray-300 rounded-2xl'>
                    <Image src={item.item.image} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE }} />
                    <View style={{ marginLeft: SPACING }}>
                        <Text>{item.item.name}</Text>
                        <Text>{item.item.email}</Text>
                        <Text>{item.item.jobTitle}</Text>

                    </View>
                </View>}

            />
        </View>
    )
}