import React, { useEffect, useState } from 'react'
import Shop from './shop'
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Register(props) {
    // const [input,setInput]=useState({
    //     email:'',
    //     password:''
    // });

    const handleSubmit=(e)=>{
    

    }
    let history = useHistory();

    return (
        <div>
            <div className="login" style={{
                height: "100%",
                backgroundImage: `url("https://i.imgur.com/81RTZEw.png")`
            }}>
            <div className="login-form">
                <Form>
                <h1>Register</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <button onClick={() => history.push("/shop")}>Register</button>
                    <Link to="/"><li>Login Here</li></Link>
                </Form>
            </div>
            </div>
        </div>
    )
}
export default Register;