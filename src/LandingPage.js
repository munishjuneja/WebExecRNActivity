import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';

function LandingPage() {
  const [screenType, setScreenType] = useState('login');

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Welcome to my app</Text>

      <Text style={styles.description}>this is my app's description</Text>

      <View style={styles.loginActionContainer}>
        <TouchableHighlight
          style={styles.loginActionButton}
          onPress={() => setScreenType('login')}>
          <Text style={styles.buttonLabel}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.loginActionButton}
          onPress={() => setScreenType('signup')}>
          <Text style={styles.buttonLabel}>Sign up</Text>
        </TouchableHighlight>
      </View>

      {screenType === 'login' ? (
        <Login onSignupClick={() => setScreenType('signup')} />
      ) : null}
      {screenType === 'signup' ? (
        <Signup onLoginClick={() => setScreenType('login')} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 30,
    height: '100%',
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#999999',
    marginTop: 40,
  },
  loginActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginActionButton: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    margin: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default LandingPage;
