import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';



const Description = ({bio, name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bio}>
                {bio}
            </Text>
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return { 
        bio: state.user.bio,
        name: state.user.name,
    }
}

export default connect(mapStateToProps)(Description);