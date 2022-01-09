import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
export const styles = StyleSheet.create({
    conteiner:{
        width: WIDTH_WINDOW -30,
        height: WIDTH_WINDOW/3.7,
        borderRadius: WIDTH_WINDOW/25,
        backgroundColor: Colors.blue12,
        justifyContent:'center',
        alignItems: 'center'
    },
    name:{
        width: WIDTH_WINDOW-60,
        textAlign:'center',
        textAlignVertical: 'center',
        fontFamily: Fonts.MontserratSemiBold,
        fontSize: 18
    },
    containerSubgrup:{
        flexDirection:'row',
        marginTop: 20
    },
    subgrup:{
        width: WIDTH_WINDOW/3.5,
        borderRadius: WIDTH_WINDOW/40,
        textAlignVertical: 'center',
        textAlign:'center',
        fontFamily: Fonts.MontserratRegular,
        backgroundColor: Colors.blue02,
        padding: 2,
        marginHorizontal: 5,
        fontSize: 15
    }
})