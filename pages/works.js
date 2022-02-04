import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCryptopunk from '../public/images/works/cryptopunk.png'
import thumbKrypt from '../public/images/works/krypt.png'
import thumbComplimentr from '../public/images/works/complimentr.png'
import thumbSharingapp from '../public/images/works/sharingapp.png'
import thumbCoviddataanalysis from '../public/images/works/coviddataanalysis.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="krypt" title="Krypt" thumbnail={thumbKrypt}>
            Using web 3.0 to send your Crypto anywhere in the world.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="cryptopunk" title="Crypto-Punk" thumbnail={thumbCryptopunk}>
            Various of crypto punks are displayed with a dynamic view.
          </WorkGridItem>
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
          <WorkGridItem
            id="complimentr"
            title="Complimentr"
            thumbnail={thumbComplimentr}
          >
            A web app where you can send appreciating message to people who you are grateful for!
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
            <WorkGridItem id="coviddataanalysis" thumbnail={thumbCoviddataanalysis} title="Covid Data Analysis">
              A data analysis implementation which explicitly shows the relation between the real estate 
              market and the covid-19 vaccination.
            </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="sharingapp"
            title="Sharing App"
            thumbnail={thumbSharingapp}
          >
            An Andriod app that help you keep tracking of the status of your items.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
