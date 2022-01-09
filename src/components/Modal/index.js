import React, { useEffect, useState } from 'react';
import { TextInput, Modal, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import { requestLoad, ShowErrorRequest, ToggleStateModal } from '../../store/action.js';
import Button from '../Button/index.js';
import { styles } from './styles.js';



const ModalSeach = (
    {   toggleStateModal, 
        name, 
        handleStateModal, 
        requestSucess, 
        requestRepos,
        handleAlert
    }
) => {
    const [login, setLogin] = useState('')


    const AlertErrorRequest = (title,message)=>{
        Alert.alert(
            title,
            message,
            [
                { text: "OK", }
            ]
        )
    }

    function handleModal(){
        Keyboard.dismiss

        handleStateModal(toggleStateModal)

        
    }

    const search = async ()=>{
        await requestRepos(login.length === 0 ? 'erikgomessiqueira': login)
        Keyboard.dismiss
        
    }
    useEffect(()=>{
        if(requestSucess.alert === 'request' && requestSucess.state === false){
            let title = 'Ocorreu um Erro!'
            let message = requestSucess.error >=400 && requestSucess.error <=500 ? 'Usuário não foi encontrado': null
            handleAlert('storage')
            AlertErrorRequest(title, message)
        }
        
    },[requestSucess.alert])
    return(
        <Modal
            transparent = {true}
            visible={name === ''? true:toggleStateModal}
            style={styles.conteiner}
        >   
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
                <View style={styles.section}>
                    <TextInput
                        style={styles.input}
                        placeholder='Ex: erikgomessiqueira'
                        onChangeText={(text)=> setLogin(text)}
                        value={login}
                    />
                    <Button onPress={search}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleModal} touchSoundDisabled={true}>
                <View style={styles.opaque}/>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return { 
        toggleStateModal: state.aplication.toggleStateModal,
        requestSucess: state.user.requestSucess,
        name: state.user.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleStateModal: (toggleStateModal) => dispatch(ToggleStateModal(toggleStateModal)),
        requestRepos:(login) => dispatch(requestLoad(login)),
        handleAlert: (prop)=>dispatch(ShowErrorRequest(prop))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalSeach);