import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf2f4',
        flex: 1,
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
    },
    searchContainer: {
        backgroundColor: '#2d2b42',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:4,
    },
    searchIcon: {
        paddingLeft:12,
    },
    searchInput: {
        padding: 8,
        fontFamily:'Poppins_400Regular',
        color:'#fff',
        width:'100%',
        fontSize:16,
    }

});

export default styles;
