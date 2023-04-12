import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const MiscScreen = () => {
  return <MyList items={items} type="Misc" />;
};

export default MiscScreen;
