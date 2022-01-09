import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme/COLORS';

const size = Dimensions.get('window').width/8

export default StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        width: size,
        height: size,
        borderRadius: size/6,
        backgroundColor: Colors.red01
        
    }
})