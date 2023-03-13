import React, { Component, PureComponent, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, AppRegistry, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { telaDeCadastrostilo, containerTelaCadastro, imagensCasas, textTelaDeCadastro, botao, camera } from '../stilos/estilos';

// imports para uso de camera e acessar imagens no armazenamento
import { launchCamera, launchImageLibrary, CameraOptions } from 'react-native-image-picker';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { RNCamera } from "react-native-camera";



// importar a classe de seletor (Picker)
import SimplePicker from "./seletor";
// model
import imovel from "../model/imovel";

// database
import ItemDatabase from "../database/ItemDatabase";
import { Button } from "@rneui/base";












class Cadastro extends Component {


    constructor(props) {
        super(props)
        this.navigation = props.navigation

        // menu dropDown tipo de imovel
        this.types = [
            //{ label: 'Nenhum',       value: "Nenhum", },
            { label: 'Casa', value: "Casa", },
            { label: 'Comércio', value: 'Comercio', },
            { label: 'Condomínio', value: 'Condominio', },
        ]

        // menu dropDown finalidade do imovel
        this.final = [

            { label: 'Alugar', value: 'Alugar', },
            { label: 'Vender', value: 'vender', },
        ]




        // states
        this.state = {

            tipo: 'Casa',
            finalidade: 'Alugar',
            endereco: '',
            valor: '',
            listaImoveis: [],
            imageUser: ''

        }


    }

    Cadastrar = (imageUser, tipo, endereco, finalidade, valor) => {
        const novoImovel = new imovel(imageUser, tipo, endereco, finalidade, valor);
        const DB = new ItemDatabase();
        DB.Inserir(novoImovel);
    }

    render() {
        const imgCasa1 = require('../images/teste.jpg')

        const handleImagemUser = () => { // cria um tipo de modal alert pra mim escolher dentro dele entre uma das opções
            Alert.alert(
                "selecione", "Escolha de onde selecionar a imagem",
                [
                    {
                        text: "Galeria",
                        onPress: () => pickImageFromGalery(), // chama função que chama a galeria
                        style: "default"
                    },

                    {

                        text: "Camera",
                        onPress: () => pickImageFromCamera(), // chama a função que chama a camera
                        style: "default"
                    },

                    {
                        text: "Cancelar",
                        onPress: () => Alert.alert("Cancelado pelo usuario"),
                        style: "default",
                    },

                ],
                {
                    cancelable: true,
                    onDismiss: () => console.log("ação cancelada")

                }
            )
        }


        const pickImageFromCamera = async () => {
            const options = {

                quality: 1,
                saveToPhotos: true, // ativa o salvamento na galeria de imagems, se colocar false o salvamento das fotos passa a ser no cache

            }
            const result = await launchCamera(options);

            if (result.assets) {
                const img = result.assets[0].uri // pra pegar somente a uri
                console.log(JSON.stringify(img))
                this.setState({ imageUser: img })
            }
        }


        const pickImageFromGalery = async () => {

            const options = { midiaType: 'photo' };
            const result = await launchImageLibrary(options);

            if (result.assets) {

                const img = result.assets[0].uri // pra pegar somente a uri

                console.log(JSON.stringify(img))

                this.setState({ imageUser: img })
            }
        }

        return (

            <ScrollView style={containerTelaCadastro.preenchimentoFundoScrollView}>
                <View >

                    <View><Text style={telaDeCadastrostilo.titulo}>Cadastro de imoveis</Text></View>

                    <View>
                        <TouchableOpacity onPress={() => handleImagemUser()} style={camera.capture}>
                            <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', color: '#4b0082' }}> Click aqui e adicione uma Imagem ao anuncio </Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.imageUser ? //  se imagem da camera foi capturada é verdadeiro, as caracteristicas de estilo em Image sera aplicada na imgem capturada para que ela seja exibida em uma previsualização na propria tela de cadastro e a mesma sera exibida antes de  salvar os dados
                        <View style={{ borderWidth: 2, borderColor: 'white' }}>
                            <Image style={{ marginVertical: 10, alignSelf: 'center', width: '90%', height: 250 }} source={{ uri: this.state.imageUser }} />

                        </View>
                        : // se não se a condição this.state.anuncio_image for falso, não havera alteração e continuara aparecendo o texto abaixo
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', margin: '2%', marginBottom: 50 }} >nenhuma imagem selecionada</Text>
                    }

                    <View >

                        <Text style={textTelaDeCadastro.textText}>Tipo de  imóveu</Text>
                        <SimplePicker onChange={(value) => this.setState({ tipo: value })} values={this.types} />
                    </View>

                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Endereço do imóveu</Text>
                        <TextInput
                            onChangeText={(valorDigitado) => this.setState({ endereco: valorDigitado })}
                            style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }} >
                        <Text style={textTelaDeCadastro.textText}>Finalidade do anuncio</Text>
                        <SimplePicker onChange={(value) => this.setState({ finalidade: value })} values={this.final} />
                    </View>


                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Valor em R$</Text>
                        <TextInput
                            onChangeText={(valorDigitado) => this.setState({ valor: valorDigitado })}
                            style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    <View style={botao.viewBotao}>
                        <TouchableOpacity
                            onPress={() => this.Cadastrar(this.state.tipo, this.state.endereco, this.state.finalidade, this.state.valor, this.state.imageUser)}
                            style={botao.botaoCadastrar}>
                            <Text style={botao.textBotao}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text></Text>
                    </View>

                </View>

            </ScrollView>
        );
    }



}

export default Cadastro


