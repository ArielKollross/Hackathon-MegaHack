import React, { useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
 
export default function QrCodeBuy(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [AddToShopCart, setAddToShopCart] =useState([])
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      
      if(type == 256){
        AddToShopCart.push({
          id: 2,
          name: "Manga One Punch Man", 
          price: 20.99 ,
        })
        alert(AddToShopCart)
        alert(`Add new item to shop cart item: ${AddToShopCart}`)
      }
        
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
  
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
} 