import React from 'react'
import { View, FlatList, Text } from 'react-native'

import style from './styles'

export default function HomePage() {
    return (
        <View style={style.container}>
            <View style={style.header}>

                <View style={style.shoppingCart}>
                    <Text style={style.cartTitle}>Carinho de Compra</Text>

                      <FlatList 
                        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
                        keyExtractor={itens => String(itens)}
                        renderItem={() => (
                            <View style={style.itensSelect}> 
                        
                            <Text style={style.itensSelectTitle}>Item 1</Text>
                            
                            <View style={style.itensSelectProduct}> 
                             <Text>Manga Naruto</Text> 
                             <Text>R$ 9,90</Text>
                            </View>
        
    
                        </View>
                        )}
                      />

                    
                </View>
            </View>
        </View>
    )
}