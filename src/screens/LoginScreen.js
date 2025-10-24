import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { auth, app } from '../firebase/firebase.config'; // ✅ Correct import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeConsumer, Theme, Input } from '@rneui/themed';
import { Divider, Icon } from '@rneui/base';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate("Dashboard")
    // try {
    //   const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
    //   console.log('✅ User signed in:', JSON.stringify(userCredential, null));
    //   navigation.replace('Home');
    // } catch (error) {
    //   console.log('❌ Login error:', error);
    // }
  };

  return (
    <ThemeConsumer>
      {({ theme }) => {
        return (
          <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#FFFFFF" }}>
            <StatusBar barStyle={"dark-content"} />
            <TouchableOpacity
              onPress={() => { navigation?.goBack() }}
              style={{ height: 50, width: 50, borderWidth: 0.1, borderRadius: 10, marginTop: 90, alignItems: "center", justifyContent: "center" }}
            >
              <MaterialIcons name="arrow-back-ios" size={20} color={theme?.lightDark} style={{ left: 4 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 35, width: "90%", marginVertical: 30, fontFamily: theme?.semiBold, color: theme?.lightDark }}>Welcome back! Glad to see you, Again!</Text>
            <Input
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ color: theme?.lightDark }}
              placeholderTextColor={theme?.lightDark}
              containerStyle={{ height: 64, backgroundColor: theme?.lighterBackground, borderWidth: 0.1, borderRadius: 8, marginBottom: 20 }}
              style={{ height: 64, paddingLeft: 20, fontFamily: theme?.light, fontSize: 14 }}
            />
            <Input
              placeholder="Enter your password"
              value={password}
              secureTextEntry={!visiblePassword}
              onChangeText={setPassword}
              rightIcon={
                visiblePassword ?
                  <Ionicons name="eye-outline" size={26} color={theme?.lightDark} onPress={() => setVisiblePassword(!visiblePassword)} />
                  :
                  <Ionicons name="eye-off-outline" size={26} color={theme?.lightDark} onPress={() => setVisiblePassword(!visiblePassword)} />
              }
              inputStyle={{ color: theme?.lightDark }}
              placeholderTextColor={theme?.lightDark}
              rightIconContainerStyle={{ justifyContent: "center", alignItems: "center" }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              containerStyle={{ height: 64, backgroundColor: theme?.lighterBackground, borderWidth: 0.1, borderRadius: 8 }}
              style={{ height: 64, paddingLeft: 20, fontFamily: theme?.light, fontSize: 14, }}
            />
            <Text style={{ fontSize: 12, fontFamily: theme?.light, marginLeft: "auto", marginVertical: 20 }}>Forgot Password?</Text>

            <TouchableOpacity
              style={{ height: 60, width: "100%", backgroundColor: theme?.tertiary, alignItems: "center", justifyContent: 'center', borderRadius: 10 }}
              onPress={handleLogin}>
              <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lighterBackground }}>Login</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Divider style={{ borderColor: theme?.lightDark, minHeight: 1, minWidth: 60 }} />
              <Text
                onPress={() => navigation.navigate('Register')}
                style={{ textAlign: "center", marginHorizontal: 10 }}
              >
                or
              </Text>
              <Divider style={{ borderColor: theme?.lightDark, minHeight: 1, minWidth: 60 }} />
            </View>
            <TouchableOpacity
              style={{ height: 60, width: "100%", marginTop: 20, alignItems: "center", justifyContent: 'center', borderRadius: 10, borderWidth: 0.1, borderColor: theme?.lightDark }}
            >
              <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark }}>Login With Google</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark, marginTop: "auto", textAlign: "center", marginBottom: 20 }}>
              {"Don't have an account?" + " "}
              <Text style={{ color: theme?.secondary, fontFamily: theme?.bold }}
                onPress={() => { navigation.navigate("Register") }}
              >
                Register Now
              </Text>
            </Text>

          </View>
        )
      }}
    </ThemeConsumer >

  );
};


export default LoginScreen;


