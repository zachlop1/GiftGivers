import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const Under30Screen = () => {
    return <MyList items={items} type="Under30" />;
};

export default Under30Screen;
