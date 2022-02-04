import ContactForm from '../components/contact-form';


import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const ContactMe = () => (
    <Layout title="Connect with Me">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          <ContactForm />
        </Heading>
      </Container>
    </Layout>
)

export default ContactMe;