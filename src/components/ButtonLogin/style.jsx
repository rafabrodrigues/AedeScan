import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b2d42',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        shadowColor: "#ededeb",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 4,
        shadowRadius: 4,

        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',

    },
});

export default styles;
