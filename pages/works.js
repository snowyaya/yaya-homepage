import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { WorkImage } from '../components/work'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkImage src="/images/works/krypt.png" />
        </Section>
        <Section delay={0.1}>
          <WorkImage src="/images/works/cryptopunk.png" />
        </Section>
        {/* <Section delay={0.2}>
          <WorkGridItem
            id="microservice"
            title="Microservice"
            thumbnail={thumbMicroservice}
          >
            ---
          </WorkGridItem>
        </Section> */}

        <Section delay={0.3}>
          <WorkGridItem src="/images/works/complimentr.png" />
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.5}>
            <WorkImage src="/images/works/coviddataanalysis.png" />
              A data analysis implementation which explicitly shows the relation between the real estate 
              market and the covid-19 vaccination.
        </Section>
        <Section delay={0.6}>
          <WorkImage src="/images/works/sharingapp.png" />
            An Andriod app that help you keep tracking of the status of your items.
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
