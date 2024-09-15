import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ onPress, title, isSelected = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={isSelected ? styles.buttonContainer : styles.buttonContainerWhite}>

            {isSelected ? <LinearGradient
                colors={['#70E1F5', '#FFD194']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </LinearGradient> :
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonTextInvert}>{title}</Text>
                </View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 50,
        paddingHorizontal: 6,
        overflow: 'hidden',
        height: 30, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainerWhite: {
        borderRadius: 50,
        paddingHorizontal: 6,
        overflow: 'hidden',
        height: 30, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 1,
    },
    gradient: {
        borderRadius: 50,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        justifyContent: 'center',
        paddingHorizontal: 8,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#000',
        fontSize: 16, // Adjust font size as needed
    }, buttonTextInvert: {
        color: '#fff',
        fontSize: 16, // Adjust font size as needed
    },
});

export default GradientButton;
