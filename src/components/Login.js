import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/actions/userActions';

function Login({onSignupClick}) {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const users = useSelector(state => {
    return state.user.users;
  });
  const clearInputs = () => {
    setPassword('');
    setPhoneNumber('');
  };

  const validateInput = () => {
    if (
      users.find(u => u.phoneNumber === phoneNumber && u.password === password)
    ) {
      dispatch(loginUser({phoneNumber, password}));
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        keyboardType="default"
        onChangeText={setPassword}
      />
      <View style={styles.actions}>
        <Button type={'secondary'} onPress={clearInputs}>
          Clear
        </Button>
        <Button onPress={validateInput}>Validate</Button>
      </View>

      <TouchableOpacity
        color="red"
        style={styles.button}
        onPress={onSignupClick}>
        <Text style={styles.buttonLabel}>
          Don't have an account? Please sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    gap: 10,
  },
  input: {
    borderColor: '#666',
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0072c6',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});
export default Login;
