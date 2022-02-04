import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crypto Punk">
    <Container>
      <Title>
        Crypto Punk {" "}
        <Badge>
          <Link href="https://github.com/snowyaya/CryptoPunk">
          Repo
          </Link>
        </Badge>
      </Title>
      <P>
          Various crypto punks art are displayed with dynamic view.
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DO</Meta>
          <ListItem>
              - A frontend web 3.0 application to display various crypto punk arts one the internet.
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Web 3.0</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cryptopunk.png" alt="cryptopunk" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
