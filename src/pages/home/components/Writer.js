import React from 'react'
import {connect} from 'react-redux'
import { WriterWrapper,WriterItem} from '../style'
const Writer = ({list}) => {
    return (
        <WriterWrapper>
            <div className='title'>
                <span>推荐作者</span>
                <a href='/#'>换一批</a>
            </div>
            {list.map(item=>{
                return (
                    <WriterItem key={item.get('id')}>
                    <img className='pic' alt='' src={item.get('avatar_source')} />
                    <a href='/#' className='follow'>+关注</a>
                    <div className='writer'>
                        <a href='/#' className='writer-name'>{item.get('nickname')}</a>
                        <p className='writer-intro'>写了{item.get('total_wordage')}k字 · {item.get('total_likes_count')}喜欢</p>
                    </div>
                </WriterItem>
                )
            })}

        </WriterWrapper>
    )
}
const mapStateToProps = state => ({
    list: state.getIn(['home', 'writerList'])
});
export default connect(mapStateToProps)(Writer);