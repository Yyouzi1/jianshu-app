import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group'
const getListArea = (props) => {
    const { page, totalPage, focused, list, mouseIn, handleMouseEnter, handleMouseOut, handleChangePage } = props
    const newList = list.toJS();
    const pageList = []
    if (newList.length) {
        for (let i = ((page - 1) * 10); i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }
    if (focused || mouseIn) {
        return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                <SearchInfoTitle>热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}
const Header = (props) => {
    const { focused, list, handleOnFocus, handleOnBlur } = props
    return (
        <HeaderWrapper >
            <Logo href='/' />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper >
                    <CSSTransition timeout={200} in={focused} classNames="slide">
                        <NavSearch onFocus={() => handleOnFocus(list)} onBlur={handleOnBlur} className={focused ? 'focused' : ''} />
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</span>
                    {getListArea(props)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">
                    <span className="iconfont">&#xe615;</span>
                    写文章
                    </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleOnFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleOnBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseOut() {
            dispatch(actionCreators.mouseOut())
        },
        handleChangePage(page, totalPage) {
            console.log(page, totalPage);
            if (page < totalPage) {
                dispatch(actionCreators.changePage(++page))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);