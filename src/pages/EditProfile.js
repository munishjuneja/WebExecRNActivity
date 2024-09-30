import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, updateUser} from '../store/actions/userActions';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';

function EditProfile() {
  const user = useSelector(state => state?.user?.currentUser);
  console.log(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [city, setCity] = useState(user.city);
  const [name, setName] = useState(user.name);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUpdateUser = () => {
    dispatch(updateUser({city, phoneNumber, name}));
    ToastAndroid.show('Profile Updated Successfully', ToastAndroid.SHORT);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      <Text>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        keyboardType="default"
        onChangeText={setCity}
      />

      <View style={styles.actions}>
        <Button onPress={handleUpdateUser}>Update Profile</Button>
      </View>
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
export default EditProfile;
