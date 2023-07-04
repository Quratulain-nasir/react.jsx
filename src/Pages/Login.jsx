import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

// Remove this duplicate import statement
// import React from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const login={
    width:"100%",
    borderRadius: '10px',
    marginTop:"100px",
    display:"flex",
    marginBottom:"100px",
    justifyContent:"center",
    color:"white"
  }
  const form={
     backgroundColor:"#a099b0",
     paddingTop:"30px",
     paddingBottom:"30px",
     paddingLeft:"22px",
     paddingRight:"22px"
  }
  return (
    <div style={login}>
    <Form style={form} onSubmit={handleSubmit}>
        <h3 className='text-center pb-3'>Login form</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted text-light">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='bg-light text-dark' variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default LoginForm;