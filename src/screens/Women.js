import React from 'react';
import { View, Text } from 'react-native';
import MyList from '../components/MyList';
import items from '../components/Item';

const WomenScreen = () => {
  return <MyList items={items} type="Women" />;
};

export default WomenScreen;
