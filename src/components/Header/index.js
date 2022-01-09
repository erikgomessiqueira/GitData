import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ToggleStateModal } from '../../store/action.js';
import Button from '../Button/index.js';
import { styles } from './styles.js';


const Header = ({name, avatar_url, login, toggleStateModal, handleStateModal}) => {
    return (
        <View style={styles.conteiner}>
            <View style={styles.userData}>
                <Image source={{uri: avatar_url}} style={styles.img}/>
                <View style={styles.textUser}>
                    <Text style={styles.name} numberOfLines={2}>{name}</Text>
                    <Text style={styles.username}>{login}</Text>
                </View>
            </View>
            <Button onPress={()=>handleStateModal(toggleStateModal)}/>
        </View>
    )
}

const mapStateToProps = (state) => {
    return { 
        name: state.user.name,
        login: state.user.login,
        avatar_url: state.user.avatar_url,
        toggleStateModal: state.aplication.toggleStateModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleStateModal: (toggleModal) => dispatch(ToggleStateModal(toggleModal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);