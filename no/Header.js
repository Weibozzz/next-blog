import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="nav-bar">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/markdown">
      <a style={linkStyle}>markdown</a>
    </Link>
    <style jsx >{`
     .nav-bar{
      font-size:24px;
      background-color:red;
     }
  `}</style>
  </div>
)

export default Header