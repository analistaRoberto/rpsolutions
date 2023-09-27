import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { Pressable } from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = ({ navigation, route }) => {
   
    const { item } = route.params 
    return (
        <View style={styles.containPrincipal}>
            <Header title="Caracteristica" navigation={navigation} />
            <Pressable style={styles.icons} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={34} color="white" />
            </Pressable>
            <View style={styles.contaimage}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.images[1],
                    }}
                />
            </View>
            <View style={styles.containText}>
                <Text style={styles.text}>
                    {item.title}
                </Text>
                <Text style={styles.text}>
                    {item.description}
                </Text>
                <Text style={styles.text}>
                    $ {item.price} CLP
                </Text>
                <Text style={styles.text}>
                    {item.rating}
                </Text>
                <Pressable style={styles.button} onPress={() => console.log("Agregar al carrito")}>
                    <Text style={styles.textButton}>Agregar al carrito</Text>
                </Pressable></View>
        </View>
    )
}
export default ProductDetail

const styles = StyleSheet.create({
    containPrincipal:
    {
        backgroundColor: colors.contFonts,
        height: "100%"
    },
    icons: {
        position: 'absolute',
        top: 80,
        left: 16,
    },
    contaimage: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 250,
        height: 250,
        margin: 36,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 6
    },
    containText: {
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "center",
    },
    text: {
        fontFamily: "playCuerpo",
        fontSize: 22,
        margin: 6,
        fontWeight: "800",
    },
    button: {
        width: "60%",
        backgroundColor: colors.headerButton,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",

    },
    textButton: {
        textAlign: "center",
        color: colors.contFonts,
        padding: 10,
        fontSize: 20,
        fontWeight: "700"
    }
})