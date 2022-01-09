import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
export const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        
    },
    background:{
        flex: 1,
        backgroundColor: Colors.blue02,
        alignItems:'center',
        justifyContent: 'center'
    }
})