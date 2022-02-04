import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Heard">
    <Container>
      <Title>
        Heard <Badge>2021-</Badge>
      </Title>
      <P>
        A voice post sharing app, cross-platform and encrypted data sync support.
      </P>
      <P>
          *** Thank you for your interest in this app! ❤️ Please note I am still working on this app while I am working on my school work.
          Trying my best to make it happen here! 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Firebase, NodeJS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
