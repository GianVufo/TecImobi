import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../Components/Cadastro';

const Stack = createStackNavigator();

function RegisterImmobile({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false } } >
           
           <Stack.Screen name= "Cadastro" component={Cadastro}/>
            
        </Stack.Navigator>
    );
}

export default RegisterImmobile;