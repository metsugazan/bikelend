import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import { TextInput, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import UserContext from '../components/UserContext';
import { Picker } from '@react-native-picker/picker'


const LendBikeScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);

  const [caution, setCaution] = useState('')

  const [etat, setEtat] = useState('')
  const [type, setType] = useState('')

  const CautionList = [
    "Aucun",
    "Chèque",
    "Pièce d’identité",
  ]

  const EtatList = [
    "A définir",
    "Comme neuf",
    "Réparation",
    "Bon état",
    "Etat moyen"
  ]

  const TypeList = [
    "Aucun",
    "Tout terrain",
    "Ville",
    "Route",
    "Enfant",
    "Electrique",
    "Autre"
  ]

  const [Casque, setCasque] = useState(false)
  const [Lumière, setLumière] = useState(false)
  const [Sonnette, setSonnette] = useState(false)
  const [Antivol, setAntivol] = useState(false)
  const [Pompe, setPompe] = useState(false)
  const [Sacoches, setSacoches] = useState(false)
  const [Veste, setVeste] = useState(false)

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
          <Text>PHOTO VELO</Text>
          <TextInput
            style={{
              borderColor: '#5B8E7D',
              fontSize: 17,
              height: 40,
              width: '100%',
              borderWidth: 3,
              paddingHorizontal: 15,
              marginTop: 5,
              alignSelf: 'center',
              backgroundColor: '#F4A259',
              borderRadius: 10,
              color: '#F2E8E8',
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6.84,
              elevation: 5,
            }}
            placeholder="Nom du vélo"
            returnKeyType="next"
            autoCapitalize="none"
            theme={{
              roundness: 10,
              colors: { primary: '#000', underlineColor: 'transparent' },
            }}
          />

          <TextInput
            style={{
              borderColor: '#5B8E7D',
              fontSize: 17,
              width: '100%',
              borderWidth: 3,
              paddingHorizontal: 15,
              marginTop: 5,
              alignSelf: 'center',
              backgroundColor: '#F4A259',
              borderRadius: 10,
              color: '#F2E8E8',
              multiLine: true,
              numberOfLines: 3,
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6.84,
              elevation: 5,
            }}
            placeholder="Description"
            returnKeyType="next"
            autoCapitalize="none"
            theme={{
              roundness: 10,
              colors: { primary: '#000', underlineColor: 'transparent' },
            }}
          />
          <Text style={styles.txtTitle}>Type de vélo</Text>
          <View style={styles.dropDownStyle}>
            <Picker
              style={styles.input}
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => {
                setType(itemValue)
              }}
            >
              {TypeList.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>
          <Text style={styles.txtTitle}>Etat du vélo</Text>
          <View style={styles.dropDownStyle}>
            <Picker
              style={styles.input}
              selectedValue={etat}
              onValueChange={(itemValue, itemIndex) => {
                setEtat(itemValue)
              }}
            >
              {EtatList.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>

          <Text style={styles.txtTitle}>Accessoires mis à disposition</Text>
          <View style={{ flexDirection: 'row', alignSelf:'center' }}>

          <Checkbox.Item label="Lumière " labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Lumière ? 'checked' : 'unchecked'}
              onPress={() => { setLumière(!Lumière) }} />

            <Checkbox.Item label="Casque  " labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Casque ? 'checked' : 'unchecked'}
              onPress={() => { setCasque(!Casque) }} />

            <Checkbox.Item label="Sonnette" labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Sonnette ? 'checked' : 'unchecked'}
              onPress={() => { setSonnette(!Sonnette) }} />
          </View>
          <View style={{ flexDirection: 'row', alignSelf:'center', left: 4 }}>
          <Checkbox.Item label="Pompe " labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Pompe ? 'checked' : 'unchecked'}
              onPress={() => { setPompe(!Pompe) }} />

            <Checkbox.Item label="Antivol  " labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Antivol ? 'checked' : 'unchecked'}
              onPress={() => { setAntivol(!Antivol) }} />

            <Checkbox.Item label="Sacoches" labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Sacoches ? 'checked' : 'unchecked'}
              onPress={() => { setSacoches(!Sacoches) }} />
          </View>
          <View style={{ flexDirection: 'row', alignSelf:'center' }}>
            <Checkbox.Item label="Veste réfléchissante" labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={Veste ? 'checked' : 'unchecked'}
              onPress={() => { setVeste(!Veste) }} />
          </View>


          <Text style={styles.txtTitle}>Moyen de caution</Text>
          <View style={styles.dropDownStyle}>
            <Picker
              style={styles.input}
              selectedValue={caution}
              onValueChange={(itemValue, itemIndex) => {
                setCaution(itemValue)
              }}
            >
              {CautionList.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>



          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text style={styles.btnValidation}>Valider</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LendBikeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E285',
    flex: 1
  },
  btnValidation: {
    backgroundColor: '#F4A259',
    color: '#FEFEE3',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 7,
    width: 250,
    height: 60,
    marginVertical: 40,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
  textInput: {
    fontSize: 17,
    height: 50,
    width: 300,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 10,
    color: '#F2E8E8',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
  txtTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  dropDownStyle: {
    borderColor: '#5B8E7D',
    paddingHorizontal: 5,
    borderWidth: 3,
    backgroundColor: '#F4A259',
    borderRadius: 8,
    color: '#FFF',
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
    marginVertical: 10
  },
});
