import styled from 'styled-components'
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div`
    z-index:2;
    position:relative;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:300px;
    display:block;
    width: 100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height:100%;
    padding-right:70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color:#333;
    &.left {
        float: left;
    };
    &.right {
        float: right;
        color: #969696;
        cursor: pointer;
    };
    &.active {
        color: #ea6f5a;
    };
`;
export const SearchWrapper = styled.div`
    position: relative;
    float:left;
    .iconfont {
        position: absolute;
        right:10px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius:15px;
        text-align: center;
        &.focused {
            background: #777;
            color:#fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    margin-top: 10px;
    padding:20px;
    box-sizing: border-box;
    background: #eee;
    outline: none;
    border-radius: 19px;
    font-size:14px;
    &::placeholder {
        color: #999;
    };
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width:240px
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696; 
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size: 13px;
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    padding:0 5px;
    margin: 0 10px 15px 0;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    display:block;
    float:left;
    color: #787878;
    font-size: 12px;
`

export const Addition = styled.div`
    position: absolute;
    right:200px;
    top:0;
    height:56px; 
`;
export const Button = styled.div`
    float:right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius:  19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.writing {
        color: #fff;
        background: #ed6149;
    };
    &.reg {
        color: #ed6149;
    };
`