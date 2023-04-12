import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const GamersScreen = () => {
    return <MyList items={items} type="Gamers" />;
};

export default GamersScreen;
