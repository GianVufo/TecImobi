import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const containerTelaCadastro = StyleSheet.create({
    preenchimentoFundoScrollView: { backgroundColor: '#007bff', padding: 10, flex: 1 },
    preenchimentoFundoView: { alignContent: 'center', justifyContent: 'center' }
})

const telaDeCadastrostilo = StyleSheet.create({

    titulo: { fontSize: 22, fontWeight: '700', color: 'white', margin: '5%', textAlign: 'center' }
})

const textTelaDeCadastro = StyleSheet.create({
    viewEntradaDados: { width: '100%', alignItems: 'center', margin: '1%' },
    textText: { color: '#fff', marginTop: 10, marginBottom: 7 },
    textTextImput: { backgroundColor: '#fff', borderRadius: 10, height: 40, width: '100%', color: '#000', textAlign: 'center' }

})

const botao = StyleSheet.create({
    viewBotao: { flex: 1, flexDirection: 'column', width: '100%', alignItems: 'center', margin: '3%', justifyContent: 'center' },
    botaoCadastrar: { backgroundColor: '#ffff', width: wp(44), height: hp(5), borderRadius: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' },
    textBotao: { color: '#007bff', textAlign: 'center' }
})

const listagem = StyleSheet.create({
    imgLisatagem: { width: wp(90), height: hp(50), backgroundColor: '#000' },
    viewListaAtributosImoveis: { width: wp(90), margin: 10 },
    textAtributosListaImoveis: { color: "#fff", fontSize: 18, fontWeight: '700' }
})

const ContainerbotaoTelaListagem = StyleSheet.create({
    botaoEdtitRemove: { backgroundColor: '#fff', width: wp(43), height: hp(5), borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
    containerBotoes: { flex: 1, flexDirection: 'row', width: wp(90), alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
    textBotaoRemoverEditar: { color: '#007bff', textAlign: 'center', fontSize: 15 }
})

const camera = StyleSheet.create({

    capture: {

        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        width: wp(90),
        marginLeft: 5,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#9400d3'

    },

})

export { telaDeCadastrostilo, containerTelaCadastro, textTelaDeCadastro, botao, listagem, ContainerbotaoTelaListagem, camera }