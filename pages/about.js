import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts() {
  return [
    {id: 'hello-nextjs', title: 'Hello Next.js'},
    {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}


export default () => (
  <Layout>
    <p>This is the about page</p>
    <ul>
      {getPosts().map((post) => (
        <li className="testClass" key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      .testClass{
        background-color:orange;
      }
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: red;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)