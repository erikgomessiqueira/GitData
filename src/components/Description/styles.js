import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
const size =Dimensions.get('window').width/5
export const styles = StyleSheet.create({
    container:{
        minHeight:WIDTH_WINDOW/20,
        justifyContent:'space-between',
        paddingHorizontal: 10
    },
    bio:{
        marginVertical: 10,
        fontFamily: Fonts.MontserratMedium,
        fontSize: 15
    },
    name:{
        marginTop: 10,
        width: '100%',
        marginTop: 30,
        textAlign:'right',
        fontFamily: Fonts.MontserratRegular,
        fontSize: 12
    }
})