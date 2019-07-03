import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Loadable from 'react-loadable';
import { HomeWrapone, HomeWrapthree, HomeWraptwo } from './style'
const Cinema = Loadable({
  loader: () => import('../cinema/index'),
  loading: () => <div>加载中。。。。</div>
})
const Movie = Loadable({
  loader: () => import('../movie/index'),
  loading: () => <div>加载中。。。。</div>
})
const My = Loadable({
  loader: () => import('../my/index'),
  loading: () => <div>加载中。。。。</div>
})

export default class Home extends Component {
  render() {
    return (
      <HomeWrapone>
        <HomeWraptwo >
          <Route path='/cinema' component={Cinema}></Route>
          <Route path='/movie' component={Movie}></Route>
          <Route path='/my' component={My}></Route>
        </HomeWraptwo>
        <HomeWrapthree>
          <NavLink to='/cinema'><i className="iconfont icon-cinemas"><span>电影</span></i></NavLink>
          <NavLink to='/movie'><i className="iconfont icon-films"><span>影院</span></i></NavLink>
          <NavLink to=''><i className="iconfont icon-sales" ><span>特惠</span></i></NavLink>
          <NavLink to='/my'><i className="iconfont icon-center"><span>我的</span></i></NavLink>
        </HomeWrapthree>
      </HomeWrapone>
    )
  }
}

