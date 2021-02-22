import React, {Component} from 'react';
import Link from 'next/link';
import './index.less'
import { BILILI_ADDRESS } from '../../config/constantsData'

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Link href={BILILI_ADDRESS.url}>
          <a target='_blank'><img className='guitar' src='/static/guitar.png'/></a>
        </Link>
      </div>
    )
  }
}

export default MyCard;
