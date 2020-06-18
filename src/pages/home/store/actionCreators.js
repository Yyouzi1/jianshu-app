import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';
const changeHomeData = (result) => ({
    type: constants.CHNAGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList,
    writerList: result.writerList
})

const changeHomeList = (result, page) => ({
    type: constants.ADD_HOME_DATA,
    articleList: fromJS(result),
    articlePage: page
})


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            const action = changeHomeData(result)
            dispatch(action);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${page}`).then(res => {
            const result = res.data.data
            const action = changeHomeList(result, page + 1)
            dispatch(action);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const toggleTopShow = show => ({
    type: constants.CHANGE_SCROLLTOP_SHOW,
    scrollShow: show
})