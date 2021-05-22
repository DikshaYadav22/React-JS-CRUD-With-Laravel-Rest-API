import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody, Table} from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        firstName:"",
        email :"",
        phone:""
        
    });

    const { firstName, email, phone } = user;

   
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(()=> {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/forms/${id}`, user);
        history.push("/details");
    };

    const loadUser = async() => {
        const result = await axios.get(`http://127.0.0.1:8000/api/forms/${id}`);
        setUser(result.data);
    };
      
    return(
        <div className="container m-5">
            <Card>
                <CardBody>
                    <CardTitle tag="h3" className="text-center">Edit Details</CardTitle>
                        <Form onSubmit={e => onSubmit(e)} className="p-3">
                            <FormGroup className="p-2">
                                <Label for="firstName">FirstName</Label>
                                <Input 
                                type="text" 
                                value={user.firstName} 
                                onChange={e => onInputChange(e)} 
                                name="firstName" 
                                id="firstName" 
                                placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup className="p-2">
                                <Label for="email">Email</Label>
                                <Input type="email" value={email} onChange={e=>onInputChange(e)} name="email" id="email" placeholder="Enter your email   " />
                            </FormGroup>
                            <FormGroup className="p-2">
                                <Label for="number">Phone</Label>
                                <Input
                                type="number"
                                onChange={e=>onInputChange(e)}
                                name="phone"
                                id="phone"
                                value={phone}
                                placeholder="Enter your number"
                                />
                            </FormGroup>
                            <Button className="m-2" color="warning">Update</Button>
                        </Form>
                </CardBody>
            </Card>
        </div>
    );
};


export default Edit;