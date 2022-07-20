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

import { Button } from 'react-native-paper';

import MapView, { Marker, Callout } from 'react-native-maps';

import UserContext from '../components/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center', top:-10 }}>Vélo de ville</Text>
                        <Text style={{ fontSize: 14, color: '#000', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                            at nulla vel dolor luctus lacinia sit amet quis orci. Nam posuere
                            pretium mollis. Donec nec euismod magna, sit amet rutrum enim.
                        </Text>

                        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('contact')}><Text style={styles.btnLend}>Louer ce vélo</Text></TouchableOpacity>

                        <Text style={styles.titleZone}>Caractéristiques</Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginVertical: '2%' }}>
                            <View>
                                <TouchableOpacity style={styles.filter}><Text style={styles.txtfilter}>Ville</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.filter2}><Text style={styles.txtfilter}>Comme neuf</Text></TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.titleZone}>Accessoires fournis</Text>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: '2%' }}>
                            <View>
                                <TouchableOpacity style={styles.filter3}><Text style={styles.txtfilter}>Casque</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.filter3}><Text style={styles.txtfilter}>Pompe</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.filter3}><Text style={styles.txtfilter}>Antivol</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: '2%' }}>
                            <View>
                                <TouchableOpacity style={styles.filter3}><Text style={styles.txtfilter}>Sacoches</Text></TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.filter3}><Text style={styles.txtfilter}>Sonnette</Text></TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.titleZone}>Moyen de caution</Text>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={styles.txtZone}>Accessoires fournis</Text>
                            <Text style={styles.txtZone}>Pièce d’identité</Text>
                        </View>
                        
                        <Text style={styles.titleZone}>Localisation</Text>
                        <Text style={styles.txtZone}>La localisation exacte vous sera communiquée après la réservation.</Text>

                    </View>
                </View>
    <MapView
                    style={{ width: '100%', height: 135, backgroundColor: 'white', marginTop: '2%' }}
                    initialRegion={{
                        latitude: 49.4927598,
                        longitude: 0.1134049,
                        latitudeDelta: 0,
                        longitudeDelta: 0.0131,
                    }}
                >
                    <Marker coordinate={{
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
    filter: {
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
        marginRight: '5%',
    },
    filter2: {
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
    },
    filter3: {
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
        marginRight: '4%',
    },
    txtfilter: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txtLender: {
        color: '#bc4b51', fontWeight: 'bold', textAlign: 'right', marginRight: '2%', fontSize: 22, top: -30
    },
    titleZone: {
        fontSize: 16, color: '#000', fontWeight: 'bold'
    },
    txtZone: {
        fontSize: 14, color: '#000', marginBottom: 2
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
