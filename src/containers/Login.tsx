import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/Button";
import LoaderButton from "../components/LoaderButton";
import { useHistory,Redirect } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { useFormFields} from "../libs/hooksLib";
import axios from 'axios';
import "./Login.css";

interface IHistory{
push: string
}
export default function Login(props: any) {

  const apiurl = 'https://reqres.in/api/login';
  const history  = useHistory<IHistory>();

 const {userHasAuthenticated} = useAppContext();
  // const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //setIsLoading(true);
    const payload = {
      "email": fields.email,
      "password": fields.password,
    }
    axios.post(apiurl, payload).then(function (response) {
      debugger;
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        //localStorage.setItem("username", JSON.stringify(response.email));
        //alert("success");
       userHasAuthenticated(true);
       history.push('/Userlist');
      }
      else
      {
        alert("Check yur Username and password");
      }
    });
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          //isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
            </LoaderButton>
      </Form>
    </div>
  );
}