import React, {Component} from 'react';
import {connect} from 'react-redux';
import Gallery from '../../components/Gallery';
import './index.less'

class Gallert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gallery-wrapper">
        <Gallery></Gallery>
      </div>

    );
  }
}
export default (Gallert);