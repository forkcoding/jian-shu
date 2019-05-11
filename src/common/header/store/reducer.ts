import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({       //  转换为immutable对象
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true)       //  返回一个新的immutable对象
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
    }
    return state
}


























