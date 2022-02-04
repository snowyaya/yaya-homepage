import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Complimentr">
    <Container>
      <Title>
        Complimentr {' '}
        <Badge>
          <Link href="https://github.com/snowyaya/Complimentr">
          Repo
          </Link>
        </Badge>
      </Title>
        <P>
        A web app where you can send appreciating message to people who you are grateful for!
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DO</Meta>
          <ListItem>
              - Sending text message to other people
          </ListItem>
          <ListItem>
              - Appreciate other people in words makes you happier
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>RESTful, Postman, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/complimentr.png" alt="complimentr" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
