import React, { useCallback, useEffect, useState } from 'react';
'expo-location';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import {Position} from '../../interfaces'
import MapView, { Marker } from 'react-native-maps';
import {light, dark} from '.././../screens/styles'
import { Alert } from 'react-native';
import {dayOrNight} from '../../utils'

const Map:React.FC = ()=>{
    const [origin, setOringin] = useState({
     longitude:-43.0681344,
     latitude: -22.8401444
    } as Position);

    const [dayOrnight, setDayOrnight] = useState('')
    

    const getUserLcoation = useCallback(async()=>{
        try {
          const {status} = await requestForegroundPermissionsAsync()
          if(status === 'granted'){
            const response = await getCurrentPositionAsync()
            const current: Position = {latitude: response.coords.latitude, longitude: response.coords.longitude}
            setOringin(current)
          }else{
             Alert.alert('ATENÇÃO','Para melhor utilização do app é necessário permitir o uso da localização')
          }
         
        } catch (error) {
          console.log(error)
        }
    },[])

    useEffect(() => {
        const dayornight = dayOrNight();
        setDayOrnight(dayornight)
        getUserLcoation();
    }, []);
    
    return(
      <>
        <MapView
          initialRegion={{
            latitude: origin.latitude ,
            longitude: origin.longitude ,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0033,
          }}
          zoomEnabled={false}
          loadingEnabled={true}
          customMapStyle={dayOrnight === 'morning' ? light : dark}
          showsUserLocation
          showsMyLocationButton={true}
          toolbarEnabled={false}	
          style={{
            height: '100%',
            width: '100%',
          }}
      >

        <Marker
          coordinate={{
                latitude: origin.latitude,
                longitude: origin.longitude     
          }}
          title="Você esta aqui!"
        />
      </MapView>
      </>
    )
}

export default Map;