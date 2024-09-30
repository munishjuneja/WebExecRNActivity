import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../store/actions/userActions';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePasswordSubmit = () => {
    if (newPassword === confirmPassword) {
      ToastAndroid.show('Password changed successfully!', ToastAndroid.SHORT);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowChangePassword(false);
      dispatch(changePassword(newPassword));
      navigation.navigate('Home');
    } else {
      ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user.name}</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Current Password"
          value={currentPassword}
          secureTextEntry
          onChangeText={setCurrentPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="New Password"
          value={newPassword}
          secureTextEntry
          onChangeText={setNewPassword}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <Button onPress={handlePasswordSubmit}>Change password</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    gap: 10,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  form: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ChangePassword;
