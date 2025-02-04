import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    const [result, setResult] = useState('0');

    const handlePress = (value: any) => {
        if (value === 'C') {
            setResult('0');
        } else if (value === '⌫') {
            setResult(result.length > 1 ? result.slice(0, -1) : '0');
        } else if (value === '=') {
            try {
                const formattedResult = result.replace(/x/g, '*').replace(/÷/g, '/');
                setResult(eval(formattedResult).toString());
            } catch (error) {
                setResult('Error');
            }
        } else {
            setResult(result === '0' ? value.toString() : result + value.toString());
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{result}</Text>
            </View>
            <View style={styles.buttonGrid}>
                {['⌫', 'C', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+'].map((value, index) => (<TouchableOpacity
                    key={index}
                    style={[
                        styles.button,
                        typeof value === 'number' || value === '.' ? styles.numberButton : styles.operatorButton,
                    ]}
                    onPress={() => handlePress(value)}
                >
                    <Text style={styles.buttonText}>{value}</Text>
                </TouchableOpacity>
                ))}

                <View style={styles.bottomRow}>
                    <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handlePress(0)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.numberButton]} onPress={() => handlePress('.')}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={() => handlePress('=')}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        padding: 20,
    },
    display: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 20,
    },
    displayText: {
        fontSize: 72,
        color: '#ffffff',
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        width: '22%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginVertical: 8,
    },
    numberButton: {
        backgroundColor: '#2c2c2e',
    },
    operatorButton: {
        backgroundColor: '#ff9500',
    },
    buttonText: {
        fontSize: 32,
        color: '#ffffff',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    zeroButton: {
        width: '22%',
        backgroundColor: '#2c2c2e',
    },
    equalsButton: {
        width: '48%',
        backgroundColor: '#ff9500',
    },
});

export default Calculator;