import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button, AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import {formatTime, getArticleInfo, getHtml, OldTime} from '../../until';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import Header from '../../components/Header';
import ArticleTitle from '../../components/ArticleTitle';

const {Content} = Layout;
const Post = (props) => {
  console.log(props)
  const {blogData} = props;
  const {content, createTime} = blogData[0]
  return (
    <div className="detail">
      <Head>
        <title>blog</title>
      </Head>
      <Header/>
      <Layout>
        <Content style={{padding: '0 50px'}}>
          <div style={{background: '#fff', padding: 24, minHeight: 380}}>
            <ArticleTitle detailArticle={blogData[0]}/>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  createTime > OldTime ?
                    marked(getHtml(decodeURIComponent(content), createTime), {breaks: true})
                    : getHtml(decodeURIComponent(content), createTime)
              }}
            ></div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

Post.getInitialProps = async function (context) {
  const {id} = context.query
  const blog = await fetch(`http://www.liuweibo.cn/detail?id=${id}`)
  const blogData = await blog.json()


  return {blogData}
}
export default Post