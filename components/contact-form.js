import React from 'react';

import { db } from '../lib/firebase-config';
import { useState } from 'react';
import { collection, addDoc } from '@firebase/firestore';

import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import Section from '../components/section'

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      addDoc(collection(db, "users"), {
            name: name,
            email: email,
            message: message
        })
        .then(() => {
          setLoader(false);
          alert("Message was sent successfully! 👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
          
        <Section>
            <Container>
                <Heading align="center">Contact Me</Heading>
                <SimpleGrid>
                <label>Name</label>
                <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </SimpleGrid>
            </Container>
        </Section>
        
        <Section>
            <Container>
                <SimpleGrid>
                <label>Email</label>
                <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </SimpleGrid>
            </Container>
        </Section>
        
        <Section>
            <Container>
                <SimpleGrid>
                <label>Message</label>
                <textarea
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                </SimpleGrid>
            </Container>
            
        </Section>
        
        <Box align="center" my={4}>
            <Button type="submit" colorScheme="pink">
                Send
            </Button>
        </Box>
        
      </form>
    );
  };
  
  export default ContactForm;