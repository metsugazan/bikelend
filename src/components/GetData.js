import React, { useState,useEffect,useContext } from "react";

import firestore from '@react-native-firebase/firestore';

export const GetData = async (id) => {
    
    /*let expense__ = 0
    let incomes__ = 0
    let expenses__array = []
    let incomes__array = []
    let solde__ = 0*/

    await firestore()
    .collection('Users')
    .doc(id)
    /*.collection('expenses')
    .get()
    .then(documentSnapshot => {

        if (documentSnapshot != null) {

        expenses__array = documentSnapshot._docs

        for (let i = 0; i < documentSnapshot._docs.length; i++) {
            
            expense__ = expense__ + Number(documentSnapshot._docs[i].data().amount)
            
        }


        } else {
        console.log(" Document expenses does not exist ");
        }

    })

    await firestore()
    .collection('Users')
    .doc(id)
    .collection('incomes')
    .get()
    .then(documentSnapshot => {

        if (documentSnapshot != null) {

        incomes__array = documentSnapshot._docs

        for (let i = 0; i < documentSnapshot._docs.length; i++) {
            
            incomes__ = incomes__ + Number(documentSnapshot._docs[i].data().amount)
            
        }
        } else {
        console.log(" Document incomes does not exist ");
        }

    })

    solde__ = incomes__ - expense__

    return {expense__,incomes__,expenses__array,incomes__array,solde__}*/

}