import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
const List = ({ list, page, getHomeList }) => {
    return (
        <div>
            {list.map((item, index) => {
                return (
                    <Link key={index} to={`/detail/${item.get('id')}`}>
                        <ListItem >
                        <img className="pic" alt='' src={item.get('imgUrl')}></img>
                        <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                    </Link>
                )
            })}
            <LoadMore onClick={()=>{getHomeList(page)}}>查看更多</LoadMore>
        </div>

    )
}
const mapStateToProps = state => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = dispatch => ({
    getHomeList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List);