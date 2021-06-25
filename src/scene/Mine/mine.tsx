import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const mine = () => {
  const navigation = useNavigation();
  return (
    <Text>
      <Button title="Go back" onPress={() => navigation.navigate('首页')} />
    </Text>
  );
}

export default mine;