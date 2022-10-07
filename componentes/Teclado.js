import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from "react-native"
import Numero from "./Numero";

export default function Teclado(){
    return(
        <View style={styles.container}>
            <View style={styles.viewNumero}>
                <Numero num="1"></Numero>
                <Numero num="2"></Numero>
                <Numero num="3"></Numero>
                <Numero num="="></Numero>
            </View>
            <View style={styles.viewNumero}>
                <Numero num="4"></Numero>
                <Numero num="5"></Numero>
                <Numero num="6"></Numero>
                <Numero num="+"></Numero>
            </View>
            <View style={styles.viewNumero}>
                <Numero num="7"></Numero>
                <Numero num="8"></Numero>
                <Numero num="9"></Numero>
                <Numero num="-"></Numero>
            </View>
                <View style={styles.viewNumero}>
                <Numero num="0"></Numero>
                <Numero num="="></Numero>
                <Numero num="/"></Numero>
                <Numero num="x"></Numero>
                </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
      },
      viewNumero: {
        flexDirection: 'row'
      }
})