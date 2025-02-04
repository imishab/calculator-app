import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/types';

const SplashScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Calculator');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
            <Text style={styles.appName}>My Calculator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1e',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    appName: {
        fontSize: 24,
        color: '#ffffff',
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default SplashScreen;