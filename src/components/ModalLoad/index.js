import React, { useEffect } from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '../../theme/COLORS.js';

import { styles } from './styles.js';



const ModalLoad = ({isLoading}) => {
    return(
        <Modal
            visible={isLoading}
            style={styles.conteiner}
            sy
        >   
            <View style={styles.background}>
                <ActivityIndicator color={Colors.red01} size={60}/>
            </View>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return { 
        isLoading: state.aplication.loading,
    }
}

export default connect(mapStateToProps)(ModalLoad);