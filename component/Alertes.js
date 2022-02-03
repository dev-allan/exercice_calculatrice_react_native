import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

export const Alertes = () => {
  /**
   * fonction qui permet d'afficher une alerte
   */
  const handleAlerte = () => {
    Alert.alert(
      " titre de l'alerte ",
      " contenu du message de l'alerte ",
      [
        {text: 'close it', onPress: () =>  console.warn('dismissed')},
        {text: 'cancel', onPress: () =>  console.warn('dismissed')},
        {text: 'ok', onPress: () =>  console.warn('dismissed')},
      ],
      {cancelable: true, onDismiss: {handleClose}},
    );
  };

  const handleClose = () => {
    console.warn('dismissed');
  };
  return (
    <View>
      <Text>ceci est le composant alertes</Text>
      <Button title="Ne pas toucher" onPress={handleAlerte} />
    </View>
  );
};

export default Alertes;
