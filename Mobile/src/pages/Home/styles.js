import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    shoppingCart: {    },
    cartTitle: {marginTop: 30}, //carrinho de compra
    itensSelect: {
        marginTop: 0,
        padding: 6,
        marginBottom: 3,
        backgroundColor: '#FFF'
    },
    itensSelectTitle: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold",
    },
    itensSelectProduct: {
        fontSize: 12,
        color: '#737380',
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})