import React, { Component } from 'react';
import './search.css';
import Header from '../header/Header';
import NavBar from '../navBar/navBar';
import { connect } from 'react-redux';

class Search extends Component {
    render() {
        return (
            <div id="search">
                <Header field={{ title: 'Search', path: "/search" }} />
                <div>
                    <div className="items-wrap">
                        <div className="user-item">
                            <div className="icon-wrap">
                                <span className="shoucang">
                                    <img src="./image/pyq.svg" alt="" />
                                </span>
                            </div>
                            <div className="textWrap">朋友圈</div>
                            <div className="arrow">
                                <span className="iconfont icon-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                    <div className="items-wrap">
                        <div className="user-item">
                            <div className="icon-wrap">
                                <span style={{ fontSize: '.2rem' }} className="iconfont icon-saoyisao"></span>
                            </div>
                            <div className="textWrap">扫一扫</div>
                            <div className="arrow">
                                <span className="iconfont icon-arrow-right"></span>
                            </div>
                        </div>
                        <div className="user-item">
                            <div className="icon-wrap">
                                <span style={{ fontSize: '.2rem' }} className="iconfont icon-yaoyiyao"></span>
                            </div>
                            <div className="textWrap">摇一摇</div>
                            <div className="arrow">
                                <span className="iconfont icon-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        zone: state
    };
};
export default connect(mapStateToProps)(Search);
