import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image } from 'react-native';

import { styles } from './HomeStyles';
import Logo from '../../../assets/adaptive-icon.png'

export function Home() {
  const [isActive, setIsActive] = useState(true);

  function handleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <View style={styles.appContainer}>

      {isActive ?
        (
          <>
            <View style={styles.logoContainer}>
              <Image source={Logo}
                style={{
                  resizeMode: 'contain',
                  height: 250,
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text} onPress={handleIsActive}>
                Cadastrar
              </Text>
            </View>
          </>
        ) :
        (
          <>
            <View style={styles.logoContainer}>
              <Image source={Logo}
                style={{
                  resizeMode: 'contain',
                  height: 100,
                }}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.labelInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input} placeholder='nome' />
              </View>
              <View style={styles.labelInput}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder='e-mail' />
              </View>
              <View style={styles.labelInput}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} placeholder='Senha' />
              </View>
              <View style={styles.labelInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput style={styles.input} placeholder='descrição' />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.text} onPress={handleIsActive}>
                Enviar
              </Text>
            </View>
          </>
        )
      }
    </View>
  );
}