import {View, Text, StyleSheet} from "react-native"
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
export default function User(){
    return (
        <View style={styles.container}>
            <Text>User Page</Text>
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
