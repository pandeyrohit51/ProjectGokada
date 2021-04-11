import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import main from '../styles/main';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => <MenuIcon />,
    });
  });

  return (
    <View style={main.centered}>
      <Text>This is Home Screen</Text>
    </View>
  );
}
