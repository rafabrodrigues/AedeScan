import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b2d42',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    titleContainer: {
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    title: {
        color: '#d90429',
        fontSize: 60,
        fontFamily: 'Poppins_700Bold',
        padding: 0,
        margin: 0,
    },
    subTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginBottom:'25%'
    },
    subTitle: {
        textAlign: 'center',
        color: '#8d99ae',
        fontFamily: 'Poppins_400Regular_Italic',
        alignItems: 'center',
        fontSize: 18
    },
    buttonContainer: {
        width: '90%',
        gap: 16,
        marginBottom: '10%',
    },
});

export default styles;
