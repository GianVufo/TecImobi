import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const imageAdress = require('../images/teste.jpg');

function ListImmobile( {navigation }) {
  return (

    <View>
    
    </View>

  );
}

function ScreenHome({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <Image source={imageAdress} style={{ marginTop: -80, marginBottom: 30 }}></Image>
      </View>

      <View style={{ marginBottom: 20 }}>

        <TouchableOpacity style={style.HomeBottons} onPress={() => navigation.navigate('Cadastrar Imovel')}>

          <Text style={style.BottonsText}> Cadastrar Imóveis </Text>

        </TouchableOpacity>

      </View>

      <View>

        <TouchableOpacity style={style.HomeBottons} onPress={() => navigation.navigate('Imoveis Cadastrados')}>

          <Text style={style.BottonsText}> Imóveis Cadastrados </Text>

        </TouchableOpacity>

      </View>

    </View>


  );
}

const Stack = createStackNavigator();

function HomeScreen() {

  return (

    <Stack.Navigator>
      <Stack.Screen name="Imobiliária" component={ScreenHome} options={{ title: 'Imobiliária ', headerStyle: { backgroundColor: '#483d8b' }, headerTintColor: '#cd5c5c' }} />
      <Stack.Screen name="Cadastrar Imovel" component={RegisterImmobile} />
      <Stack.Screen name="Imoveis Cadastrados" component={ListImmobile} />
    </Stack.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}





  
  
  
  
  




