import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import main from '../styles/main';
import { fetchData } from './../redux/actions/fetchActions.js';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { usersData, isLoading } = useSelector((state) => ({
    usersData: state?.usersData,
    isLoading: state?.isLoading,
  }));

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => <MenuIcon />,
    });
    dispatch(fetchData());
  }, []);

  const renderUsersData = () => {
    return usersData.map((item) => (
      <View key={item.id} style={main.userView}>
        <Text>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
      </View>
    ));
  };

  const loadingData = () => {
    return (
      <View>
        <Text>Loading Data.....</Text>
      </View>
    );
  };

  return (
    <View style={main.centered}>
      {isLoading ? loadingData() : usersData?.length ? renderUsersData() : null}
    </View>
  );
}
