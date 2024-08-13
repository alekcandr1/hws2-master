const initState = {
    themeId: 1,
}

export type stateType = typeof initState

export const themeReducer = ( state = initState, action: ActionsType ): stateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = ( id: number ) => ({type: 'SET_THEME_ID', id}) // fix any

type ActionsType = ReturnType<typeof changeThemeId>