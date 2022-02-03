import {View, Text, StyleSheet, Pressable, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

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

  return (
    <View style={styles.body}>
        <View style={styles.containerInput}>
            <TextInput keyboardType="numeric" style={styles.input} placeholder='premier nombre' onChangeText={handleInput1}/>
            <TextInput keyboardType="numeric" style={styles.input} placeholder='deuxieme nombre'  onChangeText={handleInput2}/>
        </View>
      <View style={styles.touch}>
        <View style={styles.touchNumberRow}>
          <Pressable onPress={() => handleTouch(0)}>
            <Text style={styles.touchNumber}>0</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(1)}>
            <Text style={styles.touchNumber}>1</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(2)}>
            <Text style={styles.touchNumber}>2</Text>
          </Pressable>
        </View>
        <View style={styles.touchNumberRow}>
          <Pressable onPress={() => handleTouch(3)}>
            <Text style={styles.touchNumber}>3</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(4)}>
            <Text style={styles.touchNumber}>4</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(5)}>
            <Text style={styles.touchNumber}>5</Text>
          </Pressable>
        </View>
        <View style={styles.touchNumberRow}>
          <Pressable onPress={() => handleTouch(6)}>
            <Text style={styles.touchNumber}>6</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(7)}>
            <Text style={styles.touchNumber}>7</Text>
          </Pressable>
          <Pressable onPress={() => handleTouch(8)}>
            <Text style={styles.touchNumber}>8</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={styles.touchNumberRow}
            onPress={() => handleTouch(9)}>
            <Text style={styles.touchNumber}>9</Text>
          </Pressable>
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
});

export default Calculatrice;
