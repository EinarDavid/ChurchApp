import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, Image, ToastAndroid, Alert, SafeAreaView, KeyboardAvoidingView, } from 'react-native';
import DismissKeyboard from '../../Components/Keyboard/DismissKeyBoard';
import Title from '../../Components/Text/Title';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import ButtonNormal from '../../Components/Button/ButtonNormal';
import TextInput from '../../Components/Input/TextInput';
import InputComp from '../../Components/Input/Input';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

import Utils from '../../Utils/Utils';
import Fetch from '../../Utils/Fetch';

import LocalStorage  from '../../Utils/LocalStorage';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const navigation = useNavigation();
    const [ci, setCi] = useState('');
    const [errorCi, setErrorCi] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    //Validar Ci
    const _validateCi = () => {
        let isValidCi = Utils.isValidField(ci);
        isValidCi
            ? setErrorCi('')
            : setErrorCi(Constans.STRING.CI_ERROR);
        return isValidCi;
    };

    //Validar Password
    const _validatePassword = () => {
        let isValidPassword = Utils.isValidField(password);
        isValidPassword
            ? setErrorPassword('')
            : setErrorPassword(Constans.STRING.PASS_ERROR)
        return isValidPassword
    };

    const _onPressLogin = () => {
        let ciData= _validateCi();
        let passwordData= _validatePassword();

        //Get
        Fetch("/Prueba", (res)=>{

        })

        //Post
        Fetch("/PruebaPost", (res) => {
            //console.log("RespuestaPost", res)
        }, { hola: "holas", num: 6 }, "POST")

        //Autenticacion
        if(ciData && passwordData){
            Fetch("/LoginMovil", (res) => {
                if(res.jala == "no"){
                    ToastAndroid.show(res.mensage, ToastAndroid.SHORT);
                }
                else{
                    ToastAndroid.show(res.mensage, ToastAndroid.SHORT);

                    global.usuario=res;

                    Fetch("/VerDatosIglesia", async (iglesia)=>{
                        global.iglesia = iglesia;
                         
                        Fetch("/AllIglesia", async(AllIgle) =>{
                            global.AllIgle = AllIgle;
                            //console.log("-----------All-----------",AllIgle)
                            LocalStorage.guardar('Alliglesias', global.AllIgle)
                            LocalStorage.guardar('usuario', global.usuario)
                            LocalStorage.guardar('iglesia', global.iglesia)

                            navigation.navigate('TabNavigator')

                        })

                              
                     
                    }, {idIglesia: res.usuario.Iglesia}, "POST");
                }
            }, {ci:ci, contra:password}, "POST");
        }
        else{
            Alert.alert(Constans.STRING.EMPTY_TITLE, Constans.STRING.EMPTY_VALUES);
        }

    };
    

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView
                behavior="height"
                enabled>
                <ImageBackground source={Images.FONDOAPP} style={{ width: '100%', height: '100%' }}>

                    <View style={{ flex: 1, flexDirection: 'column' }} >

                        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                            <SafeAreaView>
                                <View style={styles.boton}>
                                    <ButtonNav
                                        ColorText={Colors.primary}
                                        Accion={Constans.STRING.PREV}
                                        onPress={() => { navigation.navigate('Login') }}
                                    />
                                </View>
                                <Image source={Images.LINE} style={{ width: '100%' }} />
                            </SafeAreaView>
                        </View>
                        <View style={{ flex: 11, paddingLeft: 20, paddingRight: 20, paddingBottom: '10%' }} >
                            <SafeAreaView>
                                <View style={{ height: 15 }} />
                                <View >
                                    <Title
                                        Titulo={Constans.STRING.TITLE_INICIAR_SESION}
                                        AlineacionTitle={'left'}
                                        ColorTitle={Colors.primary}
                                        FontSize={26}
                                    />
                                    <View style={{ height: 30 }} />
                                    <View>
                                        <InputComp
                                            keyboardType={'number-pad'}
                                            onChangeText={(ci) => { setCi(ci) }}
                                            onEndEditing={_validateCi}
                                            errorMessage={errorCi}
                                            placeholder={'Ci'}
                                            //NameIcon={'eye'}
                                            secureTextEntry={false}
                                            autoCorrect={false}
                                        />
                                        <View style={{ height: 15 }} />
                                        <InputComp
                                            //keyboardType={'visible-password'}
                                            onChangeText={(password) => { setPassword(password) }}
                                            onEndEditing={_validatePassword}
                                            errorMessage={errorPassword}
                                            placeholder={'Password'}
                                            NameIcon={'visibility-off'}
                                            secureTextEntry={true}
                                            autoCorrect={false}
                                        />
                                    </View>

                                    <View style={{ height: 30 }} />
                                    <View>
                                        <View style={styles.containerLogin}>
                                            <ButtonNormal
                                                Accion={Constans.STRING.INICIARSESION}
                                                onPress={_onPressLogin}
                                                borderColor={Colors.primary}
                                                borderWidth={0}
                                                backgroundColor={Colors.secundary}
                                                ColorsText={Colors.white}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    containerLogin: {
        //marginTop: 650,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlle: {
        marginBottom: 50, //ver en Mockup
        //backgroundColor: '#fff',
    },
    boton: {
        alignItems: 'flex-start',
        marginLeft: 20,
        //marginBottom: 30,
        //backgroundColor: '#fff',
    },
});
export default Login;

//<View style={styles.container} />

/*
<TextInput
                    source={Images.ICON_CI}
                    placeholder={Constans.STRING.TITULO1}
                    secureTextEntry={true}
                    autoCorrect={false}
                />
*/