import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-elements/dist/buttons/Button';

export const TouchPress = () => {
  const [compteur1, setCompteur1] = useState(0);

  const handlePlus = () => {
    setCompteur1(compteur1+1);
  };

  const handleMoins = () => {
    setCompteur1(compteur1-1);
  };

  const handleReset = () => {
      setCompteur1(0)
  }
  return (
    <View>
      {/* interactif via bouton */}
      <Text> compteur : {compteur1}</Text>
      <Button title="+" onPress={() => handlePlus()} />
      {/* utilisation de la balise TouchableOpacity */}
      <TouchableOpacity onPress={() => handleMoins()}>
        <Text>Moins de clic ! </Text>
      </TouchableOpacity>
      {/* utilisation de la balise Pressable */}
      <Pressable onPress={handleReset}>
        <Text>reset du compteur</Text>
      </Pressable>
    </View>
  );
};

export default TouchPress;
