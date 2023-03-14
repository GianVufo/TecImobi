import React, { Component } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { telaDeCadastrostilo, containerTelaCadastro, textTelaDeCadastro, botao, camera } from '../style/estilos';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SimplePicker from "./seletor";
import imovel from "../model/imovel";
import ItemDatabase from "../database/ItemDatabase";

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.navigation = props.navigation

        this.types = [

            { label: 'Casa', value: "Casa", },
            { label: 'Comércio', value: 'Comercio', },
            { label: 'Condomínio', value: 'Condominio', },
        ]

        this.final = [

            { label: 'Alugar', value: 'Alugar', },
            { label: 'Vender', value: 'vender', },
        ]

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
        Alert.alert("Cadastro Concluído !", "Imóvel Cadastrado com sucesso!")
    }

    render() {

        const handleImagemUser = () => {

            Alert.alert(
                "Selecionar", "Escolha como adicionar uma imagem.",
                [
                    {
                        text: "Galeria",
                        onPress: () => pickImageFromGalery(),
                        style: "default"
                    },

                    {

                        text: "Camera",
                        onPress: () => pickImageFromCamera(),
                        style: "default"
                    },

                    {
                        text: "Cancelar",
                        onPress: () => Alert.alert("Seleção de imagem cancelada!"),
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
                saveToPhotos: true,

            }

            const result = await launchCamera(options);

            if (result.assets) {
                const img = result.assets[0].uri
                console.log(JSON.stringify(img))
                this.setState({ imageUser: img })
            }
        }

        const pickImageFromGalery = async () => {

            const options = { midiaType: 'photo' };
            const result = await launchImageLibrary(options);

            if (result.assets) {

                const img = result.assets[0].uri
                console.log(JSON.stringify(img))

                this.setState({ imageUser: img })
            }
        }

        return (

            <ScrollView style={containerTelaCadastro.preenchimentoFundoScrollView}>
                <View >

                    <View><Text style={telaDeCadastrostilo.titulo}>Cadastro de imóveis</Text></View>

                    <View>
                        <TouchableOpacity onPress={() => handleImagemUser()} style={camera.capture}>
                            <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold', color: '#4b0082' }}> Adicionar imagem ao anúncio </Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.imageUser ?
                        <View style={{ borderWidth: 2, borderColor: 'white', marginTop: 10 }}>
                            <Image style={{ marginVertical: 10, alignSelf: 'center', width: '90%', height: 250 }} source={{ uri: this.state.imageUser }} />
                        </View>
                        :
                        <Text style={{ textAlign: 'center', fontStyle: 'italic', color: 'red', fontWeight: '700', margin: '2%', marginBottom: 50 }} >nenhuma imagem selecionada !</Text>
                    }

                    <View >

                        <Text style={textTelaDeCadastro.textText}>Tipo de Imóvel</Text>
                        <SimplePicker onChange={(value) => this.setState({ tipo: value })} values={this.types} />
                    </View>

                    <View style={textTelaDeCadastro.viewEntradaDados} >
                        <Text style={textTelaDeCadastro.textText}>Endereço do Imóvel</Text>
                        <TextInput
                            onChangeText={(valorDigitado) => this.setState({ endereco: valorDigitado })}
                            style={textTelaDeCadastro.textTextImput}></TextInput>
                    </View>

                    <View style={{ marginTop: 20 }} >
                        <Text style={textTelaDeCadastro.textText}>Finalidade do anúncio</Text>
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
                            onPress={() => this.Cadastrar(this.state.tipo, this.state.endereco, this.state.finalidade, this.state.valor, this.state.imageUser)} style={botao.botaoCadastrar}>
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

export default Cadastro;


