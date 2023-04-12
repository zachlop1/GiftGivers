import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const KidsScreen = () => {
    return <MyList items={items} type="Kids" />;
};

export default KidsScreen;
