import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { FaLock } from "react-icons/fa"

const Work = () => (
  <Layout title="Covid Data Analysis">
    <Container>
      <Title>
        Covid Data Analysis {" "}
        <Badge><FaLock /></Badge>
      </Title>
        <P>
            A data analysis implementation which explicitly shows the 
            relation between the real estate market and the covid-19 vaccination situation.
        </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>DO</Meta>
          <ListItem>
              - Analyzed large data entried in multiple JSON files, and merged the data for further
              analysis
          </ListItem>
          <ListItem>
              - State machine was deployed to help handle data entries
          </ListItem>
          <ListItem>
              - Strategy design pattern to improve the efficiency of the program
          </ListItem>
          <ListItem>
              - People who are planning to move to that area can see the relationship between
            the real estate market and the covid vaccination rate
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Multiple Data Structures and Algorithms</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/coviddataanalysis.png" alt="coviddataanalysis" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
