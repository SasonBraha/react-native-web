import React from 'react';
import { View, Text } from 'react-native';

interface IProps {}

const Header: React.FC<IProps> = () => {
    return (
        <View>
            <Text>I'm an header</Text>
        </View>
    );
}

export { Header };
