import types from './types'

const saveData = () => (dispatch) => {
    dispatch({ type: types.SAVE_DATA })
};

const postFormular = () => (dispatch) => {
    dispatch({ type: types.POST_FORMULAR })
};

export default {
    saveData,
    postFormular
}