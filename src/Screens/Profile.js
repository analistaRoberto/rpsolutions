import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import react from "react";
import Header from "../components/Header";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { colors } from "../theme/colors";
const Profile = () => {
    return (
        <View style={styles.cont}>
            <Header title="Mi Perfil" />
            <View >
                <Image
                    style={styles.imagen}
                    source={{
                        uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128009228/original/8e8ad34b012b46ebd403bd4157f8fef6bb2c076b/design-minimalist-flat-cartoon-caricature-avatar-in-6-hours.jpg"
                    }}
                />
            </View>
            <View style={styles.buttons}>
                <Text style={styles.text}>
                    Click Ingresar a la camara
                </Text>

                <Pressable onPress={() => console.log("Presionando Camera")}>

                    <FontAwesome5 name="camera-retro" size={40} color="black" />

                </Pressable>
            </View>
            <View style={styles.buttons}>
                <Text style={styles.text}>
                    Click Ingresar a su Ubicacion
                </Text>
                <Pressable onPress={() => console.log("Presionando Ubicacion")}>
                    <Feather name="map-pin" size={40} color="black" />
                </Pressable>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    imagen: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20
    },
    cont: {
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.contFonts

    },
    buttons: {
        margin: 14,
        alignItems: "center"
    },
    text: {
        margin: 14,
        fontFamily: "playCuerpo",
        fontSize: 24,
        color: colors.fontDescripcion
    }

});
export default Profile;