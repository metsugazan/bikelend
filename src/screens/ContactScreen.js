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

const ContactScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);


  return (
    <View style={styles.container}>
        <Text>Contact</Text>
    </View>
  );
};
export default ContactScreen;

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
