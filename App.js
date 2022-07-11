

import React, {useState, useEffect} from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';

//import UserContext from './src/components/UserContext';
import  auth from '@react-native-firebase/auth';


const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      primary: "#2E2E2E",
    },
  roundness: 10,
};

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (user != null){
    SetSolde_(user.uid)
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    if (user != null){
      SetSolde_(user.uid)
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
      console.log('Deconnecter')
  }
  
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
        </PaperProvider>
  );
};