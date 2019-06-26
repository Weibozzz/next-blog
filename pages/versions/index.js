import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import Head from 'next/head';
import moment from 'moment';
import 'whatwg-fetch'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Divider, Card, Timeline, Popover, Spin
} from 'antd'
import Loading from '../../components/loading'
import MyLayout from '../../components/MyLayout';
import './index.less'
import {VERSIONS_TXT, COMMON_TITLE} from "../../config/constantsData";
// import {obj, users} from './mockData';
import {githubApiCommits, ALL_COMMITS, githubApiUser} from "../../config/githubApi";

const {Content} = Layout;


class Versions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      versions: [],
      users: {},
      isMobile: false
    }
  }

  async componentWillMount() {
    const {availWidth} = window.screen;
    availWidth<768&&this.setState({
      isMobile:true
    })
    const blog = await fetch(githubApiCommits)
    const userData = await fetch(githubApiUser)
    const data = await blog.json();
    const users = await userData.json();
    const versions = Array.isArray(data) ? data.map(v => {
      const {html_url, commit, sha, author: outAuthor = {}} = v;
      const {avatar_url = '', login = '', html_url: github_html_url} = outAuthor || {};
      const {message, author} = commit;
      const {date} = author;
      return {html_url, message, date: +new Date(date), sha: sha.substring(0, 7), avatar_url, login, github_html_url};
    }) : data
    this.setState({
      versions,
      users
    })
  }

  getHoverTips() {
    const {users} = this.state;
    const {bio, company, location, name, login, avatar_url} = users;
    return <div style={{width: 350}} className="clearfix">
      <div className="fl">
        <Avatar size="large" icon="user" src={avatar_url}/>
      </div>
      <div className="fl" style={{marginLeft: 20}}>
        <p>{name} {login}</p>
        <p>{bio}</p>
        <p>
          <Icon type="environment" theme="outlined"/> {location}
          <Icon type="team" theme="filled"/> {company}
        </p>
      </div>

    </div>;
  }

  render() {

    const {versions,isMobile} = this.state;
    const mode = isMobile?'left':'alternate';
    console.log('mode',mode)
    return (
      <div>
        <Head>
          <title>{VERSIONS_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Content>
            <div style={{margin: 30}}>
              <h2>本网站更新日志</h2>
            </div>
            {
              Array.isArray(versions) && !versions.length &&
              <Loading></Loading>
            }
            <QueueAnim
            component={Timeline}
            style={{width: '80%', margin: '30px auto'}}
            componentProps={{mode}}
            >
              {
                Array.isArray(versions) ? versions.map((v, index) => {
                    const {html_url, message, date, sha, avatar_url} = v;
                    const momentDate = moment(date);
                    return <Timeline.Item key={index}>
                      Commits on {momentDate.format('LLLL')}
                      <Card>
                        <p>
                          <a href={html_url}>
                            {message}
                          </a>
                        </p>
                        <p>
                          <Popover placement="topLeft" content={this.getHoverTips()} trigger="hover">
                            <Avatar size="small" icon="user" src={avatar_url}/>
                          </Popover>
                          <span style={{marginLeft: 8}}>
                          <a href={ALL_COMMITS}>Weibozzz</a>
                          <span style={{marginLeft: 8}}>
                            committed on {momentDate.fromNow()}
                            </span>
                        </span>
                        </p>
                      </Card>
                    </Timeline.Item>
                      ;
                  })
                  :
                  <div>{versions.message}</div>
              }
            </QueueAnim>

            <div style={{margin: '10px', textAlign: 'center'}}>
              <a href={ALL_COMMITS}>
                <Button>All Commits</Button>
              </a>
            </div>
          </Content>
        </MyLayout>
      </div>
    );
  }
}

export default Versions;
