import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import main from '../styles/main';

export default function SettingsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => <MenuIcon />,
    });
  });

  return (
    <View style={main.centered}>
      <Text>This is Settings Screen</Text>
    </View>
  );
}
