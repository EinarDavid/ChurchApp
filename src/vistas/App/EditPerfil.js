import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, FlatList, ScrollView, SafeAreaView, KeyboardAvoidingView, Alert,ToastAndroid } from 'react-native';
import DismissKeyboard from '../../Components/Keyboard/DismissKeyBoard';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import ButtonNormal from '../../Components/Button/ButtonNormal';
import TitleDes from '../../Components/Text/TitleDescription';
import InputComp from '../../Components/Input/Input';
import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

import { useNavigation } from '@react-navigation/native';
import Fetch from '../../Utils/Fetch';
import Utils from '../../Utils/Utils';

const EditarPerfil = () => {
    const navigation = useNavigation();
    const urlIp= '83.229.86.168:7000';

    const [nombre, setNombre] = useState(global.usuario.usuario.Nombre);
    const [errorNombre, setErrorNombre] = useState('');
    const [apellidoPaterno, setApp] = useState(global.usuario.usuario.Apellido_Paterno);
    const [errorApp, setErrorApp] = useState('');
    const [apellidoMaterno, setApm] = useState(global.usuario.usuario.Apellido_Materno);
    const [email, setEmail] = useState(global.usuario.usuario.Email);
    const [errorEmail, setErrorEmail] = useState('');
    const [genero, setGenero] = useState(global.usuario.usuario.Genero);
    const [contacto, setContacto] = useState(global.usuario.usuario.Contacto);
    const [profesion, setProfesion] = useState(global.usuario.usuario.Profesion);
    const [estadoCivil, setEstadoCivil] = useState(global.usuario.usuario.Estado_Civil);
    const [direccion, setDireccion] = useState(global.usuario.usuario.Direccion);

    const _validateNombre = () => {
        let isValidNombre = Utils.isValidField(nombre);
        isValidNombre
            ? setErrorNombre('')
            : setErrorNombre('El nombre no puede estar vacio');
        return isValidNombre;
    }
    const _validateApp = () => {
        let isValidApp = Utils.isValidField(apellidoPaterno);
        isValidApp
            ? setErrorApp('')
            : setErrorApp('El Apellido no puede estar vacio');
        return isValidApp;
    }
    const _validateEmail = () => {
        let isValidEmail = Utils.isValidEmail(email);
        isValidEmail
            ? setErrorEmail('')
            : setErrorEmail('Debe ser un Email');
        return isValidEmail;
    }

    const _onPressGuardar = () => {
        let nombreData = _validateNombre();
        let appData = _validateApp();
        let emailData = _validateEmail();

        if (nombreData && appData && emailData) {
            Fetch("/Movile/ModMembresia/" + global.usuario.usuario._id, (res) => {
                if (res.jala == "si") {
                    ToastAndroid.show(res.mensage, ToastAndroid.SHORT);
                    Fetch("/LoginMovil", (res) => {
                        if (res.jala != "no") {
                            global.usuario = res;
                            //console.log(res);

                        }
                    }, { ci: global.usuario.usuario.Ci, contra: global.usuario.usuario.Contraseña }, "POST");
                    global.usuario = res;
                    // console.log("11111111111111111111111111111111111!", global.usuario);
                    //navigation.push('tabs');
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'tabs'}],
                      });
                }
            }, {
                Nombre: nombre,
                Apellido_Paterno: apellidoPaterno,
                Apellido_Materno: apellidoMaterno,
                Genero: genero,
                Contacto: contacto,
                Email: email,
                Profesion: profesion,
                Direccion: direccion,
                Estado_Civil: estadoCivil,

            }, "POST")

        }
        else {
            Alert.alert(Constans.STRING.EMPTY_TITLE_PERFIL, Constans.STRING.EMPTY_VALUES);
        }

    }

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView
                behavior="height"
                enabled>
                <ImageBackground source={Images.FONDOAPP} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flex: 1, paddingTop: 0, flexDirection: 'column' }}>

                        <View style={{ flex: 1, paddingTop: 10, justifyContent: 'space-evenly' }} >
                            <View style={styles.boton}>
                                <ButtonNav
                                    ColorText={Colors.primary}
                                    Accion={Constans.STRING.PREV}
                                    onPress={() => { navigation.navigate('tabs') }}
                                />
                            </View>
                            <Image source={Images.LINE} style={{ width: '100%' }} />
                        </View>
                        <View style={{ flex: 11 }}>
                            <SafeAreaView>
                                <ScrollView>
                                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                                        <View style={{ height: 15 }} />
                                        <TitleDes
                                            Titulo={'Editar Perfil'}
                                            Contenido={'Actualiza tu informacion para tener nuestra base de datos actualizada.'}
                                            AlineacionTitle={'left'}
                                            AlineacionCon={'left'}
                                            ColorTitle={Colors.Tittle}
                                            ColorCon={Colors.description}
                                            FontSize={30}
                                        />
                                        <View style={{ height: 30 }} />
                                        <View>
                                            <InputComp
                                                //keyboardType={'number-pad'}
                                                onChangeText={(newnombre) => { setNombre(newnombre); }}
                                                onEndEditing={_validateNombre}
                                                errorMessage={errorNombre}
                                                placeholder={'Nombres*'}
                                                //NameIcon={'eye'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Nombre}
                                            />
                                            <InputComp
                                                //keyboardType={'visible-password'}
                                                onChangeText={(newapp) => { setApp(newapp) }}
                                                onEndEditing={_validateApp}
                                                errorMessage={errorApp}
                                                placeholder={'Apellido Paterno*'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Apellido_Paterno}
                                            />
                                            <InputComp
                                                onChangeText={(newapm) => { setApm(newapm) }}
                                                placeholder={'Apellido Materno'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Apellido_Materno}
                                            />
                                            <InputComp
                                                //keyboardType={'visible-password'}
                                                onChangeText={(newEmail) => { setEmail(newEmail) }}
                                                onEndEditing={_validateEmail}
                                                errorMessage={errorEmail}
                                                placeholder={'Email'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Email}
                                            />
                                            <InputComp
                                                onChangeText={(newgenero) => { setGenero(newgenero) }}
                                                placeholder={'Genero'}
                                                //onEndEditing={_validatePassword}
                                                //errorMessage={errorPassword}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Genero}
                                            />
                                            <InputComp
                                                keyboardType={'number-pad'}
                                                onChangeText={(newcon) => { setContacto(newcon) }}
                                                //onEndEditing={_validatePassword}
                                                //errorMessage={errorPassword}
                                                placeholder={'Celular'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Contacto}
                                            />
                                            <InputComp
                                                onChangeText={(newprofesion) => { setProfesion(newprofesion) }}
                                                placeholder={'Profesión'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Profesion}
                                            />
                                            <InputComp
                                                onChangeText={(newestado) => { setEstadoCivil(newestado) }}
                                                //onEndEditing={_validatePassword}
                                                //errorMessage={errorPassword}
                                                placeholder={'Estado Civil'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Estado_Civil}
                                            />
                                            <InputComp
                                                onChangeText={(newdireccion) => { setDireccion(newdireccion) }}
                                                placeholder={'Dirección'}
                                                //NameIcon={'visibility-off'}
                                                secureTextEntry={false}
                                                autoCorrect={false}
                                                value={global.usuario.usuario.Direccion}
                                            />
                                        </View>

                                        <View style={{ height: 15 }} />
                                        <View style={styles.containerLogin}>
                                            <ButtonNormal
                                                Accion={Constans.STRING.GUARDAR}
                                                onPress={_onPressGuardar}
                                                borderColor={Colors.primary}
                                                borderWidth={0}
                                                backgroundColor={Colors.secundary}
                                                ColorsText={Colors.white}
                                            />
                                        </View>
                                        <View style={{ height: 20 }} />
                                    </View>
                                </ScrollView>
                            </SafeAreaView>
                        </View>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}
const styles = StyleSheet.create({
    boton: {
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    containerLogin: {
        //marginTop: 650,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default EditarPerfil;

/*

        */