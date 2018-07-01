import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => {
  console.log(props)
  
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium}/>
      <div className="blog">
        <h1>{props.blogData[0].title}</h1>
        <div className="cont" dangerouslySetInnerHTML={{__html:decodeURIComponent(props.blogData[0].content)}}>

        </div>
      </div>
    </Layout>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const blog = await fetch(`http://www.liuweibo.cn/detail?id=${id}`)
  const show = await res.json()
  const blogData = await blog.json()

  console.log(`Fetched show: ${show.name}`)

  return { show,blogData }
}

export default Post