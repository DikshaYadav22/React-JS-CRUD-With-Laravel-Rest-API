import React, { useState } from "react";
// import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Contact = () => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const saveUser = (e) => {
    let user = { firstName, email, phone };
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    axios
      .post("http://127.0.0.1:8000/api/forms", user, { headers })
      .then((result) => {
        console.log(result);
        history.push("/details");
      });
  };
  return (
    <div className="container m-5">
      <Card>
        <CardBody>
          <CardTitle tag="h3" className="text-center">
            Contact Us
          </CardTitle>
          <Form className="p-3">
            <FormGroup className="p-2">
              <Label for="firstName">FirstName</Label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                name="firstName"
                id="firstName"
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup className="p-2">
              <Label for="email">Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id="email"
                placeholder="Enter your email   "
              />
            </FormGroup>
            <FormGroup className="p-2">
              <Label for="number">Phone</Label>
              <Input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="phone"
                value={phone}
                placeholder="Enter your number"
              />
            </FormGroup>
            <Button
              className="m-2"
              color="warning"
              onClick={(e) => {
                saveUser(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
