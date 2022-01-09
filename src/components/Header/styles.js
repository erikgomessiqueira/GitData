import { Dimensions, StyleSheet } from 'react-native';
import {Fonts} from '../../theme/FONTS'
const WIDTH_WINDOW =Dimensions.get('window').width
const size =Dimensions.get('window').width/5
export const styles = StyleSheet.create({
    conteiner:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: WIDTH_WINDOW -20,
        marginBottom: 10
    },
    userData:{
        flexDirection:'row',
    },
    textUser:{
        marginTop: 5
    },
    name:{
        width: WIDTH_WINDOW/1.8,
        fontFamily: Fonts.MontserratSemiBold,
        fontSize:18
    },
    username:{
        fontFamily: Fonts.MontserratMedium,
        fontSize:16
    },
    img:{
        width: size,
        height: size,
        borderRadius: size/8,
        marginRight: 13
    }
})