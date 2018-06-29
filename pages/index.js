import React, {Component} from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import {Button,Switch} from 'antd';
import '../asserts/styles.less'


const Index = (props) => {
  console.log(props)
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='stylesheet' href='/_next/static/style.css' />
        <title>刘伟波博客</title>
      </Head>
      <Layout>
        <h1>Batman TV Shows3</h1>
        <Button type="primary">Primary</Button>
        <Switch defaultChecked name='switch' />
        <ul>
          {props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {props.blogData.map((v) =>
            (
              <li key={v.id}>
                <Link as={`/p/${v.id}`} href={`/post?id=${v.id}`}>
                  <a>{v.title}</a>
                </Link>
              </li>
            )
          )}
        </ul>
      </Layout>
    </div>
  );
}

Index.getInitialProps = async function () {
  const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  const blogDataJson = await blogData.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(`Show blogDataJson fetched. Count: ${blogDataJson.length}`)

  return {
    shows: data,
    blogData: blogDataJson
  }
}

export default Index

