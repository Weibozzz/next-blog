import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../asserts/styles.less'

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
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
#root,.container{
    height: 100%;
    min-height: 100%;
}
.container{
    display: flex;
    flex-direction: column;
    background-color: #f0f2f5;
}
.mid-content{
    flex-grow: 1;
}



        `}</style>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
