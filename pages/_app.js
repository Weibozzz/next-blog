import App, {Container} from 'next/app'
import React from 'react'
import {withRouter} from 'next/router'
import fetchIntercept from 'fetch-intercept';
import {Spin} from 'antd';
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer'
import 'babel-polyfill'
import '../asserts/styles.less'
import './index.less'
import './markdown.less'
import Router from 'next/router'
import NProgress from 'nprogress'

const STATUS = {
  OK: 'fulfilled',
  LOADING: 'pending'
}
const {OK, LOADING} = STATUS;

class MyApp extends App {
  constructor() {
    super()
    this.state = {
      userAgent: {
        userAgent: 'pc'
      },
      status: LOADING
    }
  }

  componentDidMount() {
    const ua = navigator.userAgent;
    let userAgent;
    if (ua.indexOf("Android") > 0 || ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0) {
      //移动端
      userAgent = 'mobile'
    } else {
      userAgent = 'pc'
    }
    const _this = this;
    fetchIntercept.register({
      request: function (url, config) {
        // Modify the url or config here
        // console.log('Modify the url or config here')
        _this.setState({
          status: LOADING
        })
        return [url, config];
      },

      requestError: function (error) {
        // Called when an error occurred during another 'request' interceptor call
        status = OK
        // console.log('Called when an error occurred during another \'request\' interceptor call')
        return Promise.reject(error);
      },

      response: function (response) {
        // Modify the response object
        _this.setState({
          status: OK
        })
        // console.log('Modify the response object')
        return response;
      },

      responseError: function (error) {
        // Handle an fetch error
        // console.log('Handle an fetch error')
        return Promise.reject(error);
      }
    });

    this.setState({
      userAgent: {
        userAgent
      }
    })
  }

  render() {
    Router.onRouteChangeStart = (url) => {
      NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
    const {Component, pageProps, reduxStore, router: {pathname}} = this.props;
    const {userAgent, status} = this.state;
    let myPageProps = {...pageProps, ...userAgent};
    // console.log(pathname,status)
    return (
      <Container>
        <Provider store={reduxStore}>
          <div className="container">
            {
              pathname === '/' || pathname === '/gallery'
                ?
                ''
                : <Header {...userAgent} />
            }

            {
              status === OK ?
                ''
                :
                <Spin tip="Loading..."/>
            }
            <Component {...myPageProps}  />
            {
              pathname === '/' || pathname === '/gallery'
                ?
                ''
                :
                <Footer/>
            }
          </div>
        </Provider>

        <style jsx global>{`

.fl{
    float: left;
}
.fr{
    float: right;
}
.clearfix:after{
    content: '';
    clear: both;
    display: block;
}
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
#__next,.container{
    height: 100%;
}
.container{
    display: flex;
    flex-direction: column;
    background-color: #f0f2f5;
}
.container>div:nth-child(2){
    flex-grow: 1;
}



        `}</style>
      </Container>
    )
  }
}

export default withReduxStore(withRouter(MyApp))
