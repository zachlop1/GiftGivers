import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const TechiesScreen = () => {
    return <MyList items={items} type="Techies" />;
};

export default TechiesScreen;
