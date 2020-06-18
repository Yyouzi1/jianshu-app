import * as constants from './constants'
import { fromJS } from 'immutable';
// immutable库
// immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    scrollShow: false
});
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    })
}
const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.articlePage,
    })
}
export default (state = defaultState, action) => {
    switch (action.type) {
        // immutable对象的set方法,会结合之前immutable对象的值
        // 和设置的值,返回一个全新的对象
        case constants.CHNAGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_HOME_DATA:
            return addArticleList(state, action)
        case constants.CHANGE_SCROLLTOP_SHOW:
            return state.set('scrollShow', action.scrollShow)
        default:
            return state
    }
}