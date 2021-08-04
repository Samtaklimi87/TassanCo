import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormCotent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  FormInputTextArea,
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Tassan Bro's</Icon>
          <FormCotent>
            <Form action="#">
              <FormH1>Contact Us</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Subject</FormLabel>
              <FormInput type="subject" required />
              <FormLabel htmlFor="for">Messege</FormLabel>
              <FormInputTextArea type="messege" required />
              <FormButton type="submit" >Send</FormButton>
            </Form>
          </FormCotent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
