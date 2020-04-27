import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#111111',
    },

    shoppingCart: {   },
    cartTitle: {//carrinho de compra
        marginTop: 30,
        marginBottom: 4,
        fontSize: 18,
        color: '#FFF',
        fontWeight: "bold",
    }, 
    itensSelect: {
        marginTop: 0,
        padding: 6,
        marginBottom: 3,
        backgroundColor: '#303030'
    },
    itensSelectTitle: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: "bold",
    },
    itensSelectProduct: {
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itensSelectProductText: {
        color: '#FFF',
        fontSize: 12,
    }
})