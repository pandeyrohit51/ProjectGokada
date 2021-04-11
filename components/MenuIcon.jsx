import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import Menu from '../images/menu.png';

export default function MenuIcon() {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image source={Menu} style={{ height: 24, width: 24, marginLeft: 25 }} />
    </TouchableOpacity>
  );
}
