import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

const Splash1 = ({ navigation }) => {
    return (

        <ImageBackground source={Images.SPLASH1} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, padding: 20, flexDirection: 'column' }} >
                <View style={{ flex: 1, justifyContent: 'flex-end'}} >
                    <View style={styles.titlle}>
                        <TitleDes
                            Titulo={Constans.STRING.TITULOSPLASH1}
                            AlineacionTitle={'center'}
                            ColorTitle={Colors.white}
                            Contenido={Constans.STRING.CONTENIDOSPLASH1}
                            AlineacionCon={'center'}
                            ColorCon={Colors.white}
                            FontSize={26}
                        />
                    </View>
                    <View style={{ height: 60 }} />
                    <View style={styles.boton}>
                        <ButtonNav
                            ColorText={Colors.white}
                            Accion={Constans.STRING.NETX}
                            onPress={() => { navigation.navigate('Splash2') }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#EAEAEA',
    },
    titlle: {
        //marginBottom: 50, //ver en Mockup
        //backgroundColor: '#eaeaea',
        //alignItems: 'center',

    },
    boton: {
        alignItems: 'flex-end',
        //marginRight: 30,
        //marginBottom: 30,
    },
});
export default Splash1;