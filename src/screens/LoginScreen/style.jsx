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
    },
    title: {
        color: '#d90429',
        fontSize: 60,
        fontFamily: 'Poppins_700Bold',
    },
    subTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginBottom: '25%'
    },
    subTitle: {
        textAlign:'center',
        color: '#8d99ae',
        fontFamily: 'Poppins_400Regular_Italic',
        alignItems: 'center',
        fontSize: 18,
        marginTop: -20,
    },
    buttonContainer: {
        width: '90%',
        gap: 16,
        marginBottom: '15%',
    },
});

export default styles;
