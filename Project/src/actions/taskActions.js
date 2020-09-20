import * as types from '../config/actionTypes'

/**
 * 
 * @param {title, description} data 
 */
export const addTaskAction = data => {
    return {
        type: types.ADD_TASK,
        data
    }
}

export const removeTaskAction = id => {
    return {
        type: types.REMOVE_TASK,
        id
    }
}