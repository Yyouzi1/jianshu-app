import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import loadable from '../util/loadable'
const Header = loadable(() => import('../common/header'));
const Home = loadable(() => import('../pages/home'));
const Detail = loadable(() => import('../pages/detail'));
const Login = loadable(() => import('../pages/login'));
const Writer = loadable(() => import('../pages/writer'));

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/writer' exact component={Writer}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
    </BrowserRouter>
)
export default Routes