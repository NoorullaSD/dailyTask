import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
            console.log('User registered:', userCredential.user);
        } catch (err) {
            console.log('Registration error:', err.message);
            setError(err.message);
        }
    };

    return (
        <View style={{ padding: 20, marginTop: 100 }}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;
