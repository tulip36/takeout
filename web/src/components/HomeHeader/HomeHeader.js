import { Layout, DatePicker, Button } from 'antd'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout
const HomeHeader = () => {
  return (
    <div>
      <h2>{'HomeHeader'}</h2>
      <Layout>
        <Header
          style={{ height: '64', width: '100%', backgroundColor: 'blue' }}
        >
          Header
        </Header>
        <Layout
          style={{ height: '464', width: '100%', backgroundColor: 'grey' }}
        >
          <Content
            style={{ height: '464', width: '100%', backgroundColor: 'grey' }}
          >
            <DatePicker />
            <br />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default HomeHeader
