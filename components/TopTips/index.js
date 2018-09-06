import React, { Component } from 'react';
// import Link from 'next/link';
import 'whatwg-fetch';
import Router, { withRouter } from 'next/router';
import {
  Alert,
  Button,
  Tooltip
} from 'antd';
import { GITHUB_ADDRESS, TOP_TIPS, githubApi } from '../../config/constantsData';
// import {getDetailUrl} from "../../config";

Router.onRouteChangeStart = () => {

};
const ButtonGroup = Button.Group;

class TopTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stargazers_count: 0
    };
  }

  async componentWillMount() {
    const blog = await fetch(githubApi);
    const { stargazers_count = 0 } = await blog.json();
    this.setState({ stargazers_count });
  }

  render() {
    const { stargazers_count } = this.state;
    return (
      <div>
        <Alert
          message={TOP_TIPS}
          type="success"
          closable
          iconType="smile"
          banner
        />
        <div>
          <ButtonGroup href={GITHUB_ADDRESS}>
            <Button className="github-style bm-no-border " icon="github">Github</Button>
            <Tooltip placement="right" title="Star">
              <Button className="bm-no-border">{stargazers_count}</Button>
            </Tooltip>
          </ButtonGroup>
        </div>
        <style>
          {`
          .github-style {
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
}
.bm-no-border{
  border-bottom: none;
}

        `
          }

        </style>
      </div>
    );
  }
}

// https://api.github.com/repos/Weibozzz/next-blog   stargazers_count
export default withRouter(TopTips);
