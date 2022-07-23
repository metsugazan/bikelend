import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../components/UserContext';
import MarkersComponent from "../components/MarkersComponent";
import MapView, { Marker, Callout } from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);

  const [markers, setMarkers] = useState([])

  const fetchMarkers = async () => {
    firestore().collection("bike").get().then((querySnapshot) => {
         
      querySnapshot.forEach(element => {
          var marker = element.data();
          setMarkers(arr => [...arr , marker]);
      });
  })
  }



  useEffect(() => {
    fetchMarkers()
  }, [])



  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#2B6747' }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/*<Searchbar
            placeholder="Rechercher"
            //onChangeText={onChangeSearch}
            style={{ flexDirection: 'row-reverse', backgroundColor: '#8CB369', height: 50, width: '100%', color: 'white', borderLeftWidth: 2, borderRightWidth: 2 }}
            theme={{
              roundness: 5,
              colors: { primary: '#F4E285', underlineColor: 'transparent', placeholder: '#F4E285' },
            }}
          value={"Le Havre"}
          />*/}
          <Text style={{ textAlign: 'center', paddingTop: 5, fontSize: 15, fontWeight: 'bold', backgroundColor: '#8CB369', height: 50, width: '100%', color: 'white', borderLeftWidth: 2, borderRightWidth: 2 }}
          >Bonjour { /*UserContext_.user.displayName*/} ! {'\n'} Une petite virée à vélo?</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{ backgroundColor: '#8CB369', alignItems: 'center', justifyContent: 'center', width: '100%', height: 50 }} onPress={() => navigation.navigate('List')}>
            <MaterialCommunityIcons name="file-document-multiple-outline" size={26} />
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 16 }}>liste</Text>

          </TouchableOpacity>
        </View>
      </View>

      <MapView
        style={{ width: '100%', height: '100%' }}
        minZoomLevel={11}
        maxZoomLevel={6}
        initialRegion={{
          latitude: 46.7236179,
          longitude: 2.4817092,
          latitudeDelta: 0,
          longitudeDelta: 0.0131,
        }}
      >

        {markers.map((marker, index) => (
            <MarkersComponent key={index} latitude={marker.latitude} longitude={marker.longitude} nom={marker.nom} />
        ))}

        {/*
          markers.map((marker, index) => (
            
              <View key={index}>
                <Marker coordinate={{
                  latitude:  marker.latitude ,
                  longitude:  marker.longitude ,
                }} >
                  <Callout><Text>{marker.nom}</Text></Callout>
                </Marker>
                </View>

          ))
              */}

        {/* <Marker coordinate={{
          latitude: 49.4927598,
          longitude: 0.1134049,
        }} >
          <Callout><Text>Vélo La Manu</Text></Callout>
        </Marker>

        <Marker coordinate={{
          latitude: 46.7236179,
          longitude: 2.4817092,
          latitudeDelta: 0,
          longitudeDelta: 0.0131,
        }} >
          <Callout><Text>Vélo V200</Text></Callout>
        </Marker>*/}
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  containerSolde: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B6747',

  },
  boxTransac: {
    flex: 2.5,
    marginHorizontal: 15,
  },
  txtTitleCol: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EEF1F1',
    textAlign: 'center',
    marginVertical: 5,
  },
  line: {
    flexDirection: 'row',
    flex: 0.19,
    marginBottom: 10,
  },
  lineLeft: {
    flex: 1.85,
    borderBottomWidth: 1,
    borderBottomColor: '#adabab',
    paddingBottom: 10,
  },
  lineRight: {
    flex: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: '#adabab',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  titleLine: {
    color: '#EEF1F1',
    textAlign: 'left',
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtSolde: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  containerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  btn: {
    alignItems: 'center',
  },
  dropDownStyle: {
    width: '50%',
    flex: 0.85,
    borderColor: '#838383',
    paddingHorizontal: 5,
    backgroundColor: '#adabab',
    borderRadius: 10,
    color: '#838383',
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
});
