import * as constants from './constants'
import axios from 'axios'
const getDetailData = (title,content) => ({
    type: constants.GET_DETAIL_DATA,
    title,
    content
})


export const getDetailInfo = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then(res => {
            const result = res.data.data
            const action = getDetailData(result.title,result.content)
            dispatch(action);
        }).catch(err => {
            console.log(err);
        })
    }
}
