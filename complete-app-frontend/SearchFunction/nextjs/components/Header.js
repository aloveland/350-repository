import Link from 'next/link'

const linkStyle = {
  marginRight: 30,
  fontSize: 30,
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/findcamp">
        <a style={linkStyle}>Find</a>
      </Link>
    </div>
  )
}
