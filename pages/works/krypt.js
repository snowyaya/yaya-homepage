import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Krypt">
    <Container>
      <Title>
        Krypt{' '}
        <Badge>
          <Link href="https://github.com/snowyaya/Web3.0">
          Repo
          </Link>
        </Badge>
      </Title>
      
      <P>
          Crypto trading web app, where you can easily send your crypto to anywhere in the world.
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DO</Meta>
          <ListItem>- Connect a regular ReactJS application to the blockchain 
              and pair it to your Ethereum wallet using MetaMask
          </ListItem>
          <ListItem>- Wrote smart contracts on the Ethereum network using the Solidity 
              programming language
          </ListItem>
          <ListItem>- Allow users to send transactions through the blockchain
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Solidity, Smart Contract, Web 3.0</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/krypt.png" alt="krypt" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
