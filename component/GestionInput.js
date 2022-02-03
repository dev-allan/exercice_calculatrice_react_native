import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, { useState } from 'react';

export const GestionInput = () => {
    const [nom, setNom] = useState("");
    const [ecriture, setecriture] = useState(true)

    const handleInput = () => {
        setecriture(!ecriture)
    }

    /**
     * fonction qui permet d'enregistrer le changement de nom de l'input
     * @param {*} value de l'input
     */
    const handleChangeName = (value) => {
        setNom(value)
    }
  return (
    <View style={styles.body}>
        {/* utilisation de la balise TextInput */}
      <TextInput
        onChangeText={handleChangeName}
        // options classique react
        placeholder='ecrire ici votre nom'
        // options specifiques
        style={styles.input}
        maxLength={300}
        editable={ecriture}
        keyboardType='default'
        multiline={true}
      />
      <View>
          <Text style={styles.text}>Bonjour : {nom}</Text>
      </View>
      <Pressable onPress={handleInput}>
          <Text>{ecriture? "inout actif " : "input inactif "}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
    },
    text:{
        fontSize:25,
        colors:"red"
    },
    input:{
        width:300,
        borderWidth:1,
        borderColor:"green",
        borderRadius:5,
        fontSize:20,
        color:"black"
    }
})
export default GestionInput;
