import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../theme/colors";

const Search = ({text,  setText}) => {
    const cleartext = () => {
        setText(null)
    }
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => setText(value)}
                value={text}
                style={styles.Input}
                placeholder="Busca Un producto aqui"
            />
            <Pressable style={styles.Pressable} onPress={()=>cleartext()} >
                <AntDesign name="close" size={30} color="black" />
            </Pressable>
        </View>
    )
}
export default Search

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: colors.contFonts   
    },
    Input: {
        width: "78%",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
        marginTop: 40
    }, 
    Pressable: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    }
})
