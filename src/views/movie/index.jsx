import React, { Component } from "react";
import {HeaderWarp,MainWarp} from './style'


export default class Movie extends Component {
  render() {
    return (
        <div>
          <HeaderWarp>
            <div className="left">
              <span className="city-name">深圳</span>
              <i className="iconfont icon-xiala"></i>
            </div>
            <div className="title">
              <span>影院</span>
            </div>
            <div className="right">
              <i className="iconfont icon-search"></i>
            </div>
          </HeaderWarp>
          <MainWarp>
            <ul className="movie-list">
              <li className="movie-list-item">
                <div className="movie-list-item-left">
                  <span className="movie-name">深圳凤凰国际影城西乡店</span>
                  <span className="movie-address">深圳宝安区西乡街道宝安大道5010号西部硅谷（后瑞地铁站A出口）B座1楼</span>
                </div>
                <div className="movie-list-item-right">
                  <span className="movie-price">￥31元起</span>
                  <span className="movie-addj">1.3km</span>
                </div>
              </li>
            </ul>
          </MainWarp>
        </div>
    )
  }
}

