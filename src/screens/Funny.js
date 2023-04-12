import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const FunnyScreen = () => {
    return <MyList items={items} type="Funny" />;
};

export default FunnyScreen;
