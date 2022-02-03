// import de React et des éléments react-native
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Introduction from './component/Introduction';
import {Statusbar} from './component/Statusbar';
import Scroler from './component/Scroler';
import FlatNest from './component/FlatNest';
import FlexBox from './component/FlexBox';
import Navbar from './component/Exercice/Navbar';
import Sidebar from './component/Exercice/Sidebar';
import Content from './component/Exercice/Content';
import TouchPress from './component/TouchPress';
import GestionInput from './component/GestionInput';
import Alertes from './component/Alertes';
import Calculatrice from './component/ExerciceCalculatrice/Calculatrice';

// structure d'un composant fonction classique
export const App = () => {
  return (
    // balise <View></View> qui remplace les <div></div>
    <SafeAreaView>
      <ScrollView>
        <Calculatrice/>
        {/* <TouchPress/> */}
        {/* <GestionInput/> */}
        {/* <Alertes/> */}
        {/* <View style={styles.body}> */}
        {/* les balises <Text></Text> qui remplace les balises <p></p> */}
        {/* <Text>Bienvenue, ceci est le composant APP</Text> */}
        {/* <Introduction monNom={'Allan'} /> */}
        {/* <Statusbar /> */}
        {/* <Scroler /> */}
        {/* <FlatNest /> */}
        {/* <FlexBox/> */}
        {/* </View> */}
        {/* <Navbar /> */}
        {/* <View style={styles.exerciceFlex}> */}
          {/* <View> */}
            {/* <Sidebar /> */}
          {/* </View> */}
          {/* <View style={styles.content}> */}
            {/* <Content /> */}
          {/* </View> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  exerciceFlex: {
    flexDirection: 'row',
  },
  content: {
    top: '25%',
    left: "25%",
    position: 'relative',
  },
});

export default App;
