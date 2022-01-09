import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
const size =Dimensions.get('window').width/5
export const styles = StyleSheet.create({
    conteiner:{
        flex: 1
    },
    title:{
        fontFamily: Fonts.MontserratBold,
        fontSize: 20,
        marginLeft: 5,
        marginBottom:35,
        marginTop: 15
    }
})