import React, { Component } from "react";
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import { containerTelaCadastro, listagem, ContainerbotaoTelaListagem } from "../style/estilos";
import ItemDatabase from '../database/ItemDatabase';

class ListImmobile extends Component {
  constructor(props) {

    super(props)
    this.state = {
      listaDeImoveis: []
    }
    this.ListarImoveiCadastrados()
  }

  ListarImoveiCadastrados = () => {
    const DB = new ItemDatabase()
    DB.Listar().then(listaCompleta => { this.setState({ listaDeImoveis: listaCompleta }) })
  }

  RemoverAnuncio = (id) => {
    const DB = new ItemDatabase()
    DB.Remover(id)
    this.ListarImoveiCadastrados()


  }
  render() {
    return (
      <ScrollView style={containerTelaCadastro.preenchimentoFundoScrollView} >
        {

          this.state.listaDeImoveis.map(elementoLista => (

            <View style={containerTelaCadastro.preenchimentoFundoView}>

              <View style={listagem.imgLisatagem}>

                <Image style={listagem.imgLisatagem}

                  source={{ uri: elementoLista.anuncioImage }}></Image>
              </View>


              <View style={listagem.viewListaAtributosImoveis}>
                <Text style={listagem.textAtributosListaImoveis}> ID: {this.props.tipo = elementoLista.id}</Text>

                <Text style={listagem.textAtributosListaImoveis}> Tipo: {this.props.tipo = elementoLista.tipo}</Text>

                <Text style={listagem.textAtributosListaImoveis}> Endereço: {this.props.endereco = elementoLista.endereco}</Text>


                <Text style={listagem.textAtributosListaImoveis}> Finalidade: {this.props.finalidade = elementoLista.finalidade}</Text>


                <Text style={listagem.textAtributosListaImoveis}> Valor R$: {this.props.valor = elementoLista.valor}</Text>

              </View>

              <View style={ContainerbotaoTelaListagem.containerBotoes}>
                <TouchableOpacity style={ContainerbotaoTelaListagem.botaoEdtitRemove} onPress={() => this.RemoverAnuncio(this.props.id = elementoLista.id)} >
                  <Text style={ContainerbotaoTelaListagem.textBotaoRemoverEditar}>Remover</Text>
                </TouchableOpacity>
              </View>



            </View>



          ))
        }

      </ScrollView>
    );
  }
}

export default ListImmobile;