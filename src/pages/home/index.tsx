import React, {Component} from 'react';
import {connect} from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {HomeWrapper, HomeLeft, HomeRight} from './style';

class Home extends Component<any, any> {

    componentDidMount(): void {
        this.props.changeHomeData()
    }

    render() {

        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt=''
                         src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch: any) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Home)
