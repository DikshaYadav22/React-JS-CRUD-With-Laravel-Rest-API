import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardBody,
  Table,
} from "reactstrap";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const saveUser = () => {
    let data = { firstName, email, phone };
    fetch("http://127.0.0.1:8000/api/forms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
      });
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
            <Button className="m-2" color="warning" onClick={saveUser}>
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>

      <Table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{firstName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <a href=""></a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Contact;
