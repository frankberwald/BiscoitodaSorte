import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { styles }  from '../src/styles';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const navigation = useNavigation();

  function abrirBiscoito (){
    navigation.navigate('FortuneScreen');
  }

  return  (
    <View style={styles.container}>
      <StatusBar style="automatic" />
      <Text style={styles.title}>Abra seu biscoito!</Text>

      <TouchableOpacity style={styles.openButton} onPress ={abrirBiscoito}>
        <Text style={styles.buttonText}>Abrir</Text>
      </TouchableOpacity>

    </View>
  );
}