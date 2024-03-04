import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from 'axios'
const Form = () => {
  const [formData, setFormData] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(isEmail(formData?.email))
    if(isEmail(formData?.email)){
        const response = await axios.post('http://localhost:3000/books', formData);
        console.log('response',response)
    }
    else{

    }
  }
  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return false;
    }
    else{
        return true
    }
}
function handleChange (event) {
    const { name, value } = event.target;
    console.log("name", name, value);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">My Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          type="text"
          required
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          type="text"
          required
          onChange={handleChange}
        />
        <TextField
          name="date"
          label="Date"
          fullWidth
          margin="normal"
          type="date"
          required
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
