import React, { useState } from 'react'
import {  Container,
          FormButton,
          FormWrap,
          Icon,
          FormContent,
          FormH1,
          FormLabel,
          FormInput,
          Form,
          Text } from './signin'

const Signin = () => {
  function signinUser(e) {
    e.preventDefault()
    console.log("Username: ${email} Password: ${password}")
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Rainforest</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign to your account</FormH1>
               <FormLabel htmlFor="for">Email</FormLabel>
               <FormInput type="email" id="email" required />
               <FormLabel htmlFor="for">Password</FormLabel>
               <FormInput type="password" required />
               <FormButton type="submit">Continue</FormButton>
               <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin;