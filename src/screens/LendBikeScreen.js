import React, { useContext, useState, useCallback } from 'react';
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
import firestore from '@react-native-firebase/firestore';
import * as Yup from 'yup';
import { Formik } from 'formik'
import * as ImagePicker from 'react-native-image-picker';
import { ModalPick } from '../components/ModalPick';
import { Avatar } from '../components/Avatar';


const LendBikeScreen = ({ navigation }) => {
  const UserContext_ = useContext(UserContext);


  const addIncomes = async ({ nom, description, type, latitude, longitude, etat, caution, Lumière, GPS, Casque, Sonnette, Antivol, Pompe, Sacoches, Veste }) => {
    await firestore().collection('bike').add({
      nom: nom,
      description: description,
      pseudo: UserContext_.user.displayName,
      type: type,
      latitude: 49.4927598,
      longitude: 0.1134049,
      etat: etat,
      Lumière: false,
      Casque: false,
      Sonnette: false,
      Antivol: false,
      GPS: false,
      Pompe: false,
      Sacoches: false,
      Veste: false,
      caution: caution,
      id: UserContext_.user.uid,
    }).then(() => {
      console.log('Vélo ajouté');
    }).catch(error => {
      console.log(error);
    })
  }

  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

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
  const [GPS, setGPS] = useState(false)

  const validationIncomes = Yup.object().shape({
    nom: Yup
    .string("nom invalide")
      .required("Mettre un nom"),
      description: Yup
      .string("nom invalide")
        .required("Mettre un nom"),
        type: Yup
        .string()
        .required("Selectionner une catégorie"),
        etat: Yup
        .string()
        .required("Selectionner une catégorie"),
        caution: Yup
        .string()
        .required("Selectionner une catégorie"),

  })

  const initialValues = {
    nom: '',
    description: '',
    type: '',
    etat: '',
    caution: '',
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
            <Formik
      initialValues={initialValues}
      validationSchema={validationIncomes}
      onSubmit={values => [navigation.navigate('home', { values }), console.log(values)]}

    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <ScrollView>

      <View style={styles.screen}>
      <Avatar uri={uri} onPress={() => setVisible(true)} />
      <ModalPick
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
        <View style={{ marginVertical: 35, marginHorizontal: 20 }}>
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
            onChangeText={handleChange('nom')}
                onBlur={handleBlur('nom')}
            theme={{
              roundness: 10,
              colors: { primary: '#000', underlineColor: 'transparent' },
            }}
          />
                        {errors.nom &&
                <Text style={styles.error}>{errors.nom}</Text>
              }

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
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            theme={{
              roundness: 10,
              colors: { primary: '#000', underlineColor: 'transparent' },
            }}
          />


          <Text style={styles.txtTitle}>Type de vélo</Text>
          <View style={styles.dropDownStyle}>
            <Picker
              style={styles.input}
              selectedValue= {values.type}
              onValueChange={handleChange('type')}
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
              selectedValue={values.etat}
              onValueChange={handleChange('etat')}
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
              value={values.Lumière}
              onValueChange={handleChange('Lumière')}
            
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
              <Checkbox.Item label="GPS" labelStyle={{ color: '#000' }} uncheckedColor='#bc4b51' color='#bc4b51'
              status={GPS ? 'checked' : 'unchecked'}
              onPress={() => { setGPS(!GPS) }} />
          </View>


          <Text style={styles.txtTitle}>Moyen de caution</Text>
          <View style={styles.dropDownStyle}>
            <Picker
              style={styles.input}
              selectedValue={values.caution}
              onValueChange={handleChange('caution')}
            >
              {CautionList.map((item, index) => {
                return (<Picker.Item label={item} value={item} key={index} />)
              })}
            </Picker>
          </View>

          <TouchableOpacity style={{  alignItems: 'center', marginVertical: 10, justifyContent: 'center', height: 50, borderRadius: 30 }} onPress={() => {
                handleSubmit()
                if (isValid) {
                  addIncomes(values)
                }
              }} title="Submit">
                <Text style={styles.btnValidation}>Ajouter</Text>
              </TouchableOpacity>


        </View>

      </ScrollView>
      )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default LendBikeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E285',
    flex: 1
  },
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
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
