import React, { useEffect } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
const Detail = ({ match,title,content,getDetailData }) => {
    const {id} = match.params
    useEffect(() => {
        getDetailData(id)
    })
    return (
        <DetailWrapper><Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html:content}} />
        </DetailWrapper>
    )
}
const mapStateToProps = state => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDetailData(id) {
            dispatch(actionCreators.getDetailInfo(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);