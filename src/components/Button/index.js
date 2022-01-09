import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import styles from './styles';

const Button = ({onPress}) => {
    const size = Dimensions.get('window').width/12
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Feather name='search' size={size} color='#ffd'/>
        </TouchableOpacity>
    )
}

export default Button;