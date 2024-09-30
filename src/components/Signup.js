import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {registerUser} from '../store/actions/userActions';
import Button from './Button';

function Signup({onLoginClick}) {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const clearInputs = () => {
    setPassword('');
    setPhoneNumber('');
  };

  const validateInput = () => {
    dispatch(registerUser({city, phoneNumber, password, name}));
    clearInputs();
    onLoginClick();
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
        placeholder="Enter Name"
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        keyboardType="default"
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={confirmPassword}
        keyboardType="default"
        onChangeText={setConfirmPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        keyboardType="default"
        onChangeText={setCity}
      />

      <View style={styles.actions}>
        <Button type={'secondary'} onPress={clearInputs}>
          Clear
        </Button>
        <Button onPress={validateInput}>Create User</Button>
      </View>

      <TouchableOpacity
        color="red"
        style={styles.button}
        onPress={onLoginClick}>
        <Text style={styles.buttonLabel}>
          Already have an account? Please sign in.
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
  },
});
export default Signup;
