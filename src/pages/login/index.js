import React from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import { actionCreators } from './store'
const Login = ({ loginStatus,login }) => {
    let count, password
    if(!loginStatus){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input) => { count = input }}></Input>
                    <Input placeholder='密码' type='password' ref={(input) => { password = input }}></Input>
                    <Button onClick={() => { login(count, password) }}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }else{
        return <Redirect to='/'/>
    }
}
const mapStateToProps = state => ({
    loginStatus: state.getIn(['login','login'])
})
const mapDispatchToProps = dispatch => {
    return {
        login(count, password) {
            dispatch(actionCreators.login(count.value, password.value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);