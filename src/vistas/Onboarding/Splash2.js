import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavPrevNext';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

const Splash2 = ({ navigation }) => {
    return (
        <ImageBackground source={Images.SPLASH2} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, padding: 20, flexDirection: 'column' }}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={styles.titlle}>
                        <TitleDes
                            Titulo={Constans.STRING.TITULOSPLASH2}
                            AlineacionTitle={'center'}
                            ColorTitle={Colors.white}
                            Contenido={Constans.STRING.CONTENIDOSPLASH2}
                            AlineacionCon={'center'}
                            ColorCon={Colors.white}
                            FontSize={26}
                        />
                    </View>
                    <View style={{ height: 60 }} />
                    <View style={styles.boton}>
                        <ButtonNav
                            onPressPrev={() => { navigation.navigate('Splash1') }}
                            onPressNext={() => { navigation.navigate('Login') }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: 430,
        //backgroundColor:'#fff'
    },
    titlle: {
        //marginBottom: 50,
        //backgroundColor:'#fff',
    },
    boton: {
        //backgroundColor:'#eaeaea'
    },
});
export default Splash2;