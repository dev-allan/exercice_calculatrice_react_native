import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import cat from './img/cat.jpeg';

const CoorectionFlex = () => {
    const handleCat = () => {
        fetch('http://aws.random.cat/meow')
        .then(responseOk)
        .then(traitementData)
    }

    /**
     * 
     * @param {*} res 
     * @returns res json
     */
    const responseOk = (res) => {
        return res.json()
    }

    /**
     * 
     * @param {*} data doit contenir un file => image de chat
     */
    const traitementData = (data) => {
        setImgCentral(data.file)
    }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="rowing" onPress={handleCat}/>
        <Icon name="rowing" />
        <Icon name="rowing" />
      </View>
      <View style={styles.corps}>
        <View styles={styles.sidebar}></View>
        <Icon name="rowing" />
        <Icon name="rowing" />
        <Icon name="rowing" />
        <View styles={styles.body}>
          <Text style={styles.text}>Mise en page avec Flexbox</Text>
          <Image style={styles.cats} source={cat} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  corps: {
    flex: 19,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  cats: {
    width: 150,
    height: 150,
    resizeMode:"contain"
  },
});

export default CoorectionFlex;
