
import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import { Title, WorkImage } from '../components/work'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Drawing = () => (
  <Layout title="Voxels">
    <Container>
      <Title>
        Voxels <Badge></Badge>
      </Title>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkImage src="/images/voxels/cat-programmer.jpeg" alt="flower" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Drawing
// export { getServerSideProps } from '../components/chakra'