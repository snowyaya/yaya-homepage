import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sharing App">
    <Container>
      <Title>
        Sharing App {' '}
        <Badge>
          <Link href="https://github.com/snowyaya/SharingApp">
          Repo
          </Link>
        </Badge>
      </Title>
        <P>
        An Andriod platform where people can register their items and keep tracking of the 
        item status.
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DO</Meta>
          <ListItem>
              - Register and delete multiple items
          </ListItem>
          <ListItem>
              - Change items to different status and group them by status
          </ListItem>
          <ListItem>
              - Can be furether developed to a library book tracking system and a 
              locker management system.
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Andriod</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AndroidStudio, Java</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sharingapp.png" alt="sharingapp" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
