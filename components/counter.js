import React, {Component} from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import Index from '../pages/index';
import { incrementCount,asyncTest, decrementCount, resetCount,serverRenderIncrementCount } from '../store/store'

class Counter extends React.Component {

  increment = () => {
    const {dispatch} = this.props
    console.log(this.props)
    // dispatch(incrementCount('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10'))
    incrementCount(dispatch,'http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
  }

  decrement = () => {
    const {dispatch} = this.props

    dispatch(decrementCount())
  }
  componentDidMount () {
    const {dispatch} = this.props
    // this.timer = startClock(dispatch)
    //console.log(asyncTest(dispatch))


  }
  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }

  render () {
    const { count,res=[] } = this.props
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <ul>
          {res.map((v) =>
            (
              <li key={v.id}>
                <Link as={`/p/${v.id}`} href={`/post?id=${v.id}`}>
                  <a>{v.title}</a>
                </Link>
              </li>
            )
          )}
          <li>2232</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {count,res,light} = state
  return {count,res,light}
}

export default connect(mapStateToProps)(Counter)
