import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../store/actions/userActions';

const Dashboard = () => {
  const user = useSelector(state => {
    console.log('STATE', JSON.stringify(state));
    return state.user.currentUser;
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const editProfile = () => navigation.navigate('EditProfile');

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  const changePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const viewProducts = () => navigation.navigate('Products');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logout} onPress={handleLogout}>
          Logout
        </Text>
        <Text style={styles.subText}>Welcome, {user.name}</Text>
      </View>

      <View style={styles.profileActions}>
        <Button type="secondary" onPress={editProfile}>
          Edit Profile
        </Button>
        <Button type="secondary" onPress={changePassword}>
          Change password
        </Button>
        <Button type="secondary" onPress={viewProducts}>
          Products
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
  },
  logout: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 20,
  },
  subText: {
    fontSize: 15,
    textAlign: 'center',
  },
  profileActions: {
    flex: 1,
    gap: 20,
  },
});

export default Dashboard;
