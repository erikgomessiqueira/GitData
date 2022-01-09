import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Repository = ({name, language, license}) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <View style={styles.containerSubgrup}>
                {
                    language === null? null: <Text style={styles.subgrup}>{language}</Text>
                }
                {
                    license === null? null: <Text style={styles.subgrup}>{license}</Text>
                }
            </View>
        </View>
    )
}

export default Repository;