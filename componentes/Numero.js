import { View, StyleSheet, TouchableOpacity} from "react-native"

export default function Numero(props){
    var num = props.num;
    return(
        <View>
            <TouchableOpacity style = {styles.buttonNumero}>{num}</TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    buttonNumero: {
        borderRadius: '50%',
        height:50,
        width: 50,
        backgroundColor: 'green',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }
})