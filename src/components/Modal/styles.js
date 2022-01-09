import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
export const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
    },
    section:{
        flexDirection:'row',
        paddingTop: '4%',
        justifyContent:'space-around',
        width: WIDTH_WINDOW,
        height: WIDTH_WINDOW/2,
        backgroundColor: Colors.blue01,
        borderBottomLeftRadius: WIDTH_WINDOW/20,
        borderBottomRightRadius: WIDTH_WINDOW/20,
    }, 
    input:{
        width: '75%',
        height: '27%',
        paddingLeft: 20,
        borderRadius: WIDTH_WINDOW/50,
        backgroundColor:'#456',
        fontSize: 18,
        fontFamily:Fonts.MontserratMedium
        
    },
    opaque:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})