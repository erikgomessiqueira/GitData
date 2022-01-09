const INITIAL_STATE = {
        name:'Erik Gomes Siqueira',
        login:'erikgomessiqueira',
        bio:'Tenho 18 anos e  pretendo seguir carreira na área da tecnologia tendo conhecimento de HTML, CSS, JavaScript e estudando React Native.',
        avatar_url:'https://avatars.githubusercontent.com/u/67563562?v=4',
        repos:[
            {
                id: '00',
                name: 'Projeto-site',
                language: 'HTML',
                license: 'MIT License'
            },
            {
                id: '01',
                name: 'insiderLink',
                language: 'JavaScript',
                license: null
            },
            {
                id: '02',
                name: 'gameplay_nlw_together_react-native',
                language: 'TypeScript',
                license: null
            },
            {
                id: '03',
                name: 'NLW-Heat_Node',
                language: 'TypeScript',
                license: null
            },
            {
                id: '04',
                name: 'NLW-Heat_React-JS',
                language: 'TypeScript',
                license: null
            }
        ]
}

export const user = (state = INITIAL_STATE, action) =>{
        if (action.type ==='REQUEST_SUCESS'){
            const data = action.payload.data
            console.log(data)
            return data
        }
        else if (action.type ==='LOADING'){
            
            return {
                ...state,
                toggleStateModal: action.payload.handleStateModal
            }
        }
        else{
            return state
        }

}