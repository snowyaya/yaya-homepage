import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import { Title, WorkImage } from '../components/work'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Photograph = () => (
  <Layout title="Photograph">
    <Container>
      <Title>
        Photography <Badge></Badge>
      </Title>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkImage src="/images/photography/hudsonriver.jpeg" alt="hudsonriver" />
        <WorkImage src="/images/photography/newyork.jpeg" alt="hudsonriver" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Photograph
// export { getServerSideProps } from '../components/chakra'
