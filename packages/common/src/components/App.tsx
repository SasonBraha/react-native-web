import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IProps {}

const App: React.FC<IProps> = () => {
    return (
        <View>
            <Text>Hello world</Text>
            <TouchableOpacity onPress={() => console.log('Clicked!')}>
                <Text>Click me!</Text>
            </TouchableOpacity>
        </View>
    );
};

export { App };
