import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m an aspiring full-stack developer 👩‍💻 based in US! {'\n'}
        I am also a graduate student 👩‍🎓 majoring in Computer Science at the University of Pennsylvania.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yaya Liang
          </Heading>
          <p>Woman Technologist ( Artist / Developer / Designer / Youtuber )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/yaya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Programming Language</BioYear>
          Java, Python, C++, Solidity
        </BioSection>
        <BioSection>
          <BioYear>Mobile App</BioYear>
          Xcode, AndroidStudio, Flutter, Dart
        </BioSection>
        <BioSection>
          <BioYear>Web App</BioYear>
          JavaScript, Firebase, RESTful, React.js, Next.js, Three.js, Email.js          
        </BioSection>
        <BioSection>
          <BioYear>Other</BioYear>
          Docker, Kubernetes, Spring Boot, Web 3.0, NoSQL, Postman, Git
        </BioSection>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Yaya is an aspiring full-stack developer based in US with a
          passion for building fun products on the internet. She love the procedures, 
          from planning and designing all the way to solving real-life problems with code. 
          When not online, she loves reading, jogging and making voxels. Here are some {' '}
          <NextLink href="/quotes">
            <Link>quotes</Link>
          </NextLink>
          {' '} from the books she has read and the {' '}
          <NextLink href="/voxels">
            <Link>voxels</Link>
          </NextLink>
          {' '} she has crafted. Currently, she is working on her own product called{' '}
          <NextLink href="/works/heard">
            <Link>Heard</Link>
          </NextLink>
          {' '} outside her school work.
        </Paragraph>
        <Box align="left" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Started studying Computer Science at the University of Pennsylvania
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Obtained the Master&apos;s in Mathematics Education at the University of Virginia
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♡ 
        </Heading>
        <Paragraph>
          Making {' '}
          <NextLink href="/voxel">
            <Link>voxel</Link>
          </NextLink>
          {' '} art, {' '}
          <NextLink href="/drawing">
            <Link>drawing</Link>
          </NextLink>
          ,{' '}
          <NextLink href="/photography">
            <Link>photography</Link>
          </NextLink>
          
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <img src="/images/links/youtube.jpeg" alt="youtube" /> 
          <Link href="https://www.youtube.com/channel/UCaybuLoBrZvHBAlgJC5XuHQ" target="_blank">
            <Button
              variant="ghost"
              colorScheme="pink"
              leftIcon={<Icon as={IoLogoYoutube} />}
            >
              AlgoGirl
            </Button>
          </Link>

        </SimpleGrid>

        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <Link href="https://www.linkedin.com/in/yaya-l-8a28171a2" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Yaya-Liang
              </Button>
          </Link>
          <Link href="https://instagram.com/yaying_liang_xiannv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @yaying_liang
              </Button>
            </Link>

            <Link href="https://github.com/snowyaya" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @snowyaya
              </Button>
            </Link>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/contact-me">
            <Button colorScheme="pink">
            Connect with Me
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getServerSideProps } from '../components/chakra'
