import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { fortunes } from '../src/fortunes';
import { styles } from '../src/styles';


export default function FortuneScreen () {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const numAleatorio = Math.floor(Math.random() * fortunes.length);
    setMessage(fortunes[numAleatorio])
  }, []);

  function generateNewMessage (){
    const numAleatorio = Math.floor(Math.random() * fortunes.length);
    setMessage (fortunes[numAleatorio]);
  }
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../assets/cookie.png' )}
        />
        <Text style={styles.fortuneText}>{message}</Text>
        <TouchableOpacity style={styles.newFortune} onPress={generateNewMessage}>
          <Text style={styles.newFortuneText}>Abrir outro</Text>
        </TouchableOpacity>
    </View>
  );
}


