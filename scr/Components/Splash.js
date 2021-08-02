import React from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
    const fadeAnim = new Animated.Value(0);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true
        }).start();
    };

    return (
        <View style={estilo.container}>
            <LottieView
                source={require('../../assets/harpianimation.json')}
                autoPlay
                loop={false}
                onAnimationFinish={() => {
                    navigation.replace('Login')
                }}
                style={estilo.load}
            />
            {fadeIn()}
            <View style={estilo.cardTitulo}>
                <Animated.Text  style={[estilo.titulo, {opacity: fadeAnim}]}>Harpia Mobile</Animated.Text>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    load: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: 15,
        bottom: 15,
        backgroundColor: 'transparent',
        width: '70%',
        height: '70%'
    },
    cardTitulo: {
        position: 'relative',
        bottom: 160
    },
    titulo: {
        fontSize: 26,
        fontStyle: 'italic',
        color: 'rgb(48,163,178)',
    }
})

export default Splash;