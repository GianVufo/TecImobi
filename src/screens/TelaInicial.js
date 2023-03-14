import * as React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterImmobile from './TeladeCadastro';
import ListImmobile from './TeladeListagem';

const imageAdress = require('../images/teste.jpg');

function ScreenHome({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <Image source={imageAdress} style={{ marginTop: -80, marginBottom: 30 }}></Image>
      </View>

      <View style={{ marginBottom: 20 }}>

        <TouchableOpacity style={style.HomeBottons} onPress={() => navigation.navigate('Cadastrar Imovel')}>

          <Text style={style.ButtonsText}> Cadastrar Imóveis </Text>

        </TouchableOpacity>

      </View>

      <View>

        <TouchableOpacity style={style.HomeBottons} onPress={() => navigation.navigate('Imoveis Cadastrados')}>

          <Text style={style.ButtonsText}> Imóveis Cadastrados </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}

const Stack = createStackNavigator();

function TelaInicial() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={ScreenHome} options={{ title: 'Imobiliária ' }} />
      <Stack.Screen name="Cadastrar Imovel" component={RegisterImmobile} />
      <Stack.Screen name="Imoveis Cadastrados" component={ListImmobile} />

    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  HomeBottons: {
    backgroundColor: '#007bff',
    width: 170,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center'
  },

  ButtonsText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
});

export default TelaInicial;
