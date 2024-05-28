import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './style'
const ButtonLogin = ({ text, buttonBackgroundColor, buttonTextColor, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity style={[
            styles.button,
            {
                backgroundColor: buttonBackgroundColor,
                borderWidth: borderWidth,
                borderColor: borderColor
            }]}>
            <Text style={[styles.buttonText, { color: buttonTextColor }]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonLogin;

