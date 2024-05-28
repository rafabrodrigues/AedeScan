import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ButtonLogin from '../../components/ButtonLogin'

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>AedeS<Text style={{ color: '#8d99ae' }}>can</Text></Text>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Uma pequena atitude, pode fazer uma grande diferença na luta contra a dengue</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonLogin
                    text='Entrar na minha conta'
                    buttonBackgroundColor='#edf2f4'
                    buttonTextColor='#2b2d42'
                />
                <ButtonLogin
                    text='Não possuo uma conta'
                    buttonBackgroundColor='#2b2d42'
                    buttonTextColor='#edf2f4'
                    borderWidth={2}
                    borderColor='#edf2f4'
                />
            </View>
        </View>
    )
}