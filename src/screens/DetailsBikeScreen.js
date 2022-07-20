import React, { useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';


import MapView, { Marker, Callout } from 'react-native-maps';

import UserContext from '../components/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native'


const DetailsBikeScreen = ({ navigation }) => {
    const UserContext_ = useContext(UserContext);


    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={{
                        height: 220,
                        width: '100%',
                    }}
                    source={require('../images/velo-ville.png')}
                />
                <Text style={styles.txtLender}>Propriété de Maurice Lapin</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1, marginHorizontal: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center', top:-16 }}>Vélo V200</Text>
                        <Text style={{ fontSize: 14, color: '#000', textAlign: 'justify', top:-10 }}>Vélo léger et flexible, il est particulièrement adapté à la circulation urbaine. Le vélo peut être rapidement transporté dans les escaliers ou dans le métro et est donc le compagnon idéal dans la vie urbaine active.
                        </Text>

                        <Text style={styles.titleZone}>Caractéristiques</Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginVertical: '2%' }}>
                            <View>
                                <Text style={styles.txtfilter1}>Ville</Text>
                            </View>
                            <View>
                                <Text style={styles.txtfilter2}>Comme neuf</Text>
                            </View>
                        </View>

                        <Text style={styles.titleZone}>Accessoires fournis</Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: '2%' }}>
                            <View>
                                <Text style={styles.txtfilter3}>Casque</Text>
                            </View>
                            <View>
                              <Text style={styles.txtfilter3}>Pompe</Text>
                            </View>
                            <View>
                               <Text style={styles.txtfilter3}>Antivol</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: '2%' }}>
                            <View>
                            <Text style={styles.txtfilter3}>Sacoches</Text>
                            </View>
                            <View>
                               <Text style={styles.txtfilter3}>Sonnette</Text>
                            </View>
                        </View>

                        <Text style={styles.titleZone}>Moyen de caution</Text>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={styles.txtZone}>Pièce d’identité</Text>
                            <Text style={styles.txtZone}>Chèque de caution 200 €</Text>
                        </View>

                        <TouchableOpacity style={{alignItems:'center'}} onPress={() => Linking.openURL(`mailto:maurice.lapin@gmail.com?subject=Emprunt vélo via BikeLend&body=Bonjour,\n\n\n Cordialement, \n${UserContext_.user.displayName} \n\n Message envoyé grace à l'application BikeLend `) }><Text style={styles.btnLend}>Envoyer un mail au loueur</Text></TouchableOpacity>

                        <Text style={styles.titleZone}>Localisation</Text>
                        <Text style={styles.txtZone}>La localisation exacte vous sera communiquée par le loueur</Text>

                    </View>
                </View>
    <MapView
                    style={{ width: '100%', height: 135, backgroundColor: 'white', marginTop: '2%' }}
                    maxZoomLevel={16}
                    initialRegion={{
                        latitude: 49.4927598,
                        longitude: 0.1134049,
                        latitudeDelta: 0,
                        longitudeDelta: 0.0131,
                    }}
                >
                    <Marker icon={require('../images/roundloca.png')} width={75} height={75} 
                    coordinate={{
                        latitude: 49.4927598,
                        longitude: 0.1134049,
                    }} >
                        <Callout><Text>Vélo La Manu</Text></Callout>
                    </Marker>
                </MapView>
            </ScrollView>
        </View>
    );
};
export default DetailsBikeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4E285',
    },
    txtfilter1: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        backgroundColor: '#CC2A2A',
        borderRadius: 25,
        width: 100,
        height: 25,
        justifyContent: 'center',
        paddingTop: 2,
        marginRight: '3%',
    },
    txtfilter2: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        backgroundColor: '#34B541',
        borderRadius: 25,
        marginHorizontal: 8,
        width: 100,
        height: 25,
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 2,
        textAlign: 'center'
    },
    txtfilter3: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        backgroundColor: '#302C2C',
        borderRadius: 25,
        width: 100,
        height: 25,
        justifyContent: 'center',
        marginRight: '4.5%',
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 2,
        textAlign: 'center'
    },
    txtLender: {
        color: '#f9c74f', fontWeight: 'bold', textAlign: 'center', marginRight: '2%', fontSize: 28, top: -120, transform: [{ rotate: '-30deg'}]
    },
    titleZone: {
        fontSize: 16, color: '#000', fontWeight: 'bold'
    },
    txtZone: {
        fontSize: 13, color: '#000', marginBottom: 2
    },
    btnLend: {
        paddingTop: 4,
        backgroundColor: '#5B8E7D',
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
        width: '80%',
        height: 40,
        marginVertical: 10,
        borderRadius: 10,
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
