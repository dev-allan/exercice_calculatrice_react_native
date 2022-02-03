import {View, Text, StyleSheet, Pressable, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import { isEmpty, handleResult } from './utils';

export const Calculatrice = () => {
  const [result, setResult] = useState();
  const [firstNumber, setFirstNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [operande, setOperande] = useState('');

  const handleReset = () => {
      setResult();
      setFirstNumber([]);
      setSecondNumber([]);
      setOperande('');
  }

  const handleTouch = value => {
    if (operande === '') {
      setFirstNumber(oldValue => [...oldValue, value]);
      console.log(firstNumber);
    } else {
      setSecondNumber(oldValue => [...oldValue, value]);
    }
  };

  const handleOperande = value => {
    setOperande(value);
  };

  const handleInput1 = value => {
      setFirstNumber(value)
  }

  const handleInput2 = value => {
      setSecondNumber(value)
  }

  const handleResult = () => {
    let first = '';
    let second = '';
    for (let index = 0; index < firstNumber.length; index++) {
      first = first.concat(firstNumber[index].toString());
    }
    for (let index = 0; index < secondNumber.length; index++) {
      second = second.concat(secondNumber[index].toString());
    }
    if (operande === '+') {
      setResult(parseFloat(first) + parseFloat(second));
    }
    if (operande === '/') {
      setResult(parseFloat(first) / parseFloat(second));
    }
    if (operande === '*') {
      setResult(parseFloat(first) * parseFloat(second));
    }
    if (operande === '-') {
      setResult(parseFloat(first) - parseFloat(second));
    }
  };

  const arrayTouchNumber = ["0", "1", "2","3","4","5","6","7","8","9"];
  const arrayToucheOperateur = ["+", "-", "/", "*"]

  return (
    <View style={styles.body}>
        <View style={styles.containerInput}>
            <TextInput keyboardType="numeric" style={styles.input} placeholder='premier nombre' onChangeText={handleInput1}/>
            <TextInput keyboardType="numeric" style={styles.input} placeholder='deuxieme nombre'  onChangeText={handleInput2}/>
        </View>
      <View style={styles.touch}>
        <View style={styles.touchNumberMap}>
        {
          !isEmpty(arrayTouchNumber) && arrayTouchNumber.map((e, i) => {
            return(
            <View key={i} style={styles.touchNumber}>
              <Pressable onPress={() => handleTouch(i)}>
                <Text style={styles.touchNumber}>{e}</Text>
              </Pressable>
            </View>)
          })
        }
        </View>
      </View>
      <View style={styles.touchOperande}>
        <View style={styles.touchNumberRow}>
          <Pressable onPress={() => handleOperande('+')}>
            <Text style={styles.touchNumber}>+</Text>
          </Pressable>
          <Pressable onPress={() => handleOperande('-')}>
            <Text style={styles.touchNumber}>-</Text>
          </Pressable>
        </View>
        <View style={styles.touchNumberRow}>
          <Pressable onPress={() => handleOperande('*')}>
            <Text style={styles.touchNumber}>*</Text>
          </Pressable>
          <Pressable onPress={() => handleOperande('/')}>
            <Text style={styles.touchNumber}>/</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.numberEnter}>
        <Text>Valeurs saisies</Text>
        <Text>
          {firstNumber} {operande} {secondNumber}
        </Text>
      </View>
      <View style={styles.result}>
        <Pressable onPress={() => handleResult()}>
          <Text style={styles.touchNumber}>=</Text>
        </Pressable>
      </View>
      <View>
          <Text>Resultat</Text>
        <Text>{result}</Text>
      </View>
      <View>
          <Button onPress={handleReset} title="Reset"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerInput:{
    margin : 20
  },
  input:{
    backgroundColor:"salmon",
    width:120
  },
  touch: {
    backgroundColor: 'red',
    display: 'flex',
  },
  touchNumber: {
    fontSize: 21,
    margin: 20,
    backgroundColor: 'red',
  },
  touchOperande: {
    backgroundColor: 'red',
    fontSize: 21,
    margin: 20,
  },
  touchNumberRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  numberEnter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  result: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red',
    fontSize: 21,
    margin: 20,
  },

  touchNumberMap:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:300
  }
});

export default Calculatrice;
