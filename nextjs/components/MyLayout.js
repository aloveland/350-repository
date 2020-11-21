import Header from './Header'

const layoutStyle = {
  margin: 'auto auto',
  textAlign: 'center',
  padding: 20,
  border: '1px solid #DDD',
  font-size: 15px,
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
