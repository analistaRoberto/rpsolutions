import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import react, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';




const Search = () => {
    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => setText(value)}
                value={text}
                style={styles.Input}
                placeholder="Busca Un producto aqui"
            />
            <Pressable style={styles.Pressable} onPress={()=> console.log("ahh")}>
                <AntDesign name="close" size={30} color="black" />
            </Pressable>

        </View>

    )
}
styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: "white"
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
export default Search