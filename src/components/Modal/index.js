import React, { useState } from 'react';
import { TextInput, Modal, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { requestLoad, ToggleStateModal } from '../../store/action.js';
import Button from '../Button/index.js';
import { styles } from './styles.js';



const ModalSeach = ({toggleStateModal, handleStateModal, requestRepos}) => {
    const [login, setLogin] = useState('')

    function handleModal(){
        Keyboard.dismiss
        handleStateModal(toggleStateModal)
    }

    function search(){
        
    }

    return(
        <Modal
            transparent = {true}
            visible={toggleStateModal}
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
                    <Button onPress={()=>requestRepos(login)}/>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleStateModal: (toggleStateModal) => dispatch(ToggleStateModal(toggleStateModal)),
        requestRepos:(login) => dispatch(requestLoad(login)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalSeach);