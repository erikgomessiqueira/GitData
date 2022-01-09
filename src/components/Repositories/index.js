import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Repository from '../Repository';
import { styles } from './styles';




const Repositories = ({repo}) => {
    return (
        <View >
            <Text style={styles.title}>Repositórios</Text>
            <FlatList
                data={repo}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Repository name={item.name} language={item.language} license={item.license} />}
                ItemSeparatorComponent={()=><View style={{height: Dimensions.get('window').width/50}} />}
                ListFooterComponent={<View style={{height: 350}}/>}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return { 
        repo: state.user.repos,
    }
}

export default connect(mapStateToProps)(Repositories);