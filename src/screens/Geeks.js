import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const GeeksScreen = () => {
    return <MyList items={items} type="Geeks" />;
};

export default GeeksScreen;
