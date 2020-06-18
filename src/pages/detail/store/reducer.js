import * as constants from './constants'
import { fromJS } from 'immutable';
// immutable库
// immutable对象
const defaultState = fromJS({
    title: '',
    content: ''
});
const getDetailData = (state,action) => {
    return state.merge({
        title: action.title,
        content: action.content,
    })
}
export default (state = defaultState, action) => {
    switch (action.type) {
        // immutable对象的set方法,会结合之前immutable对象的值
        // 和设置的值,返回一个全新的对象
        case constants.GET_DETAIL_DATA:
            return getDetailData(state,action)
        default:
            return state
    }
}