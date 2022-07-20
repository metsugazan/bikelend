import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import { TextInput, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import UserContext from '../components/UserContext';
import { Picker } from '@react-native-picker/picker'


const LendBikeScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);

  const [caution, setCaution] = useState('')
  const [accessoire, setAccessoire] = useState('')

  const [etat, setEtat] = useState('')
  const [checked, setChecked] = useState('')
  const [type, setType] = useState('')

  const CautionList = [
    "Chèque",
    "Pièce d’identité",
  ]

  const EtatList = [
    "Comme neuf",
    "Réparation",
    "Bon état",
    "Etat moyen"
  ]

  const TypeList = [
    "Tout terrain",
    "Ville",
    "Route",
    "Enfant",
    "Electrique",
    "Autre"
  ]

  const AccessoireList = [
    "Casque",
    "Lumière",
    "Sonnette",
    "Antivol",
    "Pompe",
    "Sacoches",
    "Veste réfléchissante",
  ]

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <TextInput
          style={{
            borderColor: '#5B8E7D',
            fontSize: 17,
            height: 50,
            width: 300,
            borderWidth: 3,
            paddingHorizontal: 15,
            marginTop: 5,
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
            width: 300,
            borderWidth: 3,
            paddingHorizontal: 15,
            marginTop: 5,
            backgroundColor: '#F4A259',
            borderRadius: 10,
            color: '#F2E8E8',
            multiLine: true,
            numberOfLines: 1,
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
              //accessoire = itemValue
              setType(itemValue)
            }}
          // selectedValue={accessoire}
          >
            {TypeList.map((item, index) => {
              return (<Picker.Item label={item} value={item} key={index}  />)
            })}
          </Picker>
        </View>
        <Text style={styles.txtTitle}>Etat du vélo</Text>
        <View style={styles.dropDownStyle}>
          <Picker
            style={styles.input}
            selectedValue={etat}
            onValueChange={(itemValue, itemIndex) => {
              //accessoire = itemValue
              setEtat(itemValue)
            }}
          // selectedValue={accessoire}
          >
            {EtatList.map((item, index) => {
              return (<Picker.Item label={item} value={item} key={index}  />)
            })}
          </Picker>
        </View>

        <Text style={styles.txtTitle}>Accessoires mis à disposition</Text>
        <View style={styles.dropDownStyle}>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
        </View>
            <Text>{accessoire}</Text>
        <Text style={styles.txtTitle}>Moyen de caution</Text>
        <View style={styles.dropDownStyle}>
          <Picker
            style={styles.input}
            selectedValue={caution}
            onValueChange={(itemValue, itemIndex) => {
              //caution = itemValue
              setCaution(itemValue)
            }}
          // selectedValue={caution}
          >
            {CautionList.map((item, index) => {
              return (<Picker.Item label={item} value={item} key={index} />)
            })}
          </Picker>
        </View>



        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={styles.btnValidation}>Valider</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LendBikeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E285',
    alignItems: 'center',
    justifyContent: 'center',
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
