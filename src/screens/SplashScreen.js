import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ThemeConsumer, Theme, Input } from '@rneui/themed';
const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ImageBackground source={require("../assets/splashBg.png")} style={{ height: "100%", width: "100%" }} >
                            <View style={{ marginTop: "auto", marginBottom: 30 }}>
                                <Text style={{ fontSize: 30, width: "60%", fontFamily: theme?.medium, left: "8%", color: "white" }} >Start your journey with your intention</Text>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate("Login") }}
                                    style={{ height: 60, width: "90%", backgroundColor: theme?.tertiary, alignSelf: "center", borderRadius: 40, marginVertical: 10, justifyContent: "center", alignItems: "center" }}
                                >
                                    <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: "white" }} >Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 60, width: "90%", backgroundColor: "white", alignSelf: "center", borderRadius: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 16, fontFamily: theme?.medium }} >Register</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                )
            }}
        </ThemeConsumer >
    )
}

export default SplashScreen