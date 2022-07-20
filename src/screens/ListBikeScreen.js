import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';


import UserContext from '../components/UserContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListBikeScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '10%' }} >Aucun vélo disponible autour de vous</Text>
        <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('details')}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  height: 120,
                  width: '100%',
                  resizeMode: 'contain',
                  borderRadius: 5
                }}
                source={require('../images/velo-ville.png')}
              />
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, justifyContent: 'flex-start', marginHorizontal: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Vélo de ville</Text>
                <Text style={{ fontSize: 14, color: '#000' }}>Pièce d’identité</Text>
                <Text style={{ fontSize: 14, color: '#000' }}>Accessoires fournis</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.filter}><Text style={styles.txtfilter}>Ville</Text></TouchableOpacity>
                  </View>
                  <View style={{ flex: 1.8 }}>
                    <TouchableOpacity style={styles.filter2}><Text style={styles.txtfilter}>Comme neuf</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '7%', fontSize: 16, color: "#bc4b51" }} >Retour sur la carte</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListBikeScreen;

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
    borderRadius: 5,
    width: '100%',
    height:25,
    justifyContent:'center',
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
    borderRadius: 5,
    marginHorizontal: 8,
    width: '100%',
    height:25,
    justifyContent:'center'
  },
  txtfilter: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
