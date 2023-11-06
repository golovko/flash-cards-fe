import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Login= () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
     

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      

      <Button title="Sign Up" onPress={handleSignUp} style={styles.signUpButton} />
      <Text>Login if already registered</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  signUpButton: {
    borderRadius: 100,
    backgroundColor: 'green',
    color: 'green'
  },
});

export default Login;