import {View, Text, StyleSheet} from "react-native"

export default function Feira(){
    return (
        <View style={styles.container}>
            <Text>Feira Page</Text>
        </View>
    )

}
const  styles = StyleSheet.create({
    container:{
        backgroundColor:"#f3f3ff",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    }
})
