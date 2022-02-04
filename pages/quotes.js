import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Paragraph from '../components/paragraph'

const Quotes = () => (
  <Layout title="Quotes">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Bookshelf - English
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <Paragraph>
          <Paragraph>
              Only you can limit you and only you can break that limit. --- Limitless (Jim Kwik)
            </Paragraph>
          </Paragraph>
        </Section>
      </SimpleGrid>
      

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Bookshelf - Chinese
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <Paragraph>
              辛苦劳作的一天已经结束，像一页写着日期的日历那样已成定局。但这一年还有许多的日子要过，
              还有许多别的工作要做。 {"\n"} 
              --- 夜航西飞 （柏瑞尔·马卡姆）
            </Paragraph>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
) 

export default Quotes